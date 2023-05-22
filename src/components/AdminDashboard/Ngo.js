import React from "react";

import { Link } from "react-router-dom";
import "../../css/admin.css";
import Sidebar from "../Sidebar";
import axios from "axios";

const NGO = () => {
  const [ngoData, setNgoData] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setNgoData(response.data);
    });
  }, []);

  const editNgo = (id) => {
    console.log(id, "$user id");
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [recordsPerPage] = React.useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = ngoData.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(ngoData.length / recordsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const data = [
    {
      title: "Home",
      route: "admin-dashboard/admin",
    },
    {
      title: "Restaurant",
      route: "admin-dashboard/restaurant",
    },
    {
      title: "NGOs",
      route: "admin-dashboard/ngo",
    },
  ];
  return (
    <>
      <div className="sign-up-hero">
        <h1>Admin Dashboard</h1>
      </div>
      <section className="menu d-flex">
        <Sidebar header="Admin" data={data} />

        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">NGO Details</h5>
              <Link to="/admin-dashboard/ngo" className="add-restaurant">
                Add NGO
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NGO</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((ngo, index) => (
                  <tr key={index}>
                    <th scope="row">{ngo.id}</th>
                    <td className="th-name">{ngo.name}</td>
                    <td>
                      <button
                        className="btn btn-edit ml-2"
                        onClick={() => editNgo(ngo.id)}
                      >
                        Edit
                      </button>
                      <button className="btn btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="pagination">
              {pageNumbers.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${
                    currentPage === pageNumber ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export { NGO };
