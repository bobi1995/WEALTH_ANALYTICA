import React from "react";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/clientDashboard.scss";
const Dashboard = props => {
  const data = props.location.state;
  console.log(data);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Your Profile</h1>
      </section>
    </div>
  );
};

export default Dashboard;
