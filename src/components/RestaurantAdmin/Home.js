import React from "react";

import { Brands } from "../Brands";
import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";
import Sidebar from "../Sidebar";

const Home = () => {
  const data = [
    {
      title: "Home",
      route: "restaurant-admin/homee",
    },
    {
      title: "Accounts",
      route: "restaurant-admin/Accounts",
    },
    {
      title: "Approve Employee",
      route: "restaurant-admin/approve-employee",
    },
    {
      title: "Donation History",
      route: "restaurant-admin/donation-history",
    },
    {
      title: "Active",
      route: "restaurant-admin/active",
    },
    {
      title: "To Be Picked",
      route: "restaurant-admin/to-be-picked",
    },
  ];
  return (
    <>
      <div className="sign-up-hero">
        <h1>Restaurant Dashboard(Admin)</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header={"Restaurant"} data={data} />
        <div className="stats">
          <div className="container-fluid">
            <div className="row">
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">Meals Donated</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={donorsRegistered}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">NGO Resgistered</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="stats-detail">Restaurant Registered</p>
                </div>
              </div>
              <div className="stats-box col-md-3">
                <div className="stats-entities d-flex flex-column align-items-center">
                  <img
                    src={handShaking}
                    alt="hand-shaking"
                    width="80px"
                    height="80px"
                    className="stats-img"
                  />
                  <h5 className="stats-no">4597+</h5>
                  <p className="restaurant-p stats-detail">Donors Registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
