import { useState, useEffect } from "react";
import axios from axios
export default function SearchBar(){
    const [search,setSearch]=useState({
        roles:[],
        keywordTags:[],
        zipcode:''

             }
    )


    useEffect(() => {
        ( async () => {
          try {
            const response = await axios.get(`http://localhost:3001/`)
            setSearch(response.data)
          } catch (err) {
            console.log(err)
          }
        })()
      }, [])
  
   


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
    
