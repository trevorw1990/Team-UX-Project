import anime1 from "./ImagesCarousel/anime1.jpeg"
import anime2 from "./ImagesCarousel/anime2.jpeg"
import anime3 from "./ImagesCarousel/anime3.jpeg"

export default function ProfileCarousel(){
    return(
        <div className="ImageContainer">
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={anime1} class="d-block w-100" alt="First Image"/>
    
    </div>
    <div class="carousel-item">
      <img src={anime2} class="d-block w-100 " alt="Second Image"/>
    </div>
    <div class="carousel-item">
      <img src={anime3} class="d-block w-100" alt="Third Image"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}

