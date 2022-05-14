const BASE_URL = '/api/users'
import { sendRequest } from "../send-request"

export async function signUp(userData){
    return sendRequest(`${BASE_URL}`, 'POST', userData)
}

export async function checkToken(){
    return sendRequest(`${BASE_URL}/check-token`)
}

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`,'POST', credentials)  
}