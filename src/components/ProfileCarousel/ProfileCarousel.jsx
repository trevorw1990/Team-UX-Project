import { useState } from "react"
import ImageUploads from "../ImageUploads/ImageUploads"

export default function ProfileCarousel(){
  const [image,setImage]=useState('')

  function DynamicPage(){
if (image!='' && image<[2]) {
  <ImageUploads image={image} setImage={setImage} />
}
  }


  return(
        <div classNameName="ImageContainer">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={DynamicPage()} className="d-block " alt="First Image"/>    
    </div>
    <div className="carousel-item">
    <img src={DynamicPage()} className="d-block " alt="First Image"/>    </div>
    <div className="carousel-item">
    <img src={DynamicPage()} className="d-block" alt="First Image"/>    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

