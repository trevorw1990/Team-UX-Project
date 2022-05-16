import anime1 from "./ImagesCarousel/anime1.jpeg"
import anime2 from "./ImagesCarousel/anime2.jpeg"
import anime3 from "./ImagesCarousel/anime3.jpeg"

export default function ProfileCarousel(){
    return(

<div className="container">
    
        <div id="carouselSlider" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#carouselSlider" data-slide-to="0" className="active"></li>
                <li data-target="#carouselSlider" data-slide-to="1"></li>
                <li data-target="#carouselSlider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={anime1} className="w-100 h-100 "/>
                    <div className="carousel-caption ">
                        <h5>First slide</h5>
                        <p>This is first slide</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={anime2} className="w-100 h-100 "/>
                    <div className="carousel-caption ">
                        <h5>Second slide</h5>
                        <p>This is second slide</p>
                    </div>
                </div>
                <div className="carousel-item ">
                    <img src={anime3} className="w-100 h-100 "/>
                    <div className="carousel-caption ">
                        <h5>Third slide</h5>
                        <p>This is third slide</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev " href="#carouselSlider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon "></span>
                <span>Previous</span>
            </a>
            <a className="carousel-control-next " href="#carouselSlider" role="button" data-slide="next">
                <span className="carousel-control-next-icon "></span>
                <span>Next</span>
            </a>
        </div>
    </div>
    )
}