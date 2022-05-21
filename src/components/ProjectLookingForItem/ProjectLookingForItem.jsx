import './ProjectLookingForItem.css';

export default function ProjectLookingForItem({item, user, project}){
    const isCollaborator = () => {
        for(let i = 0; i < project.collaborators.length; i++){
            if(user._id === project.collaborators[i].userId){
                return true
            }
        }
        return false
    }

    const determineDisplay = () => {
        return user._id === project.organizer || isCollaborator()
    }

    const invite = () => {
        return
    }

    const interested = () => {
        return
    }
    return (
        <div>
            <h4>{item}</h4>
            <button onClick={determineDisplay() ? invite : interested}>{determineDisplay() ? 'Invite' : "I'm interested"}</button>
        </div>
    )
}