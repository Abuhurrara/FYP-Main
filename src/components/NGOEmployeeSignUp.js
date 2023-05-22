import React, { useState } from "react";
import axios from "axios";

import { Brands } from "./Brands";
import "../css/sign-up.css";
import { Link } from "react-router-dom";

const NGOEmployeeSignUp = () => {
  const [formData, setFormData] = useState({
    organisationname: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    city: "",
    country: "",
    branchCode: "",
    branchAddress: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/manager/signup/",
        {
          user: {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
          branch_code: formData.branchCode,
          branch_address: formData.branchAddress,
          city: formData.city,
          country: formData.country,
          organisationname: formData.organisationname,
          zipcode: formData.zipCode,
        }
      );

      // Handle the response or perform any other actions
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
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
            to="/sign-up/ngo-employee-sign-up"
            className="sign-up-breadcrumb"
          >
            NGO Employee Sign Up
          </Link>
        </div>
      </div>

      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h5>Create an account</h5>
          <h1>NGO Employee Sign Up</h1>
          <div className="sign-up-form-fields">
            <form onSubmit={handleSubmit}>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>Organization Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your organization Name"
                    className="first-name"
                    name="organisationname"
                    value={formData.organisationname}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Username</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your Username"
                    className="first-name"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
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
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Last Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="first-name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Zip Code</label>
                  <br />
                  <input
                    type="text"
                    placeholder="54XXX"
                    className="first-name"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="first-last-name">
                <div className="first-name-container">
                  <label>City</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your City"
                    className="first-name"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Country</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter Your Country"
                    className="first-name"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
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
                    name="branchCode"
                    value={formData.branchCode}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name-container">
                  <label>Branch address</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Your branch address"
                    className="first-name"
                    name="branchAddress"
                    value={formData.branchAddress}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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

export { NGOEmployeeSignUp };
