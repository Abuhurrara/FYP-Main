import React from "react";
import { Brands } from "./Brands";
import "../css/login.css";
import { Link } from "react-router-dom";
import altLogin from "../images/alt-login.png";
import fbLogo from "../images/fb-icon.png";
import googleLogo from "../images/google-icon.png";
import twitterLogo from "../images/twitter-icon2.png";
const Login = () => {
  return (
    <>
      <div className="login-hero sign-up-hero">
        <h1>Login</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/login" className="sign-up-breadcrumb">
            Login
          </Link>
        </div>
      </div>
      <div className="login-form-container">
        <div className="login-container">
          <div className="login-form">
            <h1>Login</h1>
            <div className="user-type-container">
              <label for="country">User Type</label>
              <br />
              <select
                name="user-type"
                className="donor-ngo-dropdown"
                placeholder="Donor or NGO"
              >
                <option value="donor">Restaurant</option>
                <option value="ngo">NGO</option>
              </select>
            </div>
            <div className="login-mail-container">
              <label>Mail</label>
              <br />
              <input
                type="text"
                placeholder="Your Email"
                className="first-name"
              />
            </div>

            <div className="login-password-container">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                className="first-name"
              />
            </div>
            <Link to="/login" className="forgot-pass">
              <i>Forgot password?</i>
            </Link>
            <br />
            <button type="submit" className="sign-up-button">
              Login
            </button>
          </div>
         
        </div>
      </div>
      <Brands />
    </>
  );
};

export { Login };
