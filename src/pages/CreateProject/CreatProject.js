import CreateProjectForm from '../../components/CreateProjectForm/CreateProjectForm.jsx'
import './CreatProject.css'

export default function CreateProject({ user }){

    return(
        <main className='CreateProjectForm'>
            <CreateProjectForm user={user} />
        </main>
    )
}