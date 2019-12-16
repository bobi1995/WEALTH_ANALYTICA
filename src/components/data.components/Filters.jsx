import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";
import { Bar } from "react-chartjs-2";

import "../../styles/dataPages/filter.scss";
const Filters = () => {
  const [stateInput, setStateInput] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);

  const addState = e => {
    e.preventDefault();

    const stateField = document.getElementById("stateInput").value;
    const allowedStates = functions.commonFunction();
    const parts = stateField.split(" - ");
    setStateAbbriviation([...stateAbbriviation, parts[1]]);
    setStateInput([...stateInput, stateField]);
    document.getElementById("emailHelp").innerHTML =
      "States you want to check will apear on the right.";
    document.getElementById("stateInput").value = "";
  };

  const removeState = e => {
    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    const parts = value.split(" - ");
    setStateInput(stateInput.filter(state => state !== value));
    setStateAbbriviation(stateAbbriviation.filter(state => state !== parts[1]));
  };
  //***********RENDER STATES********* */
  const renderStates = () => {
    return stateInput.map((state, index) => {
      return (
        <li value={state} id="individual-state" key={index}>
          {state}
          <i onClick={removeState} className="fa fa-trash fa"></i>
        </li>
      );
    });
  };
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Filters</h1>
      </section>
      <div className="filter-top-main">
        <div className="filter-top-filters">
          <div className="dashboard-diagrams-addState filter-addState">
            <div className="addState-innerDiv">
              <form className="addstate-form filter-form">
                <div className="form-group">
                  <label>States to inspect</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stateInput"
                    placeholder="Enter state"
                    list="state-dataList"
                    autoComplete="off"
                    onChange={addState}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    States you want to check will apear on the right.
                  </small>
                </div>
                <div className="form-group"></div>
                {stateInput.length < 3 ? (
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                ) : (
                  <button disabled type="submit" className="btn btn-primary">
                    Submit
                  </button>
                )}
                <datalist id="state-dataList">
                  {functions.dataListStates(stateInput)}
                </datalist>
              </form>
            </div>

            <div className="addState-innerDiv filter-innerDiv">
              <ul id="notes-004" className="filter-notes-list">
                {renderStates()}
              </ul>
            </div>
          </div>
        </div>
        <div className="filter-top-charts">
          {" "}
          <div className="chart-content filter-chart">
            <Bar
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July"
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                  }
                ]
              }}
              width={100}
              height={50}
            />
          </div>
          <div className="chart-content filter-chart">
            <Bar
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July"
                ],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                  }
                ]
              }}
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="filter-bottom-main"></div>
    </div>
  );
};

export default Filters;
