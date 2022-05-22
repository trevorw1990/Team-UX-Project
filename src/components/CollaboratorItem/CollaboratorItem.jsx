import './CollaboratorItem.css';
import { Link } from 'react-router-dom';

export default function CollaboratorItem({key,user,id,website,roles,location,image,name,instagram, pinterest,tumblr, description}){
    return (
        <div>
            <div>
                <h5>{name}</h5>
                <div>
                    <img src={image} alt="Profile image" />
                    <ul>
                        {
                            roles.map((role,idx) => {
                                return (
                                    <li key={idx}>
                                        {role}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <Link to={`/profile/${id}`}><button>View Profile</button></Link>
                    <a href={website}>View Website</a>
                </div>
            </div>
            <div>
                <p>Location: {location}</p>
                <p>{description}</p>
                <div>
                    {instagram && <a href={instagram}>insta</a>}
                    {pinterest && <a href={pinterest}>pinterest</a>}
                    {tumblr && <a href={tumblr}>tumblr</a>}
                </div>
            </div>
        </div>
    )
}