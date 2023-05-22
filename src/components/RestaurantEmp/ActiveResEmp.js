import React from "react";

import "../../css/homee.css";
import Sidebar from "../Sidebar";

const ActiveResEmp = () => {
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
        <Sidebar header="Restaurant" data={data} />
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Active Posts</h5>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Restaurant ID</th>
                  <th scope="col">Food Name</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Updated At</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-history">
                  <th scope="row">1</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">2</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">3</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">4</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">5</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">6</th>
                  <td>Top cafe</td>
                  <td>Rice</td>
                  <td>12 KG</td>
                  <td>10-02-2023</td>
                  <td>10-03-2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default ActiveResEmp;
