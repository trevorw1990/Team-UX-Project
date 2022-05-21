import { useState, useEffect } from 'react'
import { getUsers } from '../../utilities/api/users/users-api'

export default function InboxComposeMessage({ user, setUser, pageToShow,  setPageToShow, params, receiverId, setReceiverId, setTheMessage, createNewThread}) {
    const [ userList, setUserList ] = useState([])

    const getTheUsers = async () => {
        const response = await getUsers()
        setUserList(response)
        console.log(response)
    }

    const handleChange = (event) => {
        setReceiverId(event.target.value)
    }

    const handleSubmit = (event) => {
        createNewThread()
    }

    const roleToInvite = () => {
        const inviteText = `Hey${receiverId ? receiverId : ''}! do you want to collaborate on my project- ${params.state.projectName}, as a ${params.state.theRole}?`

        return inviteText
    }

    const doNothing = () => {
        return
    }
    
    useEffect(() => {
        getTheUsers()
    },[])

    useEffect (() => {

    }, [receiverId])

    const loaded = () => {
        return (
            <div>
                <h2>To:</h2>
                <select className='select-receiver-dropdown' name='receiver' value='' onChange={handleChange}>
                {
                    userList.map((aUser, idx) => {
                        return (
                            aUser.firstName === user.firstName ?
                            doNothing()
                            :
                            <option value={`${aUser._id}`} key={idx}>
                                {aUser.firstName} {aUser.lastName}
                            </option>
                        )
                    })
                }       
                </select>
                <h2>Message:</h2>
                <textarea onChange={(e) => {setTheMessage(e.target.value)}}>{roleToInvite()}</textarea>
                <button onClick={handleSubmit}>Send</button>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return userList && userList[0] ? loaded() : loading () 
}