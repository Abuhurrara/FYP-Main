import React from "react";
import { Link } from "react-router-dom";
import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";

import "../../css/homee.css";
import Sidebar from "../Sidebar";

const Home = () => {
  const data = [
    {
      title: "Home",
      route: "ngo-admin/home",
    },
    {
      title: "Active Post",
      route: "ngo-admin/active-post",
    },
    {
      title: "Accepted",
      route: "ngo-admin/accepted",
    },
    {
      title: "History",
      route: "ngo-admin/history",
    },
    {
      title: "Approve Employee",
      route: "ngo-admin/approve-employee",
    },
  ];
  return (
    <>
      <div className="sign-up-hero">
        <h1>NGO Dashboard(Admin)</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header={"NGO"} data={data} />
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
                  <p className="stats-detail">Donors Resgistered</p>
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
                  <p className="restaurant-p stats-detail">NGOs Registered</p>
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
