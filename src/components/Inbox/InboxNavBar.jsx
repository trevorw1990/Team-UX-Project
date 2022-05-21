import { useState, useEffect } from 'react'

export default function InboxNavBar({ user, setUser, pageToShow,  setPageToShow}) {

    return (
        <div>
            <div className='inbox-navbar-categories'>
                <button onClick={(e) => {setPageToShow('InboxUnread')}}>Unread</button>
                <button onClick={(e) => {setPageToShow('InboxAllMail')}}>All Mail</button>
                <button onClick={(e) => {setPageToShow('InboxSent')}}>Sent</button>
                <button onClick={(e) => {setPageToShow('InboxDrafts')}}>Drafts</button>
                <button onClick={(e) => {setPageToShow('InboxTrash')}}>Trash</button>
            </div>
        </div>
    )
}