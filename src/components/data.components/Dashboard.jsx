import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import "../../styles/dataPages/clientDashboard.scss";
import AllStates from "../../global/variables";
import axios from "axios";
import "../../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";

const Dashboard = props => {
  const [chartInfo, setChartInfo] = useState([]);
  const [stateInput, setStateInput] = useState([]);

  useEffect(() => {}, []);

  const statesNames = () => {
    const statesString = sessionStorage.getItem("States");
    const states = statesString.split(",");
    const purchasedStates = [];

    const officialArray = [];

    AllStates.filter(el => {
      states.forEach(abr => {
        if (el.includes(abr)) {
          purchasedStates.push(el);
        }
      });
    });

    purchasedStates.forEach(el => {
      const n = el.split(" - ");
      officialArray.push(n[1]);
      officialArray.push(n[0]);
    });

    return purchasedStates.map((state, index) => {
      return (
        <tr key={index}>
          <td>{state}</td>
        </tr>
      );
    });
  };

  //*********ADD STATE IN LIST********** */

  const addState = e => {
    e.preventDefault();
    const stateField = document.getElementById("stateInput").value;
    setStateInput([...stateInput, stateField]);
    console.log(stateField);
    document.getElementById("stateInput").value = "";
  };

  //***********RENDER STATES********* */
  const renderStates = () => {
    return stateInput.map((state, index) => {
      return (
        <li id="individual-state" key={index}>
          {state}
          <i onClick={removeState} className="fa fa-trash fa"></i>
        </li>
      );
    });
  };
  //**********REMOVE STATES************ */
  const removeState = e => {
    console.log("delete me");
    const target = e.target;
    const elem = document.getElementById("individual-state");
    console.log(stateInput);
    return target.parentNode.remove(target);
  };
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
            <tbody className="table-hover">{statesNames()}</tbody>
          </table>
        </div>
      </div>

      {/* ************** CHARTS AND DIAGRAMS***********************/}
      <div className="dashboard-diagrams">
        <div className="dashboard-diagrams-addState">
          <div className="addState-innerDiv">
            <form className="addstate-form" onSubmit={addState}>
              <div className="form-group">
                <label>States to inspect</label>
                <input
                  type="text"
                  className="form-control"
                  id="stateInput"
                  placeholder="Enter state"
                  autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">
                  States you want to check will apear on the right.
                </small>
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
          <div className="addState-innerDiv">
            <ul id="notes-004" className="notes-list">
              {renderStates()}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
