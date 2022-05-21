import ProjectLookingForItem from '../ProjectLookingForItem/ProjectLookingForItem';
import './ProjectLookingFor.css';
import { useEffect } from 'react';

export default function ProjectLookingFor({project, user}){
    const [roleDisplay, setRoleDisplay] = useState([]);

    const getRoleDisplay = () => {
        setRoleDisplay(project.lookingForItems.map((item, idx) => {
            return (
                <ProjectLookingForItem key={idx} item={item}/>
            )
        }))
    }

    useEffect(() => {
        getRoleDisplay();
    },[])
    return <h1>ProjectLookingFor</h1>
}