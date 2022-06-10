import { Link, useNavigate } from 'react-router-dom'
import './ProfilePageProjects.css'
import { getUserProjects } from '../../utilities/api/projects/projects-api'
import {useState, useEffect} from 'react';

export default function ProfilePageProjects({ user, profileUser }) {
    const [projects,setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const foundProjects = await getUserProjects(profileUser._id);
            setProjects(foundProjects);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getProjects();
    },[profileUser])

    const loaded = () => {
        return (
            <div className='ProfilePageProjects'>
    
                <div className='myProjects '>
                    <h2>{user._id === profileUser._id ? "My " : `${profileUser.firstName}'s `} Projects</h2>
                    {
                        projects.map((project,idx) => {
                            return (
                                <div key={idx}>
                                    <h1>{project.projectName}</h1>
                                    {project.imageUrl && <img src={project.imageUrl} alt="Project Image"/>}
                                    <p>{profileUser._id === project.organizer ? "Organizer" : "Collaborator"}</p>
                                    <p>Project Open</p>
                                    <Link to={`/projects/${project._id}`}><button>View Project</button></Link>
                                </div>
                            )
                        })
                    }
                    {profileUser._id === user._id && <Link to='/create-project'><button>Create Project</button></Link>}
                </div>
    
                <div className='divider'>
                    <hr/>
                </div>
           
            </div>
        )
    }

    const loading = () => {
        return (
            <div className='ProfilePageProjects'>
                <div className='myProjects '>
                    <h2>{user._id === profileUser._id ? "My " : `${profileUser.firstName}'s `} Projects</h2>
                    {profileUser._id === user._id && <Link to='/create-project'><button>Create Project</button></Link>}
                </div>
                <div className='divider'>
                    <hr/>
                </div>
            </div>
        )
    }

    return projects.length ? loaded() : loading()
}