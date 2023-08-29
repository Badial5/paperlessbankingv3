import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.inlakssolutions.com/', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('Token')
  },
});




api.interceptors.request.use(async (config) => {

    const token = sessionStorage.getItem('Token');

    config.headers['Authorization'] = `Bearer ${token}`;
    //  return config;
    if (token) {
      const expiration = sessionStorage.getItem('TokenExpiry');
      if (expiration && new Date().getTime() > Number(expiration)) {
        // Token has expired, initiate renewal or refresh process
        try {
          const newToken = await refreshToken();
          config.headers['Authorization'] = `Bearer ${newToken}`;
          sessionStorage.setItem('token', newToken);
        } catch (error) {
          console.error('Token refresh failed:', error);
          // Handle refresh failure, possibly redirect to login
        }
      } else {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  });


// api.interceptors.request.use(async (config) => {
//     const token = sessionStorage.getItem('Token');
  
//     if (token) {
//       const expiration = sessionStorage.getItem('TokenExpiry');
//       if (expiration && new Date().getTime() < Number(expiration)) {
//         config.headers['Authorization'] = `Bearer ${token}`;
//       } else {
//         try {
//           const newToken = await refreshToken();
//           config.headers['Authorization'] = `Bearer ${newToken}`;
//           sessionStorage.setItem('Token', newToken);
//         } catch (error) {
//         //   handleRefreshFailure();
//         console.log(error)
//         }
//       }
//     }
//     return config;
//   });



export default api;



async function refreshToken() {
  try {
    const refreshToken = sessionStorage.getItem('RefreshToken');
    const response = await api.post('/auth/v1/token/refresh/', { refresh: refreshToken }); // Endpoint to refresh token
    const newToken = response.data.access_token;
    const newExpiration = response.data.access_token_expiration;
    sessionStorage.setItem('Token', newToken);
    sessionStorage.setItem('TokenExpiry', newExpiration);
    console.log('Token refreshed successfully.');
    return newToken;
  } catch (error) {
    throw error;
  }
}



// async function refreshToken() {
//     try {
//       const refreshToken = sessionStorage.getItem('RefreshToken');
//       const response = await api.post('/auth/v1/token/refresh/', { refresh: refreshToken });
//       const newToken = response.data.access_token;
//       const newExpiration = response.data.access_token_expiration;
//       sessionStorage.setItem('Token', newToken);
//       sessionStorage.setItem('TokenExpiry', newExpiration);
//       console.log('Token refreshed successfully.');
//       return newToken;
//     } catch (error) {
//       throw error;
//     }
//   }





// function handleRefreshFailure() {
//   console.error('Token refresh failed.');
//   sessionStorage.removeItem('Token');
//   sessionStorage.removeItem('TokenExpiry');
//   // Optionally, redirect to the login page
//   window.location.href = '/login'; // Replace with your login route
// }


function handleRefreshFailure() {
    console.error('Token refresh failed.');
    sessionStorage.removeItem('Token');
    sessionStorage.removeItem('TokenExpiry');
    window.location.href = '/login'; // Redirect to login page
  }
  
  
    
  
  