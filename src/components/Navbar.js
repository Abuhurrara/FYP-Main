import React from "react";
import { Link } from "react-router-dom";
import "./../css/navbar.css";
import nextFoodLogo from "../images/nextfood-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="navbar-list">
        <li>
          <Link to="/" className="logo">
            <img src={nextFoodLogo} className="logo-img" />
          </Link>
        </li>
        <li>
          <Link to="/" className="list-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/causes" className="list-item">
            Causes
          </Link>
        </li>
        <li>
          <Link to="/about" className="list-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="list-item">
            Blogs
          </Link>
        </li>
      </span>
      <span className="buttons">
        <Link to="/sign-up" className="sign-up-btn">Sign Up</Link>
        <Link to="/login" className="login-btn">Login</Link>
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </span>
    </div>
  );
};

export { Navbar };
