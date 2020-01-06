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
const Filters = () => {
  const [stateInput, setStateInput] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);
  const [result, setResult] = useState([]);
  const [cities, setCities] = useState([]);
  const [inputedCities, setInputedCities] = useState([]);
  const [companies, setCompanies] = useState([]);

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

    if (undefined !== NetAssetBeginOfYear) {
      setFlag(0);
    }
  });

  const addState = async e => {
    e.preventDefault();

    const allowedStates = functions.commonFunction();
    const stateField = document.getElementById("stateInput").value;
    const parts = stateField.split(" - ");
    const newCities = await filterFunction.cityFunction(parts[1]);

    if (allowedStates.includes(stateField)) {
      setCities([...cities, ...newCities]);

      setStateAbbriviation([...stateAbbriviation, parts[1]]);
      setStateInput([...stateInput, stateField]);
      document.getElementById("emailHelp").innerHTML =
        "Enter the states you want to visualise";
      document.getElementById("stateInput").value = "";
    } else {
      console.log("false");
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
    setInputedCities([...inputedCities, cityField]);
    document.getElementById("cityInput").value = "";
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
    const year = document.querySelector("input[name=radio]:checked").value;
    const data = await SearchFunction(year, stateAbbriviation, inputedCities);
    setResult(data);
    setCompanies(data.Companies);
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
                <div className="radio">
                  <input id="radio-1" name="radio" type="radio" value="2018" />
                  <label htmlFor="radio-1" className="radio-label">
                    2018
                  </label>
                </div>
                <div className="radio">
                  <input id="radio-2" name="radio" type="radio" value="2017" />
                  <label htmlFor="radio-2" className="radio-label">
                    2017
                  </label>
                </div>
                <div className="radio">
                  <input id="radio-3" name="radio" type="radio" value="2016" />
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
                    Enter the states you want to visualise
                  </small>
                  <button
                    type="submit"
                    className="btn btn-primary filter-btn"
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

              <input
                className="filter-submit-btn"
                type="submit"
                value="Search"
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
                width={150}
                height={100}
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
                width={150}
                height={100}
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
                width={150}
                height={100}
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
                width={150}
                height={100}
              />
            </div>
          </div>
        ) : (
          <div className="filter-required-selection-div">
            <h1 className="filter-required-selection-h1">
              Select state and year
            </h1>
          </div>
        )}
      </div>
      <div className="filter-bottom-main">
        <div className="table-container">
          <table className="table table-striped table-bordered table-sm table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Administrator</th>
                <th>Number</th>
                <th>Participants</th>
                <th>Income</th>
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
