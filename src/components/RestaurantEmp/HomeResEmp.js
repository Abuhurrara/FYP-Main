import React from "react";

import handShaking from "../../images/hand-shaking.png";
import donorsRegistered from "../../images/donors-registered.png";
import "../../css/homee.css";
import Sidebar from "../Sidebar";

const HomeResEmp = () => {
  const data = [
    {
      title: "Home",
      route: "restaurant-emp/home",
    },
    {
      title: "Accounts",
      route: "restaurant-emp/Accounts",
    },
    {
      title: "Donation History",
      route: "restaurant-emp/donation-history",
    },
    {
      title: "Active",
      route: "restaurant-emp/active",
    },
    {
      title: "To Be Picked",
      route: "restaurant-emp/to-be-picked",
    },
  ];
  return (
    <>
      <div className="sign-up-hero">
        <h1>Restaurant Dashboard(Employee)</h1>
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
export default HomeResEmp;
