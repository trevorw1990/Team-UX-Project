import  NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import leftImage from "../../../public/images/homepage/Home-Page-Left-image.png"
import centerImage from "../../../public/images/homepage/Home-Page-Center-image.png"
import rightImage from "../../../public/images/homepage/Home-Page-Center-image.png"



export default function HomePage(){
   


    return(
        <main>
            

            <div className="homepage-images">
                <img src={leftImage} />
                <img src={centerImage} />
                <img src={rightImage}  />
            </div>

            
        </main>
    )
}
