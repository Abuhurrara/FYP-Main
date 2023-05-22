import React from "react";
import { useState } from "react";
import axios from "axios";
import { Brands } from "./Brands";
import "../css/sign-up.css";
import { Link } from "react-router-dom";

const RestaurantManagementSignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        mail,
        restaurantName,
        zipCode,
        city,
        branchCity,
        country,
        managementID,
        registrationCertificate,
        password,
      } = event.target.elements;

      const formData = new FormData();
      formData.append("mail", mail.value);
      formData.append("restaurantName", restaurantName.value);
      formData.append("zipCode", zipCode.value);
      formData.append("city", city.value);
      formData.append("branchCity", branchCity.value);
      formData.append("country", country.value);
      formData.append("managementID", managementID.value);
      formData.append(
        "registrationCertificate",
        registrationCertificate.files[0]
      );
      formData.append("password", password.value);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/manager/signup/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      // TODO: Handle the response as needed
    } catch (error) {
      console.error(error);
      // TODO: Handle the error as needed
    }
  };

  return (
    <>
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
          <Link
            to="/sign-up/Restaurant-management-sign-up"
            className="sign-up-breadcrumb"
          >
            Restaurant Management Sign Up
          </Link>
        </div>
      </div>

      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h5>Create an account</h5>
          <h1>Restaurant Management Sign Up</h1>
          <div className="sign-up-form-fields">
            <form onSubmit={handleSubmit}>
              <div className="first-last-name">
                <div className="last-name-container">
                  <label>Mail</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="first-name"
                    name="mail"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Restaurant name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your Restaurant name"
                    className="first-name"
                    name="restaurantName"
                  />
                </div>
                <div className="last-name-container">
                  <label>Zip code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="first-name"
                    name="zipCode"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your city"
                    className="first-name"
                    name="city"
                  />
                </div>
                <div className="last-name-container">
                  <label>Branch City</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch city"
                    className="first-name"
                    name="branchCity"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Country</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Country"
                    className="first-name"
                    name="country"
                  />
                </div>
                <div className="last-name-container">
                  <label>Management ID</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch address"
                    className="first-name"
                    name="managementID"
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Registration Certificate (.png/.jpeg/.pdf)</label>
                  <br />
                  <input
                    type="file"
                    accept="image/png, image/jpg, image/gif, image/jpeg"
                    className="reg-cert"
                    name="registrationCertificate"
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
                    name="password"
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
              <button type="submit" className="sign-up-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export { RestaurantManagementSignUp };
