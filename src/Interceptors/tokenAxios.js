import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.inlakssolutions.com/', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    // Use 'token' here
    // Authorization: 'Bearer ' + sessionStorage.getItem('token') 
  },
});

// api.interceptors.request.use(async (config) => {
//   const token = sessionStorage.getItem('token'); // Use 'token' here

//   config.headers['Authorization'] = `Bearer ${token}`;
  
//   if (token) {
//     const expiration = sessionStorage.getItem('TokenExpiry');
//     if (expiration && new Date().getTime() > Number(expiration)) {
//       // Token has expired, initiate renewal or refresh process
//       try {
//         const newToken = await refreshToken();
//         config.headers['Authorization'] = `Bearer ${newToken}`;
//         sessionStorage.setItem('token', newToken); // Use 'token' here
//       } catch (error) {
//         console.error('Token refresh failed:', error);
//         handleRefreshFailure(); // Call the error handling function
//       }
//     }
//   }
//   return config;
// });

const TOKEN = sessionStorage.getItem('token');
//causes the error
// api.interceptors.request.use(
//   (config) => {
//     const token = `${TOKEN}`
//     const auth = token ? `Bearer ${token}` : '';
//     config.headers.common['Authorization'] = auth;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );


export default api;

// async function refreshToken() {
//   try {
//     const refreshToken = sessionStorage.getItem('RefreshToken');
//     const response = await api.post('/auth/v1/token/refresh/', { refresh: refreshToken }); // Endpoint to refresh token
//     const newToken = response.data.access_token;
//     const newExpiration = response.data.access_token_expiration;
//     sessionStorage.setItem('token', newToken); // Use 'token' here
//     sessionStorage.setItem('TokenExpiry', newExpiration);
//     console.log('Token refreshed successfully.');
//     return newToken;
//   } catch (error) {
//     console.error('Token refresh failed:', error);
//     handleRefreshFailure(); // Call the error handling function
//     throw error;
//   }
// }

// function handleRefreshFailure() {
//   console.error('Token refresh failed.');
//   sessionStorage.removeItem('token'); // Use 'token' here
//   sessionStorage.removeItem('TokenExpiry');
//   window.location.href = '/login'; // Redirect to login page or handle differently
// }
