import React from "react";

import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";

const Profile = () => {
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Your Profile</h1>
      </section>

      {/* ************** USER INFORMATIONS***********************/}
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
                <th>Company</th>
                <td>{sessionStorage.getItem("CompanyName")}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{sessionStorage.getItem("CompanyPhone")}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{sessionStorage.getItem("Address")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="dashboard-info-states">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Paid States and abbreviations</th>
              </tr>
            </thead>
            <tbody className="table-hover">{functions.statesNames()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
