import { sendRequest } from "../send-request"
const BASE_URL = '/api/messages'

export async function createMessage(threadId){
    return sendRequest(`${BASE_URL}`, 'POST', threadId)
}

export async function deleteMessage(messageId){
    return sendRequest(`${BASE_URL}/${messageId}`, 'DELETE', messageId)
}