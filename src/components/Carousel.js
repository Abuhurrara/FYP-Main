import React from 'react';
import testimonialImage from '../images/testimonials.png';
import testImage from "../images/z-pattern-image.png"
import "../css/carousel.css";
import testimonialCircle from "../images/testimonial-circle.png";
const Carousel=()=>{
    return(<>
        
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={testimonialImage} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>Our testimonials</h3>
      <h1 className='carousel-what-people-say'>What People Say</h1>
      <img src={testimonialCircle}/>
      <h5>Mr Zain Arshad</h5>
    <h6>Founder</h6>
        <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California
halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket
danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={testimonialImage} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>Our testimonials</h3>
      <h1 className='carousel-what-people-say'>What People Say</h1>
      <img src={testimonialCircle}/>
      <h5>Mr Zain Arshad</h5>
    <h6>Founder</h6>
        <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California
halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket
danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={testimonialImage} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h3>Our testimonials</h3>
      <h1 className='carousel-what-people-say'>What People Say</h1>
      <img className='testimonial-circle' src={testimonialCircle}/>
      <h5>Mr Zain Arshad</h5>
    <h6>Founder</h6>
        <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California
halibut round stingray northern sea robin. Southern grayling trout-perchSharksucker sea toad candiru rocket
danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
    </>)
}


export {Carousel};