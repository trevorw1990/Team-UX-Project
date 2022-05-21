import ProfileCarousel from "../../components/ProfileCarousel/ProfileCarousel"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import ProfilePageUserArea  from '../../components/ProfilePageUserArea/ProfilePageUserArea'
import ProfilePageProjects from '../../components/ProfilePageProjects/ProfilePageProjects'

export default function ProfilePage({ user, setUser }){
    const params = useParams() 


    const loaded = () => {
        return(
            <main>
                <ProfilePageUserArea user={user} setUser={setUser}/>
                <hr/>
                <ProfilePageProjects user={user} setUser={setUser}/>
                <hr/>
                <ProfileCarousel user={user} setUser={setUser}/>
            </main>
        )
    }

    const loading = () => {
        return (
            <main className='loading-screen'>
                <h2>loading</h2>
            </main>
            )
    }


    return user && user._id ? loaded() : loading()
}