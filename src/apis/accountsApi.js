import axios from "axios";


const paperlessApi = axios.create({
    baseURL: "https://api.inlakssolutions.com/"
})


export const getUsers = async () => {
    const response = await paperlessApi.get("/accounts/v1/users/")

    return response.data
}


export const getUsersID = async ({id}) => {
    const response = await paperlessApi.get(`/accounts/v1/users/${id}/`)

    return response.data
}


export const activateAccount = async () => {
    const response = await paperlessApi.post("/accounts/v1/activate-account/")

    return response.data
}


export const confirmPassword = async () => {
    const response = await paperlessApi.post("/accounts/v1/confirm-password-reset-otp/") 

    return response.data
}


export const loginUsers = async () => {
    const response = await paperlessApi.post("/accounts/v1/login/")

    return response.data
}


export const logoutUsers = async () => {
    const response = await paperlessApi.post("/accounts/v1/password-reset/")

    return response.data
}


export const passwordWordReset = async () => {
    const response = await paperlessApi.post("/accounts/v1/password-reset/")

    return response.data
}


export const passwordWordResetOtp = async () => {
    const response = await paperlessApi.post("/accounts/v1/password-reset-otp/")

    return response.data
}


export const profileUpdate = async () => {
    const response = await paperlessApi.patch("/accounts/v1/profile/update")

    return response.data
}


export const profileImageUpdate = async () => {
    const response = await paperlessApi.patch("/accounts/v1/profile/update")

    return response.data
}


export const resendActivationOtp = async () => {
    const response = await paperlessApi.post("/accounts/v1/resend-activation-otp/")

    return response.data
}


export const setMobilePin = async () => {
    const response = await paperlessApi.patch("/accounts/v1/set-mobile-pin/")

    return response.data
}


export const signupApi = async () => {
    const response = await paperlessApi.post("/accounts/v1/signup/")

    return response.data
}


export default paperlessApi