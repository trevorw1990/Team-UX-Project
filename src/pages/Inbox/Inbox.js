import { useState, useEffect } from 'react'
import './Inbox.css'
import InboxNavBar from '../../components/Inbox/InboxNavBar'
import InboxMessages from '../../components/Inbox/InboxMessages'
import { createThread, getThread, deleteThread} from '../../utilities/api/message-threads/message-threads-api'
import { createMessage, deleteMessage} from '../../utilities/api/messages/messages-api'
import { useParams, useLocation } from 'react-router-dom'

export default function Inbox({ user, setUser}){

    const [ pageToShow, setPageToShow ] = useState ('InboxAllMail')
    const [ newThread, setNewThread ] = useState(null)
    const [ receiverId, setReceiverId ] = useState(null)
    const [ theMessage, setTheMessage ] = useState("")
    const params = useLocation()

    const getParams = () => {
        // console.log(params)
        if (params.state) {
            setPageToShow('InboxComposeMessage')
        }
    }

    // const getTheThread = async () => {
    //     const response = await getThread()
    //     setNewThread(response[1])
    //     sendMessage(response[1])
    // }

    // const sendMessage = async (aThread) => {
    //     const response = await createMessage(
    //         user._id,
    //         aThread.Users[1],
    //         theMessage,
    //         aThread._id)
    //     console.log(`Message reply: ${response}`)
    // }

    const createNewThread = async () => {
        const users = [user._id, receiverId]
        const usersObj = { users }
        const response = await createThread(usersObj)
        setNewThread(response)
        sendMessage(response)
    }

    const sendMessage = async (aThread) => {
        const response = await createMessage(
            user._id,
            receiverId,
            theMessage,
            aThread.createdThread._id)
        // console.log(`Message reply: ${response}`)
    }

    useEffect(() => {
        getParams()
    }, [])

    return(
        <div className='inbox-page'>
            <div>
                <InboxNavBar user={user}  setUser={setUser} pageToShow={pageToShow} setPageToShow={setPageToShow} />
            </div>

            <div>
                <InboxMessages user={user} setUser={setUser} pageToShow={pageToShow} setPageToShow={setPageToShow} params={params} setReceiverId={setReceiverId} setTheMessage={setTheMessage} createNewThread={createNewThread} receiverId={receiverId}/>
            </div>        
        
        </div>
    )
}