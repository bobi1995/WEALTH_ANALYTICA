import React, { useState } from "react";

const RightFilters = () => {
  return (
    <div className="required-filters">
      {/**PLAN AND BUSINESS CODE */}
      <div className="filter-planAndBusiness">
        {/**PLAN */}
        <div className="filter-select-company-type">
          <label className="filter-company-label">Company Type:</label>
          <select className="filter-select-form-control" id="companyType">
            <option defaultValue="0">All</option>
            <option value="true">Small</option>
            <option value="false">Large</option>
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
          <select className="filter-select-form-control" id="benefitType">
            <option defaultValue="0">All</option>
            <option value="1">Define Benefit Pension</option>
            <option value="2">Defined Contribution Pension</option>
            <option value="4">Welfare</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RightFilters;
