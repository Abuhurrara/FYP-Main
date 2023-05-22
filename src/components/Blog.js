import React from "react";
import { Link } from "react-router-dom";
import "../css/blog.css";
import donatingPoorPeople from "../images/old-man.jpg";
import RecentPost1 from "../images/recent-post1.png";
import RecentPost2 from "../images/recent-post2.png";
import RecentPost3 from "../images/recent-post3.png";
import TestimonialCircle from "../images/testimonial.jpg";
import {Brands} from "./Brands";
const Blog = () => {
  return (
    <>
      <div className="blog-hero-section">
        <h1>Blog</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/blogs" className="sign-up-breadcrumb">
            Blog
          </Link>
        </div>
      </div>
      <div className="blog-page-container">
        <div className="blog-page-content">
          <h1>Donating poor people</h1>
          <div className="blog-row-1">
            <img src={donatingPoorPeople} alt="" />
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
          <div className="blog-meta-data">
            <span className="blog-author">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <h6>Esther Howard</h6>
            </span>
            <span className="blog-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <h6>23 Sep 2033</h6>
            </span>
            <span className="blog-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
              </svg>
              <h6>10 min read</h6>
            </span>
          </div>
          <div className="blog-row-2">
            <span className="blog-first-heading-and-content">
              <h2>
                Back to the future: Quality education through respect,
                commitment and accountability
              </h2>
              <p>
                Flyingfish Kafue pike cow shark California smoothtongue golden
                loach temperate ocean-bass gulper Sailbearer kanyu porcupinefish
                Kafue pike opah sunfish gudgeon boga Asiatic glassfish tadpole
                fish! Alewife, poacher airbreathing catfish; zebra tilapia
                northern pearleye naked-back knifefish pupfish dojo loach,
                “snake mackerel bonytail chub arapaima horsefish weasel shark.”
              </p>
              <p>
                Asian carps sailback scorpionfish; dragon goby lemon sole
                triplefin blenny hog sucker. Smelt sleeper shovelnose sturgeon
                merluccid hake cow shark herring smelt trout-perch barbeled
                houndshark. Shell-ear Asian carps blackfish Port Jackson shark
                Atlantic saury. Sacramento blackfish pricklefish, Atlantic cod,
                “driftwood catfish chimaera ribbonfish, marblefish worm eel
                smelt mora gray reef shark scabbard fish.”
              </p>
              <h2>Clean water helps keep kids in school, especially girls.</h2>
              <p>
                Less time collecting water means more time in class. Clean water
                and proper toilets at school means teenage girls don’t have to
                stay home for a week out of every month.
              </p>
              <p>
                Northern anchovy–bass yellowtail barracuda zander yellowfin
                grouper gurnard skipjack tuna shark goby eulachon wobbegong.
                Nase combtail gourami amur pike flabby whalefish; darter, Blind
                Eagle ray soapfish ocean sunfish filefish, barbel sandfish
                wolf-herring northern pike roach barbelless catfish, Atlantic
                saury mackerel shark pike conger. Blind shark longfin smelt
                pearl bent-tooth eel stargazer grunion spookfish yellowtail
                Quillfish slickhead mora. Springfish worm mackerel sockeye
                salmon banjo catfish toadfish sauger four-eyed fish
              </p>
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
          <Brands/>
        </div>
      </div>
    </>
  );
};

export { Blog };
