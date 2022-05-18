import { useState } from "react";

export default function SearchBar(){
    const [search,setSearch]=useState({
        roles:[],
        keywordTags:[],
        zipcode:''

             }
    )

    return (
        <form>
            <input 
                  type="text" 
                   placeholder="Search by Roles..." />
                <label>
                 
                </label>
              </form>
              );
     }
    
