import InboxAllMail from './InboxAllMail'
import InboxDrafts from './InboxDrafts'
import InboxSent from './InboxSent'
import InboxTrash from './InboxTrash'
import InboxUnread from './InboxUnread'
import InboxComposeMessage from './InboxComposeMessage'
import { useState, useEffect } from 'react'


export default function InboxMessages({ user, setUser, pageToShow,  setPageToShow, params, receiverId, setReceiverId, setTheMessage, createNewThread }) {

    const pageNavigator = () => {
        if (pageToShow === 'InboxMessages') {
            return <InboxMessages user={ user } setUser={ setUser }/>
        } else if (pageToShow === 'InboxDrafts') {
            return <InboxDrafts user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxAllMail') {
            return <InboxAllMail user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxSent') {
            return <InboxSent user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxTrash') {
            return <InboxTrash user={ user } setUser={ setUser } />
        } else if (pageToShow === 'InboxUnread') {
            return <InboxUnread  user={ user } setUser={ setUser }/>
        } else if (pageToShow === 'InboxComposeMessage') {
            return <InboxComposeMessage  user={ user } setUser={ setUser } params={params} receiverId={receiverId} setReceiverId={setReceiverId} setTheMessage={setTheMessage} createNewThread={createNewThread} />
        }
    }
    useEffect(() => {

    }, [pageToShow])

    return (
        <div className='messages-to-show'>
            {pageNavigator()}
        </div>
    )
}