import React from "react";
import aboutUs from "../images/about-us.png";
import "../css/about-us.css";
import { Link } from "react-router-dom";
import { ZPattern } from "./ZPattern";
import FeatureCard1Img from "../images/feature-card-1-img.png";
import FeatureCard3Img from "../images/feature-card-3-img.png";
import galleryImg from "../images/gallery-img1.png";
import { Carousel } from "./Carousel";
import { Brands } from "./Brands";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-hero-section">
        <h1>About Us</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/about" className="sign-up-breadcrumb">
            About Us
          </Link>
        </div>
      </div>
      <ZPattern />
      <div className="our-features">
        <span className="about-us-z-pattern-text">
          <h5>About</h5>
          <h1>Our features</h1>
        </span>
        <div className="feature-cards">
          <div className="feature-card-1">
            <div className="feature-card-1-image">
              <img src={FeatureCard1Img} alt="" />
            </div>
            <div className="feature-card-1-text">
              <h5>Make a donation</h5>
              <h6>
                Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                diam voluptua.....
              </h6>
              <ol>
                <li>Join your hand with us for a better life</li>
                <li>Let's do the right thing now</li>
                <li className="last-li">Lorem ipsum dolor sit amet</li>
              </ol>
            </div>
          </div>
          <div className="feature-card-1">
            <div className="feature-card-1-image">
              <img src={FeatureCard3Img} alt="" />
            </div>
            <div className="feature-card-1-text">
              <h5>Non profit NGO</h5>
              <h6>
                Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                diam voluptua.....
              </h6>
              <ol>
                <li>Join your hand with us for a better life</li>
                <li>Let's do the right thing now</li>
                <li className="last-li">Lorem ipsum dolor sit amet</li>
              </ol>
            </div>
          </div>
          <div className="feature-card-1">
            <div className="feature-card-1-image">
              <img src={FeatureCard1Img} alt="" />
            </div>
            <div className="feature-card-1-text">
              <h5>Make a donation</h5>
              <h6>
                Lorem ipsum dolor sit amet, consetetur sadipscing sed diam
                nonumy tempor invidunt ut labore et magna aliquyam erat, sed
                diam voluptua.....
              </h6>
              <ol>
                <li>Join your hand with us for a better life</li>
                <li>Let's do the right thing now</li>
                <li className="last-li">Lorem ipsum dolor sit amet</li>
                <li>Children where we are able to fulfill all</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="our-gallery">
        <span className="about-us-z-pattern-text">
          <h1>Our gallery</h1>
        </span>
        <div className="gallery-images">
          <div className="gallery-img-row-1">
            <img src={galleryImg} alt="" />
            <img src={galleryImg} alt="" />
            <img src={galleryImg} alt="" />
          </div>
          <div className="gallery-img-row-2">
            <img src={galleryImg} alt="" />
            <img src={galleryImg} alt="" />
            <img src={galleryImg} alt="" />
          </div>
        </div>
      </div>
      <Carousel/>
      <Brands/>
    </>
  );
};

export { AboutUs };
