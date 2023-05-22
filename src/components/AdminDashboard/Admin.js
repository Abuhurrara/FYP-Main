import React from "react";

import handShaking from '../../images/hand-shaking.png';
import donorsRegistered from '../../images/donors-registered.png';
import "../../css/admin.css";
import Sidebar from "../Sidebar";

const Admin = () => {
    const data = [
      {
        title: 'Home',
        route: "admin-dashboard/admin"
      },
      {
        title: 'Restaurant',
        route: "admin-dashboard/restaurant"
      },
      {
        title: 'NGOs',
        route: "admin-dashboard/ngo"
      },
  ]
  return (
    <>
      <div className="sign-up-hero">
        <h1>Admin Dashboard</h1>
      </div>
      <section className="menu d-flex">
      <Sidebar header='Admin' data={data} /> 
     
        <div className="stats">
            <div className="container-fluid">
                <div className="row">
                    <div className="stats-box col-md-3">
                        <div className="stats-entities d-flex flex-column align-items-center">
                            <img src={handShaking} alt="hand-shaking" width="80px" height="80px" className="stats-img"/>
                            <h5 className="stats-no">4597+</h5>
                            <p className="stats-detail">NGOs Registered</p>
                        </div>
                    </div>
                    <div className="stats-box col-md-3">
                        <div className="stats-entities d-flex flex-column align-items-center">
                            <img src={donorsRegistered} alt="hand-shaking" width="80px" height="80px" className="stats-img"/>
                            <h5 className="stats-no">4597+</h5>
                            <p className="stats-detail">Donors Registered</p>
                        </div>
                    </div>
                    <div className="stats-box col-md-3">
                        <div className="stats-entities d-flex flex-column align-items-center">
                            <img src={handShaking} alt="hand-shaking" width="80px" height="80px" className="stats-img"/>
                            <h5 className="stats-no">4597+</h5>
                            <p className="stats-detail">Country Memeber</p>
                        </div>
                    </div>
                    <div className="stats-box col-md-3">
                        <div className="stats-entities d-flex flex-column align-items-center">
                            <img src={handShaking} alt="hand-shaking" width="80px" height="80px" className="stats-img"/>
                            <h5 className="stats-no">4597+</h5>
                            <p className="restaurant-p stats-detail">Restaurants Registered</p>
                        </div>
                    </div>
                    <div className="stats-box col-md-3">
                        <div className="stats-entities d-flex flex-column align-items-center">
                            <img src={handShaking} alt="hand-shaking" width="80px" height="80px" className="stats-img"/>
                            <h5 className="stats-no">4597+</h5>
                            <p className="stats-detail">Meals Donated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};
export { Admin };
