import  NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import leftImage from "../../../public/images/homepage/Home-Page-Left-image.png"
import centerImage from "../../../public/images/homepage/Home-Page-Center-image.png"
import rightImage from "../../../public/images/homepage/Home-Page-Center-image.png"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"

export default function HomePage(){

    return(
        <main>
            <NavBar />

            <div>
                <img src={leftImage} className="rounded float-start" />
                <img src={centerImage} className="rounded float-center" />
                <img src={rightImage} className="rounded float-none" />
            </div>

            <Footer />
        </main>
    )
}
