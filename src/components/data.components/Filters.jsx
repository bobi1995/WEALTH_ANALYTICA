import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";
import { Bar } from "react-chartjs-2";
import "../../styles/dataPages/filter.scss";

const Filters = () => {
  const [stateInput, setStateInput] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);

  const addState = e => {
    const allowedStates = functions.commonFunction();
    const stateField = document.getElementById("stateInput").value;

    e.preventDefault();

    if (allowedStates.includes(stateField)) {
      const parts = stateField.split(" - ");
      setStateAbbriviation([...stateAbbriviation, parts[1]]);
      setStateInput([...stateInput, stateField]);
      document.getElementById("emailHelp").innerHTML =
        "States you want to check will apear on the right.";
      document.getElementById("stateInput").value = "";
    } else {
      console.log("false");
      document.getElementById("emailHelp").innerHTML =
        "PICK CORRECT STATE VALUE";
    }
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
      const abbr = state.split(" - ");
      return (
        <li value={state} id="individual-state" key={index}>
          {abbr[1]}
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
        <div className="required-filters">
          <div className="state-input-fields">
            <div className="state-input-input">
              <form>
                {/* STATE INPUT */}
                <div>
                  <input
                    type="text"
                    className="filter-control"
                    id="stateInput"
                    placeholder="Enter state"
                    list="state-dataList"
                    autoComplete="off"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Enter the states you want to visualise.
                  </small>
                  <button
                    type="submit"
                    className="btn btn-primary filter-btn"
                    onClick={addState}
                  >
                    Add
                  </button>
                </div>

                {/* RADIO BUTTONS */}
                <div className="container radio-container">
                  <div className="radio">
                    <input id="radio-1" name="radio" type="radio" />
                    <label htmlFor="radio-1" className="radio-label">
                      2018
                    </label>
                  </div>
                  <div className="radio">
                    <input id="radio-2" name="radio" type="radio" />
                    <label htmlFor="radio-2" className="radio-label">
                      2017
                    </label>
                  </div>
                  <div className="radio">
                    <input id="radio-3" name="radio" type="radio" />
                    <label htmlFor="radio-3" className="radio-label">
                      2016
                    </label>
                  </div>
                </div>

                {/* CITY INPUT */}
              </form>
            </div>

            {/* DATALISTS */}
            <datalist id="state-dataList">
              {functions.dataListStates(stateInput)}
            </datalist>

            <div className="addState-innerDiv">
              <ul id="notes-004" className="notes-list">
                {renderStates()}
              </ul>
            </div>
          </div>
        </div>

        <div className="filter-top-charts">
          <div className="chart-content filter-chart1">
            <Bar
              data={{
                labels: ["January", "February", "March"],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80]
                  }
                ]
              }}
              width={150}
              height={100}
            />
            <Bar
              data={{
                labels: ["January", "February", "March"],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80]
                  }
                ]
              }}
              width={150}
              height={100}
            />
          </div>
          <div className="chart-content filter-chart1">
            <Bar
              data={{
                labels: ["January", "February", "March"],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80]
                  }
                ]
              }}
              width={150}
              height={100}
            />
            <Bar
              data={{
                labels: ["January", "February", "March"],
                datasets: [
                  {
                    label: "My First dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80]
                  }
                ]
              }}
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="filter-bottom-main"></div>
    </div>
  );
};

export default Filters;