import React from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import "../../styles/dataPages/clientDashboard.scss";
const Dashboard = props => {
  const stateList = () => {
    const statesString = sessionStorage.getItem("States");
    const states = statesString.split(",");
    return states.map((state, index) => {
      return <td>{state}</td>;
    });
  };

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Your Profile</h1>
      </section>
      <div className="dashboard-client-info-main">
        <div className="dashboard-info">
          <h1 className="dashboard-h1">Your info</h1>
          <table className="dashboard-table table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  {sessionStorage.getItem("FirstName")}{" "}
                  {sessionStorage.getItem("LastName")}
                </td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{sessionStorage.getItem("Email")}</td>
              </tr>
              <tr>
                <th>Larry</th>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-info-states">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Paid States</th>
                <th scope="col">Code</th>
              </tr>
            </thead>
            <tbody className="table-hover"></tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
