import { sendRequest } from "../send-request"
const BASE_URL = '/api/messages'

export async function createMessage(senderId, receiverId, theMessage, threadId){
    const payload = {
        sender: senderId,
        receiver: receiverId,
        message: theMessage,
        thread: threadId
    }
    return sendRequest(`${BASE_URL}/${threadId}`, 'POST', payload)
}

export async function deleteMessage(messageId){
    return sendRequest(`${BASE_URL}/${messageId}`, 'DELETE', messageId)
}