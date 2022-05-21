import { useState, useEffect } from "react";
import { getAllProjects } from "../../utilities/api/projects/projects-api";

export default function SearchBar({user, setUser}){
    const [search,setSearch]=useState([])


 function doNothing(){
  return(
    <h1>I'm Sorry, theres nothing here </h1>
  )
}



    const getProjects= async() =>{
      try{ 
        const response = await getAllProjects()


        response.map(project => {
         
            setSearch({...search,["keywordTags"]:project.keywordTags,
                  ["zipCode"]:project.zipCode, 
                  ["projectName"]:project.projectName,
                  ["projectDescription"]:project.projectDescription
                })
          
        })
  
      }
      catch ( error ){
      doNothing()
      }

    }

    useEffect( () => {
getProjects()

},[])
  
   


    return (
     <form> 
      <input 
            type="text"
            value={search}
             placeholder="Search ..." 
             onChange={(e)=> setSearch(...search, e.target.value)}
             >
            {/* //  onChange={(event) => setSearch(event.target.value)}>  */}
  
             
             </input>
           {/* <label ><ion-icon name="search-circle-outline"></ion-icon></label> */}
            
           </form>
     
  

              );
     }
    







// import { useState, useEffect } from "react";
// import { getAllProjects } from "../../utilities/api/projects/projects-api";

// export default function SearchBar({user, setUser}){
//     const [search,setSearch]=useState({
//         keywordTags:[],
//         projectName:"",
//         zipCode:'',
//         projectDescription:""


//              }
//     )


//  function doNothing(){
//   return(
//     <h1>I'm Sorry, theres nothing here </h1>
//   )
// }



//     const getProjects= async() =>{
//       try{ 
//         const response = await getAllProjects()


//         response.map(project => {
         
//             setSearch({...search,["keywordTags"]:project.keywordTags,
//                   ["zipCode"]:project.zipCode,
//                   ["projectName"]:project.projectName,
//                   ["projectDescription"]:project.projectDescription
//                 })
          
//         })
  
//       }
//       catch ( error ){
//       doNothing()
//       }

//     }

//     useEffect( () => {
// getProjects()

// },[])
  
   


//     return (
//      <form> 
//       <input 
//             type="text"
//             value={search}
//              placeholder="Search ..." 
//              onChange={(e)=> setSearch(...search, e.target.value)}
//              >
//             {/* //  onChange={(event) => setSearch(event.target.value)}>  */}
  
             
//              </input>
//            {/* <label ><ion-icon name="search-circle-outline"></ion-icon></label> */}
            
//            </form>
     
  

//               );
//      }
    







// import { useState, useEffect } from "react";
// import { getAllProjects } from "../../utilities/api/projects/projects-api";

// export default function SearchBar({ user, setUser }){
//   const [ searchResults, setSearchResults ] = useState([])


//  function doNothing(){
//   return(
//     <h1>I'm Sorry, theres nothing here </h1>
//   )
// }
//   const getProjects= async() =>{
          
    
    
//           try{ 
//             const response = await getAllProjects()
    
    
//             response.map(project => {
             
//                 setSearch()
              
//             })
      
//           }
//           catch ( error ){
//           doNothing()
//           }
    
//         }


        
    
//         useEffect( () => {
//     getProjects()
    
//     },[])


  





// }




















