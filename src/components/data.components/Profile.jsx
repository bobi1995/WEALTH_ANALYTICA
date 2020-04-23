import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";
import PayPal from "./UserProfile/PayPal";
import PurchaseState from "./UserProfile/PurchaseState";
import BusinessManagement from "./UserProfile/BusinessManagement";
import "../../styles/dataPages/userProfile.scss";
const Profile = () => {
  const [subUsers, setSubUsers] = useState([]);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Your Profile</h1>
      </section>

      {/* ************** USER INFORMATIONS***********************/}
      <div className="onepager-charts-all">
        <div className="onepager-chart-content responsive-table-div">
          <h1 className="dashboard-h1">Your info</h1>
          <table className="dashboard-table table">
            <tbody>
              <tr>
                <th>Name</th>
                <td>
                  {sessionStorage.getItem("FirstName")}
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
        <div className="onepager-chart-content responsive-table-div">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Paid Advanced States and abbreviations</th>
              </tr>
            </thead>
            <tbody className="table-hover">{functions.statesNames()}</tbody>
          </table>
        </div>

        <div className="onepager-chart-content responsive-table-div">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Paid Basic States and abbreviations</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {functions.basicStatesNames()}
            </tbody>
          </table>
        </div>
      </div>
      {sessionStorage.getItem("isBusiness") === "true" ? (
        <BusinessManagement
          subUsers={subUsers}
          passSubUsers={(users) => {
            setSubUsers(users);
          }}
        />
      ) : (
        ""
      )}
      <PurchaseState />
      <PayPal />
    </div>
  );
};

export default Profile;
