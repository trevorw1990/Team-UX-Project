import './CollaboratorSearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { getUsers } from '../../utilities/api/users/users-api';

export default function CollaboratorSearch({user}){
    const [collaborators, setCollaborators] = useState([]);
    const [filter, setFilter] = useState({
        state: '',
        zipCode: '',
        roles: [],
        keyword: ''
    });

    const getCollaborators = async () => {
        try {
            const foundUsers = await getUsers();
            setCollaborators(foundUsers.map((currUser, idx) => {
                return (
                    <div key={idx}>
                        {currUser.firstName}
                    </div>
                )
            }));
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        getCollaborators();
    },[])
    return (
        <main>
            <SearchBar type="collaborator" user={user} filter={filter} setFilter={setFilter}/>
            {collaborators}
        </main>
    )
}