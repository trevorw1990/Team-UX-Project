import { Link, useNavigate } from 'react-router-dom'
import './ProfilePageUserArea.css'

export default function ProfilePageUserArea({ user }) {

    return (
        <div className='ProfilePageUserArea'>
            
            <div className='profile-img-and-links'>
                <img src={user.profileImageUrl} alt='profileImg'/>
                <div className='social-links'>
                    <a href={user.instagramUrl} target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href={user.pinterestUrl} target="_blank"><ion-icon name="logo-pinterest"></ion-icon></a>
                    <a href={user.tumblrUrl} target="_blank"><ion-icon name="logo-tumblr"></ion-icon></a>
                </div>
                <a href={user.websiteUrl} target="_blank">{user.websiteUrl}</a>
            </div>

            <div className='profile-about-and-roles-area'>
                <div>{user.aboutMe}</div>
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

            <div className='profile-edit-link'><Link to='/'>Edit My Profile</Link></div>
        </div>
    )
}