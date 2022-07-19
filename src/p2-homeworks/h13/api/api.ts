import axios from "axios";


type ResponseAPIType = {
    errorText: string,
    info: string,
    yourBody: {
        success: boolean
    },
    yourQuery: {}
}

export const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com',
})

export const RequestAPI = {
    testMethod: (success: boolean) => instance
        .post<ResponseAPIType>('/auth/test', {success})
}