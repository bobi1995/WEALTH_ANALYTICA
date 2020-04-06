import React from "react";
import RightFilterFunction from "./RightFilterFunctions";
import numeral from "numeral";

const RightFilters = () => {
  return (
    <div className="required-filters">
      {/**PLAN AND BUSINESS CODE */}
      <div className="filter-planAndBusiness">
        {/**MAX ASSETS */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Max Assets:</label>
          <input
            className="filter-select-form-control"
            id="maxIncome"
            placeholder="Enter Asset"
            autoComplete="off"
            min="0"
            max="99999999999"
            onChange={e => {
              e.target.value = numeral(e.target.value).format("0,0");
            }}
          />
        </div>
        {/**MIN ASSETS */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Min Assets:</label>
          <input
            className="filter-select-form-control"
            id="minIncome"
            placeholder="Enter Asset"
            autoComplete="off"
            min="0"
            max="99999999999"
            onChange={e => {
              e.target.value = numeral(e.target.value).format("0,0");
            }}
          />
        </div>

        {/**MAX PARTICIPANNTS */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Max participants:</label>
          <input
            className="filter-select-form-control"
            id="maxParticipants"
            placeholder="Enter participants"
            autoComplete="off"
            min="0"
            max="99999999999"
            onChange={e => {
              e.target.value = numeral(e.target.value).format("0,0");
            }}
          />
        </div>

        {/**MIN PARTICIPANNTS */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Min participants:</label>
          <input
            className="filter-select-form-control"
            id="minParticipants"
            placeholder="Enter participants"
            autoComplete="off"
            min="0"
            max="99999999999"
            onChange={e => {
              e.target.value = numeral(e.target.value).format("0,0");
            }}
          />
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
            type="text"
            className="filter-select-form-control"
            placeholder="Enter Business Code"
            id="business-code"
            list="code-dataList"
            autoComplete="off"
          ></input>
        </div>
        {/* DATALISTS CODES*/}
        <datalist id="code-dataList">
          {RightFilterFunction.codesList()}
        </datalist>
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
