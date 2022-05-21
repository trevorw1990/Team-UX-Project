import { useState, useEffect } from 'react'
import './Inbox.css'
import InboxNavBar from '../../components/Inbox/InboxNavBar'
import InboxMessages from '../../components/Inbox/InboxMessages'
import { createThread, getThread, deleteThread} from '../../utilities/api/message-threads/message-threads-api'
import { createMessage, deleteMessage} from '../../utilities/api/messages/messages-api'


export default function Inbox({ user, setUser }){
    const [ pageToShow, setPageToShow ] = useState ('InboxAllMail')
    const [ currentThread, setCurrentThread ] = useState (null)
    const [ newThread, setNewThread ] = useState(null)
    const [ receiverId, setReceiverId ] = useState(null)

    const getTheThread = async () => {
        const response = await getThread()
        setNewThread(response.thread)
    }

    const createNewThread = async () => {
        const users = [user._id, receiverId]
        const response = await createThread(users)
        setCurrentThread(response)
    }

    useEffect(() => {

    }, [])

    return(
        <div className='inbox-page'>
            <InboxNavBar user={user}  setUser={setUser} pageToShow={pageToShow} setPageToShow={setPageToShow} />
            <InboxMessages user={user} setUser={setUser} pageToShow={pageToShow} setPageToShow={setPageToShow} />
        </div>
    )
}