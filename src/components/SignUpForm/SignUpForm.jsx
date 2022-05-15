import { signUp } from '../../utilities/api/users/users-service'
import { useState, useEffect } from 'react'
import { statesList, artistRoles } from '../../utilities/list-items/list-items'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm({ user, setUser }) {
   
    const [ disableSignUpBtn, setDisableSignUpBtn ] = useState (true)
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
        country: 'United States',
        usState: '',
        zipCode: '',
        roles: []
    })

    let navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        // if(event.target.type === 'password') {
        //     setDisableSignUpBtn(formData.password !== formData.confirm )   
        // }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            delete formData.error
            delete formData.confirm
            const user = await signUp(formData)
            setUser(user)
            // alert(JSON.stringify(formData)) // print sign up state var to the screen
            navigate('/')
        } catch (error) {
            console.log(error)
        }
        
    }

    const addRole = (e, aRole) => {
        console.log(e.target.checked)
        const arr = formData.roles
        console.log(arr.indexOf(aRole))
        if (e.target.checked) {
            arr.push(aRole)
            setFormData({...formData, roles: arr})
        } else {
            const indexToDelete = arr.indexOf(aRole)
            arr.splice(indexToDelete, 1)
            setFormData({...formData, roles: arr})
        }
    }

    useEffect (() => {
        setDisableSignUpBtn(formData.password !== formData.confirm)
    },[formData])

    return (
        <div className='user-form'>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Confirm Password</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    <br/>

                    <label>Location</label>
                    <select name="country" value={formData.country} onChange={handleChange} required >
                        <option value="United States" >United States</option>   
                    </select>
                    <select name="usState" value={formData.usState} onChange={handleChange} required >
                        {statesList.map((usState, index) => (
                            <option value={usState.value} key={index} >{usState.label}</option>
                        ))}   
                    </select>
                    <label>Or enter a zip code</label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
                    <br/>

                    {
                        artistRoles.map((theRole, index) => {
                            return(
                                <label>
                                    <input type="checkbox" name="roles" value={theRole.role} key={index} onChange={(e) => addRole(e, theRole.role)}/>
                                {theRole.role}</label>
                            )
                        })
                    }
                    <br/>

                    <button type="submit" disabled={disableSignUpBtn}>SIGN UP</button>           
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    )
}
