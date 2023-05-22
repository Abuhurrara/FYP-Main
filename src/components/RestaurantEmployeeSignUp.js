import React from "react";

import { Brands } from "./Brands";
import "../css/sign-up.css";
import { Link } from "react-router-dom";
const RestaurantEmployeeSignUp=()=>{
return (<>
    <div className="sign-up-hero">
        <h1>Sign Up</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/sign-up" className="home-breadcrumb">
            Sign Up
          </Link>
          <span className="slash"> / </span>
          <Link to="/sign-up/restaurant-employee-sign-up" className="sign-up-breadcrumb">
            Restaurant Employee Sign Up
          </Link>
        </div>
      </div>
      
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h5>Create an account</h5>
          <h1>Restaurant Employee Sign Up</h1>
          <div className="sign-up-form-fields">
            <form action="/">
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Organization ID</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your organization ID"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Employee ID</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your employee ID"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>First Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="First Name"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Mail</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Account Status</label>
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className="first-name"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Branch code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="XXX-XXXX"
                    className="first-name"
                  />
                </div>
                <div className="last-name-container">
                  <label>Branch address</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch address"
                    className="first-name"
                  />
                </div>
              </div>
              <div className="password-confirm-pass">
                <div className="password-container">
                <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-name"
                  />
                </div>
                <div className="confirm-pass-container">
                <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-name"
                  />
                </div>
              </div>
              <button type="submit" className="sign-up-button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <Brands />
    </>
  

)

}

export {RestaurantEmployeeSignUp};