import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { updateUser } from '../../utilities/api/users/users-api';
import './ProfilePageUserArea.css'

export default function ProfilePageUserArea({ user, profileUser, edit }) {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        _id: profileUser._id,
        websiteUrl: profileUser.websiteUrl,
        aboutMe: profileUser.aboutMe,
    })

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const submitChanges = async () => {
        try {
            const updatedUser = await updateUser(formData);
            navigate(`/profile/${profileUser._id}`);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='ProfilePageUserArea'>

                <div>
                    <h1> {profileUser.firstName} {profileUser.lastName}</h1> 
                </div>
            
                <div className='profile-img-and-links container'>
                    <div>
                        <img src={profileUser.profileImageUrl} alt='profileImg'/>

                        <div className="social-links">
                            {edit && <Link to='.'>Edit Social Links</Link>}
                            <a href={profileUser.instagramUrl} target="_blank"><img src= "/images/ProfilePg/instagram-logo.png"/> </a>
                            <a href={profileUser.pinterestUrl} target="_blank"><img src= "/images/ProfilePg/pinterest-logo.png"/> </a>
                            <a href={profileUser.tumblrUrl} target="_blank"><img src= "/images/ProfilePg/tumblr-logo.png"/> </a>
                        </div>

                        {!edit ? 
                            <div className='userURL'>
                                <a href={profileUser.websiteUrl} target="_blank">{profileUser.websiteUrl}</a>
                            </div> :
                            <label>Change Website URL<br/>
                                <input type='text' name='websiteUrl' value={formData.websiteUrl} onChange={handleChange}/>
                            </label>
                        }
                
                    </div>

                    <div className='profile-about-and-roles-area'>
                    
                    {!edit ? 
                        <div className='userAbout-text'>{profileUser.aboutMe}</div> :
                        <label>Edit Bio<br/>
                            <input type='text' name='aboutMe' value={formData.aboutMe} onChange={handleChange}/>
                        </label>
                    }

                    
                    
                    <div className='userAbout-roles'>
                        <ul>
                            {
                                profileUser.roles.map((role, idx) => {
                                    return (
                                        <li key={idx}>{role}</li>
                                    )
                                })
                            }
                        </ul>
                        {edit && <Link to='.'>Edit Roles</Link>}
                    </div>

                    {(user._id === profileUser._id && !edit) && <div className='"userAbout-edit'>  
                        <Link to={`/profile/edit/${profileUser._id}`}>Edit My Profile</Link>
                    </div>}

                </div>

                <button onClick={submitChanges}>Save Changes</button>


            </div>

            


            <div className='divider'>
                <hr/>
            </div>

        </div>


    )
}