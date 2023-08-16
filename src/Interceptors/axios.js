import axios from "axios";

axios.defaults.baseURL = "https://api.inlakssolutions.com/"


axios.interceptors.response.use(response => response, async error => {  
    
    if(error.response.status === 401) {
        const response = await axios.post("auth/v1/token/refresh/", {}, {withCredentials: true})

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            //to redo our previous request
            return axios(error.config)
        }
    }
    
    return error,
});