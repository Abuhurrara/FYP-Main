import React from "react";
import Sidebar from "../Sidebar";
import CardDash from "../CardDash";

function AcceptedNgoEmp() {
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
        <div className="restaurant-dashboard-data d-flex flex-row">
          <CardDash />
          <CardDash />
        </div>
      </section>
    </>
  );
}

export default AcceptedNgoEmp;
