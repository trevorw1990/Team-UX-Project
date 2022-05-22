import { Link, useNavigate } from 'react-router-dom'
import './ProfilePageProjects.css'

export default function ProfilePageProjects({ user }) {

    return (
        <div className='ProfilePageProjects'>

            <div className='myProjects '>
                <h2>My Projects</h2>
                <button>Create Project</button>
            </div>

            <div className='divider'>
                <hr/>
            </div>
       
        </div>
    )
}