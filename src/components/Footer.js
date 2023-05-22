import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import instagramIcon from "../images/instagram-icon.png";
import twitterIcon from "../images/twitter-icon.png";
import pinterestIcon from "../images/pinterest-icon.png";
import youtubeIcon from "../images/youtube-icon.png";
import nextFoodLogo from "../images/nextfood-logo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <span className="first-footer-section">
          <Link to="/" className="footer-logo">
          <img src={nextFoodLogo} className="footer-logo-img" />
          </Link>
          <h5 className="footer-first-heading">10k</h5>
          <h5>Worldwide clients</h5>
          <h5 className="footer-last-heading">Already connected </h5>
        </span>
        <span className="second-footer-section">
          <h6 className="quick-links">Quick Links</h6>
          <div className="links">
            <Link to="/" className="footer-home">
              Home
            </Link>
            <Link to="/about-us" className="footer-about-us">
              About Us
            </Link>
            <Link to="/blog-post" className="footer-blog-post">
              Blog Post
            </Link>
            <Link to="/photo-gallery" className="footer-photo-gallery">
              Photo Gallery
            </Link>
            <Link to="/buy-meal" className="footer-buy-meal">
              Buy me a meal
            </Link>
          </div>
        </span>
        <span className="third-footer-section">
          <h6 className="quick-links">Get In Touch</h6>
          <div className="links">
            <Link to="/" className="footer-contact-us">
              Contact Us
            </Link>
            <Link to="/about-us" className="footer-our-services">
              Our Services
            </Link>
          </div>
        </span>
        <span className="fourth-footer-section">
          <h6 className="quick-links">Address</h6>
          <div className="links">
            <p className="footer-contact-us">
              2464 Royal Ln. Mesa, New Jersey 45463
            </p>
          </div>
        </span>
        <span className="fifth-footer-section">
          <h6 className="quick-links">Newsletter</h6>
          <nav class="navbar">
            <div class="">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 newsletter-search"
                  type="search"
                  placeholder="Enter your email"
                  aria-label="Search"
                />
                <button class="btn newsletter-btn" type="submit">
                  Subscribe
                </button>
              </form>
              <h6 className="newsletter-disclaimer">
                Your email is safe with us. We don't spam
              </h6>
            </div>
          </nav>
          <h6 className="quick-links">Follow us</h6>
          <div className="footer-icons">
            <Link to="/"><img src={twitterIcon}/></Link>
            <Link to="/"><img src={instagramIcon}/></Link>
            <Link to="/"><img src={pinterestIcon}/></Link>
            <Link to="/"><img src={youtubeIcon}/></Link>
          </div>
        </span>
      </div>
    </>
  );
};

export { Footer };
