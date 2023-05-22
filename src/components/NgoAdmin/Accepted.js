import React from "react";
import Sidebar from "../Sidebar";
import CardDash from "../CardDash";

function Accepted() {
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
        <div className="restaurant-dashboard-data d-flex flex-row">
          <CardDash />
          <CardDash />
        </div>
      </section>
    </>
  );
}

export default Accepted;
