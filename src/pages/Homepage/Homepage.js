
import { Link } from "react-router-dom";

export default function HomePage(){
   


    return(
        <main>
            
        <div className="container">
            <div className="homepage-images">
                <img src="/images/Homepage/hmpg_img.png" />
            </div>

            <div className="centered">
                <h1>Find Collaborators for Your Next Project</h1>
                <Link to='/signup'><button>Sign Up for Free</button></Link>
            </div>
        </div>


            
        </main>
    )
}
