import React from "react";

import "../../css/homee.css";
import Sidebar from "../Sidebar";

const HistoryNgoEmp = () => {
  const data = [
    {
      title: "Home",
      route: "ngo-emp/home",
    },
    {
      title: "Active Post",
      route: "ngo-emp/active-post",
    },
    {
      title: "Accepted",
      route: "ngo-emp/accepted",
    },
    {
      title: "History",
      route: "ngo-emp/history",
    },
  ];
  return (
    <>
      <div className="sign-up-hero">
        <h1>NGO Dashboard(Employee)</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header={"NGO"} data={data} />
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">History</h5>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Organization</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr-history">
                  <th scope="row">1</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Rice, wheat and Barley</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">2</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Grain</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">3</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Lentils</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">4</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Water</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">5</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Chicken</td>
                </tr>
                <tr className="tr-history">
                  <th scope="row">6</th>
                  <td>10-03-2023</td>
                  <td>Al-Khidmat Foundation</td>
                  <td>12 KG</td>
                  <td>Mutton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default HistoryNgoEmp;
