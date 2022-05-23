import { Link, useNavigate } from 'react-router-dom'
import './ProfilePageUserArea.css'

export default function ProfilePageUserArea({ user }) {

    return (
        <div className='ProfilePageUserArea'>

                <div>
                    <h1> {user.firstName} {user.lastName}</h1> 
                </div>
            
                <div className='profile-img-and-links container'>
                    <div>
                        <img src={user.profileImageUrl} alt='profileImg'/>

                        <div className="social-links">
                            <a href={user.instagramUrl} target="_blank"><img src= "/images/ProfilePg/social-instagram.png"/> </a>
                            <a href={user.pinterestUrl} target="_blank"><img src= "/images/ProfilePg/social-pinterest.png"/> </a>
                            <a href={user.tumblrUrl} target="_blank"><img src= "/images/ProfilePg/social-tumblr.png"/> </a>
                        </div>

                        <div className='userURL'>
                            <a href={user.websiteUrl} target="_blank">{user.websiteUrl}</a>
                        </div>
                
                    </div>

                    <div className='profile-about-and-roles-area'>
                    
                    <div className='userAbout-text'>{user.aboutMe}</div>
                    
                    <div className='userAbout-roles'>
                        <ul>
                            {
                                user.roles.map((role, idx) => {
                                    return (
                                        <li>{role}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='"userAbout-edit'>  
                        <Link to='/'>Edit My Profile</Link>
                    </div>

                </div>


            </div>

            


            <div className='divider'>
                <hr/>
            </div>

        </div>


    )
}