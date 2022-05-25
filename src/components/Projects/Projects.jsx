import ProjectCollaborators from "../ProjectCollaborators/ProjectCollaborators";
import ProjectLookingFor from "../ProjectLookingFor/ProjectLookingFor";
import { useState,useEffect } from "react"
import { getProject } from "../../utilities/api/projects/projects-api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ProfileCarousel from "../../components/ProfileCarousel/ProfileCarousel"


export default function Projects({user,setUser}){
    const [project, setProject ] = useState({})
    const params = useParams()
    const projectId = params.id


    const getOneProject  = async() => {
        try{ 
            const response= await getProject(projectId);
            setProject(response.projects)
           
            
            console.log(project)
        }

        catch (error){
            console.log(error)
        }
    }



useEffect(() => {
getOneProject()
}, [])




    const loaded = () =>{ 
        return (
            <main>
                <div className="projectPage-container">
                    <div>
                        <img src={project.imageUrl} alt="Project Image" height="255px" width="255px"/> 
                        <h1>{project.projectName}</h1>
                    </div> 

                    <div>
                        <div className="projectPage-column-1">
                            <img />
                            <button>Group Message</button>
                        </div>

                        <div className="projectPage-column-2">
                            <p>Location: </p>
                            <ul>
                                <li>{project.dateStartEnd} </li>
                            </ul>
                            <p>{project.projectDescription}</p>
                        </div>

                        <div className="projectPage-column-3">
                            <h3>Organizer: <br/>
                            <img src={user.profileImageUrl} alt='profileImg' height="80px" width="80px"/></h3>
                        </div>
                     </div>
                </div>

                <div className="projectPage-container-2">
                    <div>
                        <ProjectLookingFor  project={project} user={user} />
                    </div>
        
                    <div>
                        <ProjectCollaborators project={project} user={user}/>
                    </div>

                    <div>
                        <ProfileCarousel setUser={setUser} user={user} />
                    </div>

                </div>
            </main>
        )
    }

    const loading = () => {
        return
    }
    return project && project._id ? loaded() : loading()


}