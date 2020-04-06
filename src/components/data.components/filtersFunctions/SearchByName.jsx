import React from "react";

export default props => {
  const searchCompany = e => {
    e.preventDefault(e);
    const searchString = e.target.value.toUpperCase();
    const res = props.result.filter(el => {
      return el.Name.toUpperCase().includes(searchString);
    });
    props.searchedCompanies(res);
  };

  return (
    <div>
      {/**BUSINESS CODE */}
      <div className="searchName-div">
        <label className="searchName-label">Plan Name:</label>
        <input
          type="text"
          className="search-name-control"
          placeholder="Search By Name"
          id="search-name"
          autoComplete="off"
          onChange={searchCompany}
        ></input>
      </div>
    </div>
  );
};
