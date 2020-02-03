import React, { useState, useEffect } from "react";
import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";
import { Bar } from "react-chartjs-2";
import "../../styles/dataPages/filter.scss";
import SearchFunction from "./filtersFunctions/searchFunction";
import Loader from "./dashboardFunctions/loader";
import filterCharts from "./filtersFunctions/filterCharts";
import filterFunction from "./filtersFunctions/functions";
import dashboardChartFuntions from "./dashboardFunctions/charts";
import Company from "./filtersFunctions/company";
import Pagination from "./filtersFunctions/pagination";
import RightFilters from "./filtersFunctions/RightFilters";
import numeral from "numeral";

const Filters = () => {
  const [stateInput, setStateInput] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);
  const [result, setResult] = useState([]);
  const [cities, setCities] = useState([]);
  const [inputedCities, setInputedCities] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedYear, setSelectedYear] = useState();

  const [flag, setFlag] = useState(0);
  const [searches, setSearches] = useState(0);

  /********************REQUESTED DATA*********** */
  const [NetAssetBeginOfYear, setNetAssetBeginOfYear] = useState("");
  const [NetAssetEndOfYear, setNetAssetEndOfYear] = useState("");

  /****************PAGINATION********* */
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage, setCompaniesPerPage] = useState(30);

  useEffect(() => {
    setNetAssetBeginOfYear(result.NetAssetBeginOfYear);
    setNetAssetEndOfYear(result.NetAssetEndOfYear);
    const btn = document.getElementById("submit-searh-btn");
    const addbtn1 = document.getElementById("state-btn");
    const addbtn2 = document.getElementById("city-btn");

    if (flag === 1) {
      addbtn1.disabled = true;
      addbtn1.innerHTML = "Loading...";
      addbtn2.disabled = true;
      addbtn2.innerHTML = "Loading...";
      btn.disabled = true;
      btn.value = "Loading...";
    } else {
      btn.disabled = false;
      addbtn1.disabled = false;
      addbtn2.disabled = false;
      addbtn1.innerHTML = "Add";
      addbtn2.innerHTML = "Add";
    }
    if (stateInput.length < 1 || !selectedYear) {
      btn.disabled = true;
      btn.value = "Select State & Year";
    } else {
      btn.disabled = false;
    }

    if (undefined !== NetAssetBeginOfYear) {
      setFlag(0);
    }
  });

  const onYearChange = e => {
    setSelectedYear(e.target.value);
  };

  const addState = async e => {
    e.preventDefault();
    const addStateBtn = document.getElementById("state-btn");
    addStateBtn.disabled = true;
    addStateBtn.innerHTML = "Loading";
    const allowedStates = functions.commonFunction();
    const stateField = document.getElementById("stateInput").value;
    const parts = stateField.split(" - ");
    const newCities = await filterFunction.cityFunction(parts[1]);
    if (allowedStates.includes(stateField)) {
      addStateBtn.disabled = false;
      addStateBtn.innerHTML = "Add";
      setCities([...cities, ...newCities]);
      setStateAbbriviation([...stateAbbriviation, parts[1]]);
      setStateInput([...stateInput, stateField]);
      document.getElementById("emailHelp").innerHTML =
        "Enter the states you want to visualise";
      document.getElementById("stateInput").value = "";
    } else {
      console.log("false");
      addStateBtn.disabled = false;
      addStateBtn.innerHTML = "Add";
      document.getElementById("emailHelp").innerHTML =
        "PICK CORRECT STATE VALUE";
    }
  };

  const removeState = async e => {
    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    const parts = value.split(" - ");
    const reducedCities = await filterFunction.cityReducer(value, stateInput);
    setCities(reducedCities);
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

  //*****************CITIES */
  const addCity = e => {
    e.preventDefault();
    const cityField = document.getElementById("cityInput").value;
    if (cityField) {
      setInputedCities([...inputedCities, cityField]);
      document.getElementById("cityInput").value = "";
    }
  };
  const renderCities = () => {
    return inputedCities.map((city, index) => {
      return (
        <li value={city} id="individual-city" key={index}>
          {city}
          <i onClick={removeCity} className="fa fa-trash fa"></i>
        </li>
      );
    });
  };

  const removeCity = async e => {
    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    setInputedCities(inputedCities.filter(city => city !== value));
  };

  //***********SUBMIT SEARCH********* */
  const searchBtn = async e => {
    e.preventDefault();
    setResult([]);
    setFlag(1);
    setSearches(1);
    setNetAssetBeginOfYear(undefined);
    setCompanies([]);
    setSelectedYear(document.querySelector("input[name=radio]:checked").value);
    const maxIncome = document.getElementById("maxIncome").value;

    const minIncome = document.getElementById("minIncome").value;

    const maxParticipants = document.getElementById("maxParticipants").value;
    const minParticipants = document.getElementById("minParticipants").value;

    const companyType = document.getElementById("companyType").options[
      document.getElementById("companyType").selectedIndex
    ].value;

    const businessCode = document.getElementById("business-code").value;

    const benefitType = document.getElementById("benefitType").options[
      document.getElementById("benefitType").selectedIndex
    ].value;

    const data = await SearchFunction(
      selectedYear,
      stateAbbriviation,
      inputedCities,
      maxIncome,
      minIncome,
      minParticipants,
      maxParticipants,
      companyType,
      businessCode,
      benefitType
    );
    setResult(data);
    setCompanies(data.Companies);
  };

  //***********SORT BY**************
  const sortByIncome = () => {
    const arr = [...companies].sort((a, b) =>
      a.NetIncome > b.NetIncome ? -1 : 1
    );
    setCompanies(arr);
  };
  const sortByParticipants = () => {
    const arr = [...companies].sort((a, b) =>
      a.Participants > b.Participants ? -1 : 1
    );
    setCompanies(arr);
  };
  const sortByName = () => {
    const arr = [...companies].sort((a, b) => (a.Name > b.Name ? 1 : -1));
    setCompanies(arr);
  };

  //****PAGGINATION*********** */
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompany = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const CompaniesResult = array => {
    if (array !== undefined) {
      return array.map((item, index) => {
        return <Company singleCompany={item} key={index} />;
      });
    }
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
            <form onSubmit={searchBtn}>
              {/* STATE INPUT */}
              <div className="filter-state-input-field">
                <div className="filter-add-state-field">
                  <input
                    type="text"
                    className="filter-control"
                    id="stateInput"
                    placeholder="Enter state"
                    list="state-dataList"
                    autoComplete="off"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Enter the states you want to visualise
                  </small>
                  <button
                    type="submit"
                    className="btn btn-primary filter-btn"
                    id="state-btn"
                    onClick={addState}
                  >
                    Add
                  </button>
                </div>
                <div className="filter-list-holder">
                  <div className="addState-innerDiv filter-addState">
                    <ul id="notes-004" className="notes-list">
                      {renderStates()}
                    </ul>
                  </div>
                </div>
              </div>
              {/* RADIO BUTTONS */}
              <div className="container radio-container">
                <h2 className="filter-h2">Year</h2>
                <div className="radio">
                  <input
                    id="radio-1"
                    name="radio"
                    type="radio"
                    value="2018"
                    onChange={onYearChange}
                  />
                  <label htmlFor="radio-1" className="radio-label">
                    2018
                  </label>
                </div>
                <div className="radio">
                  <input
                    id="radio-2"
                    name="radio"
                    type="radio"
                    value="2017"
                    onChange={onYearChange}
                  />
                  <label htmlFor="radio-2" className="radio-label">
                    2017
                  </label>
                </div>
                <div className="radio">
                  <input
                    id="radio-3"
                    name="radio"
                    type="radio"
                    value="2016"
                    onChange={onYearChange}
                  />
                  <label htmlFor="radio-3" className="radio-label">
                    2016
                  </label>
                </div>
              </div>
              {/**CITIES */}
              <div className="filter-state-input-field">
                <div className="filter-add-state-field">
                  <input
                    type="text"
                    className="filter-control"
                    id="cityInput"
                    placeholder="Enter city"
                    list="cities-dataList"
                    autoComplete="off"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Enter the city you want to visualise
                  </small>
                  <button
                    type="submit"
                    className="btn btn-primary filter-btn"
                    id="city-btn"
                    onClick={addCity}
                  >
                    Add
                  </button>
                </div>
                <div className="filter-list-holder">
                  <div className="addState-innerDiv filter-addState">
                    <ul id="notes-city" className="notes-list">
                      {renderCities()}
                    </ul>
                  </div>
                </div>
              </div>
              {/** ASSETS & PARTICIPANTS */}
              <div className="filter-state-input-field">
                {/**MAX AND MIN ASSETS */}
                <div className="filter-min-max-assets">
                  <h2 className="filter-h2">Assets</h2>
                  <div>
                    <div className="filter-netIncome-div">
                      <label className="filter-netIncome-label">Max:</label>
                      <input
                        className="filter-control netIncome-filter"
                        id="maxIncome"
                        placeholder="Enter Asset"
                        autoComplete="off"
                        min="0"
                        max="99999999999"
                        onChange={e => {
                          e.target.value = numeral(e.target.value).format(
                            "0,0"
                          );
                        }}
                      />
                    </div>

                    <div className="filter-netIncome-div">
                      <label className="filter-netIncome-label">Min:</label>
                      <input
                        className="filter-control netIncome-filter"
                        id="minIncome"
                        placeholder="Enter Asset"
                        autoComplete="off"
                        min="0"
                        max="99999999999"
                        onChange={e => {
                          e.target.value = numeral(e.target.value).format(
                            "0,0"
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/**MAX AND MIN PARTICIPANTS */}
                <div className="filter-min-max-assets">
                  <h2 className="filter-h2">Participants</h2>
                  <div>
                    <div className="filter-netIncome-div">
                      <label className="filter-netIncome-label">Max:</label>
                      <input
                        className="filter-control netIncome-filter"
                        id="maxParticipants"
                        placeholder="Enter Participants"
                        autoComplete="off"
                        min="0"
                        max="99999999"
                        onChange={e => {
                          e.target.value = numeral(e.target.value).format(
                            "0,0"
                          );
                        }}
                      />
                    </div>

                    <div className="filter-netIncome-div">
                      <label className="filter-netIncome-label">Min:</label>
                      <input
                        className="filter-control netIncome-filter"
                        id="minParticipants"
                        placeholder="Enter Participants"
                        autoComplete="off"
                        min="0"
                        maxLength="99999999"
                        onChange={e => {
                          e.target.value = numeral(e.target.value).format(
                            "0,0"
                          );
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <input
                className="filter-submit-btn"
                id="submit-searh-btn"
                type="submit"
                value="Search"
                disabled={true}
              ></input>
            </form>

            {/* DATALISTS */}
            <datalist id="state-dataList">
              {functions.dataListStates(stateInput)}
            </datalist>
            <datalist id="cities-dataList">
              {functions.dataListCities(cities)}
            </datalist>
          </div>
        </div>
        {flag === 1 ? (
          <Loader />
        ) : searches > 0 ? (
          <div className="filter-top-charts">
            <div className="chart-content filter-chart1">
              <Bar
                data={filterCharts.dataBeginEnd(
                  NetAssetBeginOfYear,
                  NetAssetEndOfYear
                )}
                options={dashboardChartFuntions.optionReturn([
                  NetAssetBeginOfYear,
                  NetAssetEndOfYear
                ])}
                width={350}
                height={300}
              />
              <br />
              <Bar
                data={filterCharts.participantsChart(
                  result.TotalParticipants,
                  result.RetiredParticipants,
                  result.TotalParticipantsBal
                )}
                options={dashboardChartFuntions.optionReturn([
                  result.TotalParticipants,
                  result.RetiredParticipants,
                  result.TotalParticipantsBal
                ])}
                width={350}
                height={300}
              />
            </div>
            <div className="chart-content filter-chart1">
              <Bar
                data={filterCharts.distribution(
                  result.Distributions,
                  result.CorrectivrDistribution,
                  result.ServiceProviderExpenses,
                  result.OtherExpenses
                )}
                options={dashboardChartFuntions.optionReturn([
                  result.Distributions,
                  result.CorrectivrDistribution,
                  result.ServiceProviderExpenses,
                  result.OtherExpenses
                ])}
                width={350}
                height={300}
              />
              <br />
              <Bar
                data={filterCharts.contribution(
                  result.ParticipantContribution,
                  result.EmployerContribution
                )}
                options={dashboardChartFuntions.optionReturn([
                  result.ParticipantContribution,
                  result.EmployerContribution
                ])}
                width={350}
                height={300}
              />
            </div>
          </div>
        ) : (
          <div className="filter-required-selection-div">
            <h1 className="filter-required-selection-h1">
              Select state and year
            </h1>
            <img
              className="filter-required-logo"
              src={require("../../styles/images/Wealth_Analytica.png")}
            />
          </div>
        )}
        <RightFilters />
      </div>

      <div className="filter-bottom-main">
        <div className="table-container">
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th
                  onClick={sortByName}
                  className="filter-table-header-clickable"
                >
                  Name
                </th>
                <th>Address</th>
                <th>City</th>
                <th>Administrator</th>
                <th>Number</th>
                <th
                  className="filter-table-header-clickable"
                  onClick={sortByParticipants}
                >
                  Participants
                </th>
                <th
                  className="filter-table-header-clickable"
                  onClick={sortByIncome}
                >
                  Income
                </th>
                <th>Details</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody className="table-hover">
              {CompaniesResult(currentCompany)}
            </tbody>
          </table>
          <Pagination
            companiesPerPage={companiesPerPage}
            totalCompanies={companies.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
