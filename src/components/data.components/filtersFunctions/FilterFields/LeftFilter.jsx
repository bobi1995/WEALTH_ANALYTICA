import React, { useState, useEffect } from "react";

const LeftFilter = () => {
  const [cities, setCities] = useState([]);
  const [inputedCities, setInputedCities] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2018);

  return (
    <div className="required-filters">
      <div className="state-input-fields">
        <form id="submit-form">
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
              >
                Add
              </button>
            </div>
            <div className="filter-list-holder">
              <div className="addState-innerDiv filter-addState">
                <ul id="notes-004" className="notes-list"></ul>
              </div>
            </div>
          </div>
          {/* RADIO BUTTONS */}
          <div className="radio-container">
            <div className="radio-group">
              <input id="radio-4" name="radio" type="radio" value="2015" />
              <label className="filter-year-label" htmlFor="radio-4">
                2015
              </label>
              <input id="radio-3" name="radio" type="radio" value="2016" />
              <label className="filter-year-label" htmlFor="radio-3">
                2016
              </label>
              <input id="radio-2" name="radio" type="radio" value="2017" />
              <label className="filter-year-label" htmlFor="radio-2">
                2017
              </label>
              <input
                id="radio-1-full"
                name="radio"
                type="radio"
                value="2018"
                defaultChecked
              />
              <label className="filter-year-label" htmlFor="radio-1-full">
                2018
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
              <small id="cityHelp" className="form-text text-muted">
                Enter the city you want to visualize
              </small>
              <button
                type="submit"
                className="btn btn-primary filter-btn"
                id="city-btn"
              >
                Add
              </button>
            </div>
            <div className="filter-list-holder">
              <div className="addState-innerDiv filter-addState">
                <ul id="notes-city" className="notes-list"></ul>
              </div>
            </div>
          </div>
        </form>

        {/* DATALISTS */}
        <datalist id="state-dataList"></datalist>
        <datalist id="cities-dataList"></datalist>
      </div>
    </div>
  );
};
export default LeftFilter;
