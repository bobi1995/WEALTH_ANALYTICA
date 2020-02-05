import React, { useState } from "react";
import RightFilterFunction from "./RightFilterFunctions";

const RightFilters = () => {
  const [symbols, setSymbols] = useState([]);
  return (
    <div className="required-filters">
      {/**PLAN AND BUSINESS CODE */}
      <div className="filter-planAndBusiness">
        {/**PLAN */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Company Type:</label>
          <select
            className="filter-select-form-control"
            id="companyType"
            onChange={RightFilterFunction.companySelected}
          >
            <option defaultValue="0">All</option>
            <option value="true">Small</option>
            <option value="false">Large</option>
          </select>
        </div>
        {/**PLAN ENTITY*/}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Plan Entity:</label>
          <select
            className="filter-select-form-control"
            id="planEntity"
            onChange={RightFilterFunction.planEntitySelected}
          >
            <option defaultValue="0">All</option>
            <option value="1">Single-employer</option>
            <option value="2">One-participant plan</option>
            <option value="3">Multi-employer plan</option>
            <option value="4">Foreign plan</option>
            <option value="3">Multiemployer</option>
            <option value="4">DFE</option>
          </select>
        </div>
        {/**DFE OPTIONS*/}
        <div className="filter-select-company-type" id="dfe-options">
          <label className="filter-company-label">Entity Letter:</label>
          <select className="filter-select-form-control" id="dfeoptions">
            <option defaultValue="0">All</option>
            <option defaultValue="C">C</option>
            <option value="E">E</option>
            <option value="G">G</option>
            <option value="M">M</option>
            <option value="P">P</option>
          </select>
        </div>
        {/**BUSINESS CODE */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Business Code:</label>
          <input
            type="number"
            className="filter-select-form-control"
            placeholder="Enter Business Code"
            id="business-code"
          ></input>
        </div>

        {/**PLAN BENEFIT TYPE*/}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Benefit Type:</label>
          <select
            className="filter-select-form-control"
            id="benefitType"
            onChange={RightFilterFunction.benefitTypeSelected}
          >
            <option defaultValue="0">All</option>
            <option value="1">Define Benefit Pension</option>
            <option value="2">Defined Contribution Pension</option>
            <option value="4">Welfare</option>
          </select>
        </div>

        {/**SYMBOLS*/}
        <div className="filter-select-company-type">
          <label
            id="filters-symbol-label"
            className="filter-company-label"
            style={{ textDecoration: "line-through" }}
          >
            Symbol:
          </label>
          <select
            className="filter-select-form-control"
            id="benefit-symbol"
            disabled
          >
            <option defaultValue="0">All</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RightFilters;
