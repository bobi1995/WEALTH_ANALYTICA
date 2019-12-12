import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import "../../styles/dataPages/clientDashboard.scss";
import axios from "axios";
import "../../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import functions from "./dashboardFunctions/functions";
import dataReturn from "./dashboardFunctions/charts";
import { Doughnut } from "react-chartjs-2";
import Loader from "./dashboardFunctions/loader";

const Dashboard = props => {
  const [chartInfo, setChartInfo] = useState([]);
  const [stateInput, setStateInput] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);

  //********************FETCHED DATA FOR  CHARTS******************** */
  const [netIncome, setNetIncome] = useState([]);
  const [netAssetsEndOfYear, setNetAssetsEndOfYear] = useState([]);
  const [
    employeesContributionIncome,
    setEmployeesContributionIncome
  ] = useState([]);
  const [participantsAccountBal, setParticipantsAccountBal] = useState([]);
  const [
    participantsContributionIncome,
    setParticipantsContributionIncome
  ] = useState([]);
  const [totalDistributionBenefits, setTotalDistributionBenefits] = useState(
    []
  );
  const [totalExpenses, setTotalExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState([]);
  //**************HEADERS FOR FETCHING****************** */
  const data = {
    Authorization: `Basic ${sessionStorage.getItem("Token")}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "headers"
  };
  let url;

  //***************USEEFECT FUNTCTION FOR FETCHING DATA********************* */
  useEffect(() => {
    if (stateAbbriviation.length === 1) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}`;
    } else if (stateAbbriviation.length === 2) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}&state=${stateAbbriviation[1]}`;
    } else if (stateAbbriviation.length === 3) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}&state=${stateAbbriviation[1]}&state=${stateAbbriviation[2]}`;
    }
    if (stateAbbriviation.length > 0) {
      axios
        .get(url, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          res.data.forEach(el => {
            netIncome.push(el.NetIncome);
            netAssetsEndOfYear.push(el.NetAssetsEndOfYear);
            employeesContributionIncome.push(el.EmployeesContributionIncome);
            participantsAccountBal.push(el.ParticipantsAccountBal);
            participantsContributionIncome.push(
              el.ParticipantsContributionIncome
            );
            totalDistributionBenefits.push(el.TotalDistributionBenefits);
            totalExpenses.push(el.TotalExpenses);
            totalIncome.push(el.TotalIncome);
          });
          setFetchedData(res.data);
        })
        .catch(error => console.log(error));
    }
  }, [stateInput]);

  //***********ONCHANGE***************** */
  const stateAbbr = () => {};

  //*********ADD STATE IN LIST********** */

  const addState = e => {
    e.preventDefault();
    setNetAssetsEndOfYear([]);
    setNetIncome([]);
    setEmployeesContributionIncome([]);
    setParticipantsContributionIncome([]);
    setTotalExpenses([]);
    setTotalIncome([]);
    setParticipantsAccountBal([]);

    const stateField = document.getElementById("stateInput").value;
    const parts = stateField.split(" - ");
    setStateAbbriviation([...stateAbbriviation, parts[1]]);
    setStateInput([...stateInput, stateField]);
    document.getElementById("stateInput").value = "";
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
  //**********REMOVE STATES************ */
  const removeState = e => {
    setNetAssetsEndOfYear([]);
    setNetIncome([]);
    setEmployeesContributionIncome([]);
    setParticipantsContributionIncome([]);
    setTotalExpenses([]);
    setTotalIncome([]);
    setParticipantsAccountBal([]);

    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    const parts = value.split(" - ");
    setStateInput(stateInput.filter(state => state !== value));
    setStateAbbriviation(stateAbbriviation.filter(state => state !== parts[1]));
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
            <tbody className="table-hover">{functions.statesNames()}</tbody>
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
                  list="state-dataList"
                  autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">
                  States you want to check will apear on the right.
                </small>
              </div>
              {stateInput.length < 3 ? (
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              ) : (
                <button disabled type="submit" className="btn btn-primary">
                  Add
                </button>
              )}
              <datalist id="state-dataList">
                {functions.dataListStates()}
              </datalist>
            </form>
          </div>
          <div className="addState-innerDiv">
            <ul onChange={stateAbbr} id="notes-004" className="notes-list">
              {renderStates()}
            </ul>
          </div>
        </div>
      </div>
      {/***********FIRST ROW OF CHARTS*************/}
      <div className="dashboard-graphs">
        <div className="individual-chart">
          <h1>Net Assets EOY</h1>
          {stateInput.length > 0 ? (
            netAssetsEndOfYear.length > 0 ? (
              <Doughnut data={dataReturn(netAssetsEndOfYear)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>

        <div className="individual-chart">
          <h1>Net Income</h1>
          {stateInput.length > 0 ? (
            netIncome.length > 0 ? (
              <Doughnut data={dataReturn(netIncome)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>
      </div>
      {/***********SECOND ROW OF CHARTS*************/}
      <div className="dashboard-graphs">
        <div className="individual-chart">
          <h1>Income Contributed By Employee</h1>
          {stateInput.length > 0 ? (
            employeesContributionIncome.length > 0 ? (
              <Doughnut data={dataReturn(employeesContributionIncome)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>

        <div className="individual-chart">
          <h1>Participant Account Balance</h1>
          {stateInput.length > 0 ? (
            participantsAccountBal.length > 0 ? (
              <Doughnut data={dataReturn(participantsAccountBal)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>
      </div>

      {/***********THIRD ROW OF CHARTS*************/}
      <div className="dashboard-graphs">
        <div className="individual-chart">
          <h1>Total Expenses</h1>
          {stateInput.length > 0 ? (
            totalExpenses.length > 0 ? (
              <Doughnut data={dataReturn(totalExpenses)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>

        <div className="individual-chart">
          <h1>Total Income</h1>
          {stateInput.length > 0 ? (
            totalIncome.length > 0 ? (
              <Doughnut data={dataReturn(totalIncome)} />
            ) : (
              <Loader />
            )
          ) : (
            <h2>Select State</h2>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
