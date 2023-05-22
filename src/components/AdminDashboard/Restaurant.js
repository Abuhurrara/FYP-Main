import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "../../css/admin.css";
import Sidebar from "../Sidebar";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get("http://your-api-endpoint/restaurants");
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
      // Handle the error as needed
    }
  };

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
        <Sidebar header={"Admin"} data={data} />

        <div className="restaurant-dashboard-data d-flex flex-column">
          <div className="restaurant-dashboard-header">
            <div className="restaurant-header-entities d-flex justify-content-between">
              <h5 className="h5-head">Restaurant Details</h5>
              <Link to="/admin-dashboard/restaurant" className="add-restaurant">
                Add Restaurant
              </Link>
            </div>
          </div>
          <div className="restaurant-dashboard-table">
            <table className="table ">
              <thead className="thead-row">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Restaurant</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <th scope="row">{restaurant.id}</th>
                    <td className="th-name">{restaurant.name}</td>
                    <td>
                      <button className="btn btn-edit ml-2">Edit</button>{" "}
                      <button className="btn btn-delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export { Restaurant };
