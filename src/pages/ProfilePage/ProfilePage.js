import ProfileCarousel from "../../components/ProfileCarousel/ProfileCarousel"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import ProfilePageUserArea  from '../../components/ProfilePageUserArea/ProfilePageUserArea'
import ProfilePageProjects from '../../components/ProfilePageProjects/ProfilePageProjects'

export default function ProfilePage({ user, setUser }){
    const params = useParams() 


    const loaded = () => {
        return(
            <main className="profile-pg-container">
                <ProfilePageUserArea user={user} setUser={setUser}/>
                
                <ProfilePageProjects user={user} setUser={setUser}/>
                
                <div className="gallery-header">
                    <h2>My Gallery</h2>
                    <button>Edit Gallery</button>
                </div>

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