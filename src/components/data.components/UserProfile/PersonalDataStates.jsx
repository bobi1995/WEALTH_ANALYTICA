import React, { useState, useEffect } from "react";
import functions from "../dashboardFunctions/functions";
import commonExtract from "../commonFunctions/commonExtracts";
import Moment from "react-moment";
import "moment-timezone";
import ChangePassword from "./PersonalDataStates/ChangePassword";

const PersonalDataStates = () => {
  return (
    <div className="onepager-charts-all">
      <div className="onepager-chart-content responsive-table-div">
        <h1 className="dashboard-h1">Your info</h1>
        <table className="dashboard-table table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>
                {sessionStorage.getItem("FirstName") + " "}

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
        <div className="forgot-pass">
          <a
            className="submit"
            style={{
              backgroundColor: "green",
              paddingTop: 5,
            }}
            href="#popupChangePasswod"
          >
            Change Password
          </a>
        </div>
      </div>
      <div className="onepager-chart-content responsive-table-div">
        <h1 className="dashboard-h1">Premium</h1>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>States</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {commonExtract.extractPaidFullName().map((el) => {
              if (el.type === 2) {
                return (
                  <tr key={el.abbriviation}>
                    <td>{el.name}</td>
                    <td>
                      <Moment format="MMM/DD/YYYY">{el.expires}</Moment>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>

      <div className="onepager-chart-content responsive-table-div">
        <h1 className="dashboard-h1">Basic</h1>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>States</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {commonExtract.extractPaidFullName().map((el) => {
              if (el.type === 1) {
                return (
                  <tr key={el.abbriviation}>
                    <td>{el.name}</td>
                    <td>
                      <Moment format="MMM/DD/YYYY">{el.expires}</Moment>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <ChangePassword />
    </div>
  );
};

export default PersonalDataStates;
