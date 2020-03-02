import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import "../../styles/dataPages/clientDashboard.scss";
import axios from "axios";
import "../../styles/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import functions from "./dashboardFunctions/functions";
import charts from "./dashboardFunctions/charts";
import { Bar } from "react-chartjs-2";
import Loader from "./dashboardFunctions/loader";

const Dashboard = props => {
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

  //***************USEEFECT FUNTCTION FOR FETCHING DATA********************* */
  useEffect(() => {
    let url;

    if (stateAbbriviation.length === 1) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}`;
    } else if (stateAbbriviation.length === 2) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}&state=${stateAbbriviation[1]}`;
    } else if (stateAbbriviation.length === 3) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesTotals?year=2016&year=2017&year=2018&state=${stateAbbriviation[0]}&state=${stateAbbriviation[1]}&state=${stateAbbriviation[2]}`;
    }
    console.log(url);
    if (stateAbbriviation.length > 0) {
      document.getElementById("dashboard-submit-btn").disabled = true;
      axios
        .get(url, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          res.data.forEach(el => {
            document.getElementById("dashboard-submit-btn").disabled = false;
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
        .catch(error => {
          console.log(error);
          alert("For some reason we could not find the desired results.");
          window.location.reload();
        });
    }
  }, [stateInput]);

  //*********ADD STATE IN LIST********** */

  const addState = e => {
    const allowedStates = functions.commonFunction();
    const stateField = document.getElementById("stateInput").value;

    e.preventDefault();

    if (allowedStates.includes(stateField)) {
      setNetAssetsEndOfYear([]);
      setNetIncome([]);
      setEmployeesContributionIncome([]);
      setParticipantsContributionIncome([]);
      setTotalExpenses([]);
      setTotalIncome([]);
      setParticipantsAccountBal([]);

      const parts = stateField.split(" - ");
      setStateAbbriviation([...stateAbbriviation, parts[1]]);
      setStateInput([...stateInput, stateField]);
      document.getElementById("emailHelp").innerHTML =
        "States you want to check will apear on the right.";
      document.getElementById("stateInput").value = "";
    } else {
      document.getElementById("emailHelp").innerHTML =
        "PICK CORRECT STATE VALUE";
    }
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
        <h1 className="clientDash-header1">Dashboard</h1>
      </section>

      {/* ************** CHARTS AND DIAGRAMS***********************/}
      <div className="dashboard-diagrams">
        <div className="dashboard-diagrams-addState ">
          <div className="addState-innerDiv">
            <form className="addstate-form" onSubmit={addState}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="stateInput"
                  placeholder="Enter state"
                  list="state-dataList"
                  autoComplete="off"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  States you want to check will apear on the right.
                </small>
              </div>
              {stateInput.length < 3 ? (
                <button
                  type="submit"
                  className="dashboard-btn btn btn-primary "
                  id="dashboard-submit-btn"
                >
                  Add
                </button>
              ) : (
                <button
                  disabled
                  id="dashboard-submit-btn"
                  type="submit"
                  className="btn btn-primary dashboard-btn"
                >
                  Add
                </button>
              )}
              <datalist id="state-dataList">
                {functions.dataListStates(stateInput)}
              </datalist>
            </form>
          </div>
          <div className="addState-innerDiv">
            <ul id="notes-004" className="notes-list">
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
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(netAssetsEndOfYear, "Net Assets EOY")}
                  options={charts.optionReturn(netAssetsEndOfYear)}
                  width={100}
                  height={50}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>

        <div className="individual-chart">
          <h1>Net Income</h1>
          {stateInput.length > 0 ? (
            netIncome.length > 0 ? (
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(netIncome, "Net Income")}
                  options={charts.optionReturn(netIncome)}
                  width={150}
                  height={100}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>
      </div>
      {/***********SECOND ROW OF CHARTS*************/}
      <div className="dashboard-graphs">
        <div className="individual-chart">
          <h1>Income Contributed By Employee</h1>
          {stateInput.length > 0 ? (
            employeesContributionIncome.length > 0 ? (
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(
                    employeesContributionIncome,
                    "Income Contributed By Employee"
                  )}
                  options={charts.optionReturn(employeesContributionIncome)}
                  width={150}
                  height={100}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>

        <div className="individual-chart">
          <h1>Participant Account Balance</h1>
          {stateInput.length > 0 ? (
            participantsAccountBal.length > 0 ? (
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(
                    participantsAccountBal,
                    "Participant Account Balance"
                  )}
                  options={charts.optionReturn(participantsAccountBal)}
                  width={150}
                  height={100}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>
      </div>

      {/***********THIRD ROW OF CHARTS*************/}
      <div className="dashboard-graphs">
        <div className="individual-chart">
          <h1>Total Expenses</h1>
          {stateInput.length > 0 ? (
            totalExpenses.length > 0 ? (
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(totalExpenses, "Total Expenses")}
                  options={charts.optionReturn(totalExpenses)}
                  width={150}
                  height={100}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>

        <div className="individual-chart">
          <h1>Total Income</h1>
          {stateInput.length > 0 ? (
            totalIncome.length > 0 ? (
              <div className="chart-content">
                <Bar
                  data={charts.dataReturn(totalIncome, "Total Income")}
                  options={charts.optionReturn(totalIncome)}
                  width={150}
                  height={100}
                />
              </div>
            ) : (
              <Loader />
            )
          ) : (
            <h3>Select State</h3>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
