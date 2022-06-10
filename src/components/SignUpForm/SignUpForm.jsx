import { signUp } from '../../utilities/api/users/users-service'
import { useState, useEffect } from 'react'
import { statesList, artistRoles } from '../../utilities/list-items/list-items'
import { useNavigate } from 'react-router-dom'
import ImageUploads from '../ImageUploads/ImageUploads'
import '../../pages/App/App.css'
import './SignUpForm.css'

export default function SignUpForm({ user, setUser }) {
    const [ image, setImage ] = useState('')
    const [ disableSignUpBtn, setDisableSignUpBtn ] = useState (true)
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
        country: 'United States',
        usState: 'Alabama',
        zipCode: '',
        roles: [],
        keywordTags:[],
        aboutMe: '',
        websiteUrl: '',
        instagramUrl: '',
        pinterestUrl: '',
        tumblrUrl: '',
        profileImageUrl: ''
    })
    const [ page, setPage ] = useState(1)

    let navigate = useNavigate()

    const handleChange = (event) => {
        if (event.target.name==='keywordTags') {
            const val = event.target.value.replace(/^\s+|\s+$/gm,'') // remove spaces from input using regex
            const arr = [val.split(',')]
            setFormData({...formData, keywordTags: arr[0]})
        } else {
            setFormData({...formData, [event.target.name]: event.target.value})
        }
    }

    const changePage = (action) => {
        if (action === 'next') {
            if (page < 3) {
                setPage(page + 1)
            }
        } else {
            if (page > 1) {
                setPage(page - 1)
            }
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            delete formData.error
            delete formData.confirm
            if(!formData.profileImageUrl){
                delete formData.profileImageUrl
            }
            const response = await signUp(formData)
            setUser(response)
            // console.log(response) // log new user to screen
            // alert(JSON.stringify(formData)) // print sign up state var to the screen
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const addRole = (e, aRole) => {
        console.log(e.target.checked) // print is checked
        const arr = formData.roles
        console.log(arr.indexOf(aRole)) // test if idx is correct
        if (e.target.checked) {
            arr.push(aRole)
            setFormData({...formData, roles: arr})
        } else {
            const indexToDelete = arr.indexOf(aRole)
            arr.splice(indexToDelete, 1)
            setFormData({...formData, roles: arr})
        }
    }

    const doNothing = () => {
        return;
    }

    useEffect (() => {
        setDisableSignUpBtn((formData.password !== formData.confirm) && formData.password.length >=6)
    },[formData])

    useEffect(() => {
        if (image) {
            console.log(`loading ${image}`)
            setFormData({...formData, profileImageUrl: image})
        }
    }, [image])

    useEffect(() => {
        if (user) {
            navigate(`/profile/${user._id}`)
        }
    }, [user])


    return (
        <div className='user-form'>
            <div className="form-container">
                <form onSubmit={handleSubmit}>

                    {
                    page === 1 ?
                    <div className='signup-form-page'>
                        <h2>Create Account</h2>

                        <label>First Name*
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required /></label><br/>
                      

                        <label>Last Name*
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required /></label>
                        
                        <label>Email*
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
                        <label>Password (Minimum 6 Characters)*
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required /></label>
                        <label>Confirm Password*
                        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required /></label>
                        <br/>

                        <label>Location*

                        <select name="country" value={formData.country} onChange={handleChange} required >
                            <option value="United States" >United States</option>   
                        </select>

                        <select name="usState" value={formData.usState} onChange={handleChange} required >
                    

                            {statesList.map((usState, index) => (
                                <option value={usState.value} key={index} >{usState.label}</option>
                            ))}   
                        </select></label>
                        <label>Or enter a zip code
                        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required /></label>
                        <br/>
                    </div>
                    :
                    ''}

                    {
                    page === 2 ?
                    <div className='signup-form-page'>
                        <h2>Tell us about what you do</h2>
                        <p>Which of these best describes you (select all that apply)*</p>

                        <div className='form-columns'>
                            {
                                artistRoles.map((theRole, index) => {
                                    return(
                                        <div className={`form-column-${index % 3 + 1}`} key={index}>
                                            <label>
                                                <input type="checkbox" name="roles" value={theRole.role} onChange={(e) => addRole(e, theRole.role)}/>
                                            {theRole.role}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <br/>

                        <div>
                            <label id="keywordLabel">Add Keyword Tags (optional)
                                <input type='text' name='keywordTags' value={formData.keywordTags} onChange={handleChange} />
                                Skills - Specialties - Software - Styles</label>
                        </div>
                        <br/>
                    </div>
                    :
                    ''}
                    
                    {
                    page === 3 ?
                    <div className='pg-three'>
                        <div id="almostDone">
                            <h2>Almost done!</h2>
                        </div>

                        <div id="completeProfile">
                            <h2>Complete your profile.</h2>
                        </div>
                    
                        <div className='profile-image-upload'>
                            <p><strong>Add a Profile Image</strong></p>
                            {/* <button onClick={(e) => {profileImageUpload()}}><ion-icon name="person-circle-outline"></ion-icon></button> */}
                            {
                                image ? <img src={image} /> : doNothing
                            }
                            <ImageUploads image={image} setImage={setImage} placeholder='/images/ProfilePg/uploadpic.png' /> 
                            <br/>
                            
                        </div>

                        <label>About me:
                        <textarea id="aboutMe"name="aboutMe" value={formData.aboutMe} onChange={handleChange} required /></label>
                        <br/>

                        <div className='website-links'>
                            <label id="website">Add your website URL (optional)
                            <input type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} /></label>
                            <label id="website">Instagram (optional)
                            <input type="url" name="instagramUrl" value={formData.instagramUrl} onChange={handleChange} /></label>
                            <label id="website">Pinterest (optional)
                            <input type="url" name="pinterestUrl" value={formData.pinterestUrl} onChange={handleChange} /></label>
                            <label id="website">Tumblr (optional)
                            <input type="url" name="tumblrUrl" value={formData.tumblrUrl} onChange={handleChange} /></label>
                        </div>
                        <button type="submit" disabled={disableSignUpBtn}>Save</button>
                    </div>
                    :
                    ''}
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>

            <div className='signup-form-buttons'>
              {page === 1 ? '' : <button id="backButton" onClick={(e) => {changePage('back')}}>&lt; Back</button>}
              {page === 3 ? '' : <button id="nextButton" onClick={(e) => {changePage('next')}}>Next</button>}
            </div>
        </div>
    )
}
