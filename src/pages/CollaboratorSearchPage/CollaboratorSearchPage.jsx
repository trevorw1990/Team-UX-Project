import './CollaboratorSearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CollaboratorItem from '../../components/CollaboratorItem/CollaboratorItem';
import { useState, useEffect } from 'react';
import { getUsers } from '../../utilities/api/users/users-api';

export default function CollaboratorSearchPage({user, setUser}){
    const [collaborators, setCollaborators] = useState([]);
    const [displayedCollaborators, setDisplayedCollaborators] = useState([]);
    const [filter, setFilter] = useState({
        usState: '',
        zipCode: '',
        roles: [],
        keyword: ''
    });
    
    const haveCommonRoles = (arr1, arr2) => {
        return arr1.some(item => arr2.includes(item));
    }

    const getCollaborators = async () => {
        try {
            const foundUsers = await getUsers();
            setCollaborators(foundUsers.map((currUser, idx) => {
                if((!filter.zipCode || currUser.zipCode === filter.zipCode) && (!filter.usState || currUser.usState === filter.usState) && (!filter.keyword || currUser.keywordTags.includes(filter.keyword)) && (!filter.roles.length || haveCommonRoles(filter.roles, currUser.roles))){
                    return (
                        <CollaboratorItem 
                            key={idx} 
                            user={user} 
                            roles={currUser.roles} 
                            location={currUser.usState} 
                            name={`${currUser.firstName} ${currUser.lastName}`}
                            instagram={currUser.instagramUrl}
                            pinterest={currUser.pinterestUrl}
                            tumblr={currUser.tumblrUrl}
                        />
                    )
                }
            }));
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        getCollaborators();
    },[filter])

    const loaded = () => {
        return (
        <main>
            <SearchBar type="collaborator" user={user} filter={filter} setFilter={setFilter}/>
            {collaborators}
        </main>
        )
    }

    const loading = () => {
        return
    }

    return collaborators.length ? loaded() : loading();
}