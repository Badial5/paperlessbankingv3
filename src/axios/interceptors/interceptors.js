// import axios from 'axios'
// axios.defaults.baseURL = "https://banking-api.inlakssolutions.com/"

// axios.interceptors.response.use(resp => resp, async error => {
//     if(error.response.status === 401) {
//         const response = await axios.post("http://auth/v1/token/refresh/", {}, {withCredentials: true})

//         if (response.status === 200) {
//             axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['token']}`

//             return axios(error.config)
//         }
//     }
//     return error
// })



//NEW ONE FROM THE TEMPLATES

import axios from 'axios';
// config
// import { HOST_API } from '../config';

// ----------------------------------------------------------------------

    //Example 2

// const axiosInstance = axios.create({
//   baseURL: "https://api.inlakssolutions.com/",
//   // baseURL: "https://api.inlakssolutions.com/accounts/v1/signup/",
// });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );

// export default axiosInstance;


// Example 3 

axios.defaults.baseURL = "https://api.inlakssolutions.com/"