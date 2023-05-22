import React from "react";

import { Link } from "react-router-dom";

import "../../css/homee.css";
import Sidebar from "../Sidebar";

const ApproveEmployee = () => {
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
        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Employee Details</h5>
              <Link to="/admin-dashboard/ngo" className="add-restaurant">
                Approve Employee
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Employee Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td className="th-name">Abdul Razzaq</td>
                  <td>
                    <button className="btn btn-edit ml-2">View Details</button>{" "}
                    <button className="btn btn-delete mr-2">Reject</button>
                    <button className="btn btn-delete">Approve</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
export default ApproveEmployee;
