import React, { useState, useEffect } from "react";
import Datanavbar from "./DataNavbar";
import functions from "./dashboardFunctions/functions";
import "../../styles/dataPages/filter.scss";
import SearchFunction from "./filtersFunctions/searchFunction";
import Loader from "./dashboardFunctions/loader";
import filterFunction from "./filtersFunctions/functions";
import Company from "./filtersFunctions/company";
import Pagination from "./filtersFunctions/pagination";
import RightFilters from "./filtersFunctions/RightFilters";
import MiddleFilterCHARTS from "./filtersFunctions/MiddleFilterCHARTS";
import SummaryTable from "./filtersFunctions/SummaryTable";
import RightFiltersFunction from "./filtersFunctions/RightFilterFunctions";
import Magellan from "./Magellan";

const Filters = () => {
  const [stateInput, setStateInput] = useState([]);
  const [stateAbbriviation, setStateAbbriviation] = useState([]);
  const [result, setResult] = useState([]);
  const [cities, setCities] = useState([]);
  const [inputedCities, setInputedCities] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2018);
  const [flag, setFlag] = useState(0);
  const [searches, setSearches] = useState(0);

  //BASIC STATES
  const basicStates = functions.commonFunctionBasics();
  const basicFlag = basicStates.some((el) => stateInput.includes(el));

  /********************SORTING*********** */
  const [sorted, setSorted] = useState(0);
  const [sortedPart, setSortedPart] = useState(0);
  const [sortedAlphabetic, setSortedAlphabetic] = useState(0);

  /********************REQUESTED DATA*********** */
  const [NetAssetBeginOfYear, setNetAssetBeginOfYear] = useState("");
  const [NetAssetEndOfYear, setNetAssetEndOfYear] = useState("");

  /****************PAGINATION********* */
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage, setCompaniesPerPage] = useState(30);

  const [parameters, setParameters] = useState();

  useEffect(() => {
    setNetAssetBeginOfYear(result.NetAssetBeginOfYear);
    setNetAssetEndOfYear(result.NetAssetEndOfYear);
    const submitBtnSearch = document.getElementById("submit-searh-btn");
    const addbtn1 = document.getElementById("state-btn");
    const addbtn2 = document.getElementById("city-btn");

    if (submitBtnSearch != null && addbtn1 && addbtn2) {
      if (flag === 1) {
        addbtn1.disabled = true;
        addbtn1.innerHTML = "Loading...";
        addbtn2.disabled = true;
        addbtn2.innerHTML = "Loading...";
      } else {
        submitBtnSearch.disabled = false;
        addbtn1.disabled = false;
        addbtn2.disabled = false;
        addbtn1.innerHTML = "Add";
        addbtn2.innerHTML = "Add";
      }
      if (stateInput.length < 1 || !selectedYear) {
        submitBtnSearch.disabled = true;
        submitBtnSearch.innerHTML = "Select State";
      } else if (flag === 1) {
        submitBtnSearch.disabled = true;
        submitBtnSearch.innerHTML = "Loading";
      } else {
        submitBtnSearch.disabled = false;
        submitBtnSearch.innerHTML = "Search";
      }
    }

    if (undefined !== NetAssetBeginOfYear) {
      setFlag(0);
    }
    if (basicFlag === true) {
      setSelectedYear(2018);
      document.getElementById("business-code").value = "";
      document.getElementById("radio-1").checked = true;
    }
    if (stateInput.length > 0) {
      addbtn1.disabled = true;
      document.getElementById("stateHelp").innerHTML =
        "To add another State remove the selected one";
    } else {
      document.getElementById("stateHelp").innerHTML =
        "Enter the states you want to visualize";
    }
  });

  const onYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // ADD AND REMOVE  STATES
  const addState = async (e) => {
    e.preventDefault();
    const addStateBtn = document.getElementById("state-btn");
    addStateBtn.disabled = true;
    addStateBtn.innerHTML = "Loading";
    const allowedStates = functions.commonFunction();
    const allowedBasicStates = functions.commonFunctionBasics();
    const stateField = document.getElementById("stateInput").value;
    const parts = stateField.split(" - ");
    const newCities = await filterFunction.cityFunction(parts[1]);
    if (
      allowedStates.includes(stateField) ||
      allowedBasicStates.includes(stateField)
    ) {
      addStateBtn.disabled = false;
      addStateBtn.innerHTML = "Add";
      setCities([...cities, ...newCities]);
      setStateAbbriviation([...stateAbbriviation, parts[1]]);
      setStateInput([...stateInput, stateField]);
      document.getElementById("stateHelp").innerHTML =
        "Enter the states you want to visualize";
      document.getElementById("stateInput").value = "";
    } else {
      addStateBtn.disabled = false;
      addStateBtn.innerHTML = "Add";
      document.getElementById("stateHelp").innerHTML =
        "PICK CORRECT STATE VALUE";
    }
  };

  const removeState = async (e) => {
    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    const parts = value.split(" - ");
    const reducedCities = await filterFunction.cityReducer(value, stateInput);
    setCities(reducedCities);
    setStateInput(stateInput.filter((state) => state !== value));
    setStateAbbriviation(
      stateAbbriviation.filter((state) => state !== parts[1])
    );
    setInputedCities([]);
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
  const addCity = (e) => {
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

  const removeCity = async (e) => {
    const target = e.target;
    const value = target.parentNode.getAttribute("value");
    setInputedCities(inputedCities.filter((city) => city !== value));
  };

  //***********SUBMIT SEARCH********* */
  const searchBtn = async (e) => {
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

    const businessCodeIndustry = document.getElementById("business-code").value;
    let businessCode = "";
    if (businessCodeIndustry) {
      businessCode = RightFiltersFunction.findCode(businessCodeIndustry)
        .BusinessCode;
    }
    const benefitType = document.getElementById("benefitType").options[
      document.getElementById("benefitType").selectedIndex
    ].value;

    const benefitSymbol = document.getElementById("benefit-symbol").options[
      document.getElementById("benefit-symbol").selectedIndex
    ].value;

    const planEntity = document.getElementById("planEntity").options[
      document.getElementById("planEntity").selectedIndex
    ].value;

    const dfeoption = document.getElementById("dfeoptions").options[
      document.getElementById("dfeoptions").selectedIndex
    ].value;
    setParameters({
      selectedYear,
      stateAbbriviation,
      inputedCities,
      maxIncome,
      minIncome,
      minParticipants,
      maxParticipants,
      businessCode,
      benefitType,
      benefitSymbol,
      planEntity,
      dfeoption,
    });
    const data = await SearchFunction(
      selectedYear,
      stateAbbriviation,
      inputedCities,
      maxIncome,
      minIncome,
      minParticipants,
      maxParticipants,
      businessCode,
      benefitType,
      benefitSymbol,
      planEntity,
      dfeoption
    );

    setResult(data);
    setCompanies(data.Companies);
  };

  //***********SORT BY**************
  const sortByIncome = () => {
    let arr = [];
    if (sorted === 0) {
      setSorted(1);
      arr = [...companies].sort((a, b) => (a.NetIncome > b.NetIncome ? -1 : 1));
    } else {
      setSorted(0);
      arr = [...companies].sort((a, b) => (a.NetIncome > b.NetIncome ? 1 : -1));
    }
    setCompanies(arr);
  };
  const sortByParticipants = () => {
    let arr = [];
    if (sortedPart === 0) {
      setSortedPart(1);
      arr = [...companies].sort((a, b) =>
        a.Participants > b.Participants ? -1 : 1
      );
    } else {
      setSortedPart(0);
      arr = [...companies].sort((a, b) =>
        a.Participants > b.Participants ? 1 : -1
      );
    }

    setCompanies(arr);
  };
  const sortByName = () => {
    let arr = [];
    if (sortedAlphabetic === 0) {
      setSortedAlphabetic(1);
      arr = [...companies].sort((a, b) => (a.Name > b.Name ? 1 : -1));
    } else {
      setSortedAlphabetic(0);
      arr = [...companies].sort((a, b) => (a.Name > b.Name ? -1 : 1));
    }

    setCompanies(arr);
  };

  //****PAGGINATION*********** */
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompany = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const CompaniesResult = (array) => {
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
      <Magellan activeStep={1} active={"filters"} />
      <div className="filter-top-main">
        <div className="required-filters">
          <div className="state-input-fields">
            <form onSubmit={searchBtn} id="submit-form">
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
                  <small id="stateHelp" className="form-text text-muted">
                    Enter the states you want to visualize
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
              <div className="radio-container">
                {basicFlag ? (
                  <div className="radio-group">
                    <input
                      id="radio-1"
                      name="radio"
                      type="radio"
                      value="2018"
                      onChange={onYearChange}
                    />
                    <label className="filter-year-label" htmlFor="radio-1">
                      2018
                    </label>
                  </div>
                ) : (
                  <div className="radio-group">
                    <input
                      id="radio-4"
                      name="radio"
                      type="radio"
                      value="2015"
                      onChange={onYearChange}
                    />
                    <label className="filter-year-label" htmlFor="radio-4">
                      2015
                    </label>
                    <input
                      id="radio-3"
                      name="radio"
                      type="radio"
                      value="2016"
                      onChange={onYearChange}
                    />
                    <label className="filter-year-label" htmlFor="radio-3">
                      2016
                    </label>
                    <input
                      id="radio-2"
                      name="radio"
                      type="radio"
                      value="2017"
                      onChange={onYearChange}
                    />
                    <label className="filter-year-label" htmlFor="radio-2">
                      2017
                    </label>
                    <input
                      id="radio-1-full"
                      name="radio"
                      type="radio"
                      value="2018"
                      onChange={onYearChange}
                      defaultChecked
                    />
                    <label className="filter-year-label" htmlFor="radio-1-full">
                      2018
                    </label>
                  </div>
                )}
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
                  <small id="cityHelp" className="form-text text-muted">
                    Enter the city you want to visualize
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
            </form>

            {/* DATALISTS */}
            <datalist id="state-dataList">
              {functions.dataListStates(stateInput)}
              {functions.dataListBasicStates()}
            </datalist>
            <datalist id="cities-dataList">
              {functions.dataListCities(cities)}
            </datalist>
          </div>
        </div>
        {flag === 1 ? (
          <Loader />
        ) : searches > 0 ? (
          <MiddleFilterCHARTS result={result} />
        ) : (
          <div className="filter-required-selection-div">
            <img
              className="filter-required-logo"
              src={require("../../styles/images/Wealth_Analytica.png")}
            />
          </div>
        )}
        <RightFilters flag={basicFlag} />
      </div>
      <div className="filter-main-search-btn">
        <button
          className="filter-submit-btn"
          id="submit-searh-btn"
          type="submit"
          onClick={searchBtn}
        >
          Search
        </button>
      </div>
      <SummaryTable
        param={parameters}
        companies={companies}
        resultCompanies={result.Companies}
        result={result.FilterProfile}
        setSearched={(searchedCompanies) => {
          setCompanies(searchedCompanies);
        }}
      />

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
                <th>Contact</th>
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
                <th>Save</th>
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
