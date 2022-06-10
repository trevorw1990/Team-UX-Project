
import { Link } from "react-router-dom";
import "../App/App.css"
export default function HomePage(){
   


    return(
        <main>
            
            <div>
                <hr/>
            </div>

            <div className="container">
                <div id="logo-image">
                    <img src="/images/homepage/hmpg_img2.png" />
                </div>

                <div className="centered">
                    <h1>Find Collaborators for Your Next Project</h1>
                    <Link to='/signup'><button>Sign Up for Free</button></Link>
                </div>
            </div>


            
        </main>
    )
}
