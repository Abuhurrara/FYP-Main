import React from "react";
import { Brands } from "./Brands";
import "../css/sign-up.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {


  const navigate = useNavigate();

  function handleChange(e){
    navigate(`/${e.target.value}`)
  }

 
  return (
    <>
      <div className="sign-up-hero">
        <h1>Sign Up</h1>
        <div className="sign-up-breadcrumbs">
          <Link to="/" className="home-breadcrumb">
            Home
          </Link>
          <span className="slash"> / </span>
          <Link to="/sign-up" className="sign-up-breadcrumb">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <div className="sign-up-form-fields">
            <form action="/">
              <div className="mail-user-type">
                <div className="user-type-container">
                  <label for="country">Sign Up as Restaurant</label>
                  <br />
                  <select
                    name="user-type"
                    className="donor-ngo-dropdown"
                    placeholder="Donor or NGO"
                    onChange={handleChange}
                  >
                    <option>
                      No option selected
                    </option>
                    <option value="sign-up/restaurant-management-sign-up">
                      Management
                    </option>
                    <option value="sign-up/restaurant-employee-sign-up">Employee</option>
                  </select>
                </div>
                <div className="user-type-container">
                  <label for="country">Sign Up as NGO</label>
                  <br />
                  <select
                    name="user-type"
                    className="donor-ngo-dropdown"
                    placeholder="Donor or NGO"
                    onChange={handleChange}
                  >
                  <option>
                      No option selected
                    </option>
                    <option value="sign-up/ngo-management-sign-up">
                      Management
                    </option>
                    <option value="sign-up/ngo-employee-sign-up">Employee</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export { SignUp };
