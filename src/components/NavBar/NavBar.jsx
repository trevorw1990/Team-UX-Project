import { login, logout } from '../../utilities/api/users/users-service'
import Modal from 'react-modal'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
}

export default function NavBar({ user, setUser }){
    let subtitle;
    const [ modalIsOpen, setIsOpen ] = useState(false);
    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })
    const [ render, setRender ] = useState(false)
    let navigate = useNavigate()

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false)
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await login(formData)
            setUser(user)
            navigate('/')
            closeModal()
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async (event) => {
        await logout()
        setUser(null)
    }

    const loginNav = () => {
        return (
            <div className='navBar'>

                <button className='navbar-logo'>
                    <img src='/images/Logo/Project-Connect.png' alt='ProjectConnect'/> 
                </button>

                <div className='user-navbar-buttons'>
                    <button onClick={openModal}>Log In</button>
                    <button>
                        <Link to='/signup'>Sign Up</Link>
                    </button>
                </div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel='Log In Modal'
                    >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Log into your Project Connect account</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email Adress
                            <input type='email' name='email' onChange={handleChange}/>
                        </label>
                        <label>Password
                            <input type='password' name='password' onChange={handleChange}/>
                        </label>
                        <button type='submit'>Log In</button>
                        <div>Don't have an account?<Link to='/signup'>Sign Up</Link></div>
                    </form>
                </Modal>
                
            </div>
        )
    }

    const userNav = () => {
        return (
            <div className='navBar'>
                <button className='navbar-logo'>
                        <img src='/images/Logo/Project-Connect.png' alt='ProjectConnect'/> 
                </button>

                <div className='user-navbar-links'>
                    <Link to ='/find-projects'>Find Projects</Link>
                    <Link to ='/collaborators'>Find Collaborators</Link>
                    <Link to ='/new-project'>Create Projects</Link>
                    <Link to ='/' onClick={(e) => {logOut()}}>Log Out</Link>
                    <Link to ='/inbox'><ion-icon name='mail-outline'></ion-icon></Link>
                </div>
            </div>
        )
    }

    return user ? userNav() : loginNav()
}