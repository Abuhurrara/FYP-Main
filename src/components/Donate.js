import React from "react";
import { Link } from "react-router-dom";
import "../css/donate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import donatingPoorPeople from "../images/old-man.jpg";
import RecentPost1 from "../images/recent-post1.png";
import RecentPost2 from "../images/recent-post2.png";
import RecentPost3 from "../images/recent-post3.png";
import TestimonialCircle from "../images/testimonial.jpg";
import DonationBar from "../images/donation-bar.png";
import { Brands } from "./Brands";
import Modal from "./Modal";
const Donate = () => {
  return (<>
    <div className="donate-hero-section">
      <h1>Donate for poor peoples
treatment and medicine.</h1>
      <div className="sign-up-breadcrumbs">
        <Link to="/" className="home-breadcrumb">
          Home
        </Link>
        <span className="slash"> / </span>
        <Link to="/donate-now" className="sign-up-breadcrumb">
          Donate
        </Link>
      </div>
    </div>
    <div className="blog-page-container">
      <div className="blog-page-content">
        <h1>Donating poor people</h1>
        <div className="blog-row-1">
<div className="img-container">
          <img src={donatingPoorPeople} alt="" />
          <div class="overlay">
    
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Donate Now
         </button>
  </div>
          </div>
          <span className="category">
            <h1>Category</h1>
            <hr className="category-hr" />
            <Link to="/blogs">
              <h5>Education</h5>
              <i>(3)</i>
            </Link>

            <hr />
            <Link to="/blogs">
              <h5>Food</h5>
              <i>(4)</i>
            </Link>
            <hr />
            <Link to="/blogs">
              <h5>Medical</h5>
              <i>(2)</i>
            </Link>
            <hr />
            <Link to="/blogs">
              <h5>Home</h5>
              <i>(3)</i>
            </Link>
            <hr />
            <Link to="/blogs">
              <h5 className="last-category">Water</h5>
              <i>(7)</i>
            </Link>
          </span>
        </div>
        <div className="blog-bar">
          <div className="blog-bar-top-stats">
            <span>Donation</span>
            <span>60%</span>
          </div>
          <img src={DonationBar} className="donation-bar" />
          <div className="blog-bar-bottom-stats">
            <span>Raised: 50 meals</span>
            <span>Goal: 1000 meals</span>
          </div>
        </div>
        <div className="blog-row-2">
          <span className="blog-first-heading-and-content">
            <h2>
              Donate for poor peoples treatment and medicine.
            </h2>
            <p>
              Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
              Sailbearer kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
              Alewife, poacher airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish
              dojo loach, “snake mackerel bonytail chub arapaima horsefish weasel shark.”
            </p>
            <p>
              Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog sucker. Smelt sleeper
              shovelnose sturgeon merluccid hake cow shark herring smelt trout-perch barbeled houndshark.
              Shell-ear Asian carps blackfish Port Jackson shark Atlantic saury. Sacramento blackfish pricklefish,
              Atlantic cod, “driftwood catfish chimaera ribbonfish, marblefish worm eel smelt mora gray
              reef shark scabbard fish.”
            </p>
            <p>Less time collecting water means more time in class. Clean water and proper toilets at school means
              teenage girls don’t have to stay home for a week out of every month.</p>
              <p>Northern anchovy–bass yellowtail barracuda zander yellowfin grouper gurnard skipjack tuna shark
goby eulachon wobbegong. Nase combtail gourami amur pike flabby whalefish; darter, Blind
Eagle ray soapfish ocean sunfish filefish, barbel sandfish wolf-herring northern pike roach
barbelless catfish, Atlantic saury mackerel shark pike conger. Blind shark longfin smelt pearl 
bent-tooth eel stargazer grunion spookfish yellowtail Quillfish slickhead mora. Springfish
worm mackerel sockeye salmon banjo catfish toadfish sauger four-eyed fish</p>
            <h2>Challenge</h2>
            <p>
            Best quality only happens when you care enough to do your best. Steer companies away from risky
denounce with righteous indignation who are so beguiled and demoralized by pleasure of the
            </p>
            <p>
            Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate ocean-bass gulper
kanyu porcupinefish Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole fish! Alewife
airbreathing catfish; zebra tilapia northern pearleye naked-back knifefish pupfish dojo loach.
mackerel bonytail chub arapaima horsefish weasel shark.”
            </p>
            <p>Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog sucker. Smelt sleeper
sturgeon merluccid hake cow shark herring smelt trout-perch barbeled houndshark. Shell-ear Asian
blackfish Port Jackson shark Atlantic saury. Sacramento blackfish pricklefish, Atlantic cod, “driftwood
catfish chimaera ribbonfish, marblefish worm eel smelt mora gray reef shark scabbard fish.”</p>
          </span>

          <span className="recent-posts">
            <h1>Recent posts</h1>
            <hr className="category-hr" />
            <div className="recent-post-1">
              <img src={RecentPost1} alt="" />
              <div className="recent-post-text">
                <h4>Charity, Expectations vs. Reality</h4>
                <h6>Homeless</h6>
              </div>
            </div>
            <div className="recent-post-1">
              <img src={RecentPost2} alt="" />
              <div className="recent-post-text">
                <h4>This Week’s Top Stories About....</h4>
                <h6>Medical</h6>
              </div>
            </div>
            <div className="recent-post-1">
              <img src={RecentPost3} alt="" />
              <div className="recent-post-text">
                <h4>Why You Should Focus on Charity</h4>
                <h6>Water</h6>
              </div>
            </div>
          </span>
        </div>
        <div className="blog-row-3">
          <span className="testimonial-img">
            <img src={TestimonialCircle} alt="" />
            <h2>Cameron Willson</h2>
            <h5>Founder</h5>
            <h6>
              Seamlessly network focused bandwidth after magnetic convergence.
              Energistically iterate seamless opportunities before innovative
              infrastructures.
            </h6>
          </span>
          <span className="popular-tags">
            <h1>Popular Tags</h1>
            <hr className="category-hr" />
            <button>Food</button>
            <button>Medical</button>
            <button>Health</button>
            <button>Good food</button>
            <button>Good life</button>
          </span>
        </div>
        <div className="blog-row-4">
          <span>
            <h2>Trouble With The Law Since The Day</h2>
            <p>
              Best quality only happens when you care enough to do your best.
              Steer companies away from risky denounce with righteous
              indignation who are so beguiled and demoralized by pleasure of
              the
            </p>
            <p>
              Flyingfish Kafue pike cow shark California smoothtongue golden
              loach temperate ocean-bass gulper kanyu porcupinefish Kafue pike
              opah sunfish gudgeon boga Asiatic glassfish tadpole fish!
              Alewife airbreathing catfish; zebra tilapia northern pearleye
              naked-back knifefish pupfish dojo loach. mackerel bonytail chub
              arapaima horsefish weasel shark.”
            </p>
            <p>
              Asian carps sailback scorpionfish; dragon goby lemon sole
              triplefin blenny hog sucker. Smelt sleeper sturgeon merluccid
              hake cow shark herring smelt trout-perch barbeled houndshark.
              Shell-ear Asian blackfish Port Jackson shark Atlantic saury.
              Sacramento blackfish pricklefish, Atlantic cod, “driftwood
              catfish chimaera ribbonfish, marblefish worm eel smelt mora gray
              reef shark scabbard fish.”
            </p>
          </span>
        </div>
        <div className="blog-form">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your comment
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Subscribe to emails
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <Brands />
      </div>
      
    </div>
    <div class="container p-5">
        
         
         

        
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header">
               <h5 class="modal-title text-dark" id="exampleModalLabel">Food Details</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <form>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Restaurant ID</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">NGO ID</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Name</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Quantity</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Food Quality</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Expiration Time</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Picked Up</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div><div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Picked Up Time</label>
                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                     
                  </div>
                  
                  <button type="submit" class="btn btn-primary modal-login">Donate</button>
               </form>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
               </div>
            </div>
         </div>
         </div>
         </div>
  </>
  )
}


export { Donate };