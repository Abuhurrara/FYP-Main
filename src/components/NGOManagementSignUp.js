import React from "react";
import { useState } from "react";
import { Brands } from "./Brands";
import axios from "axios";

import "../css/sign-up.css";
import { Link } from "react-router-dom";
const NGOManagementSignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    zipcode: "",
    city: "",
    organisationtype: "",
    country: "",
    organisationname: "",
    registrationCertificate: null,
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/organisation/signup/",
        {
          user: {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          },
          zipcode: formData.zipcode,
          city: formData.city,
          country: formData.country,
          organisationtype: formData.organisationtype,
          organisationname: formData.organisationname,
          registrationCertificate: formData.registrationCertificate,
        }
      );

      // Handle the response or perform any other actions
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      registrationCertificate: file,
    }));
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
            to="/sign-up/ngo-management-sign-up"
            className="sign-up-breadcrumb"
          >
            NGO Management Sign Up
          </Link>
        </div>
      </div>

      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h5>Create an account</h5>
          <h1>NGO Management Sign Up</h1>
          <div className="sign-up-form-fields">
            <form action="/" onSubmit={handleSubmit}>
              <div className="first-last-name">
                <div className="last-name-container">
                  <label>Mail</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your e-mail"
                    className="first-name"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Username</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your Username"
                    className="first-name"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Zip Code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="first-name"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleInputChange}
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
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Organization Type</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your Organization Type"
                    className="first-name"
                    name="organisationtype"
                    value={formData.organisationtype}
                    onChange={handleInputChange}
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
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Organisation Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your Organisation Name"
                    className="first-name"
                    name="organisationname"
                    value={formData.organisationname}
                    onChange={handleInputChange}
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
                    onChange={handleFileChange}
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
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="confirm-pass-container">
                  <label>Confirm Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="first-name"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
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

export { NGOManagementSignUp };
