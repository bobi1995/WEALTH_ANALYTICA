import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import Loader from "./dashboardFunctions/loader";
import Company from "./filtersFunctions/company";
import Pagination from "./filtersFunctions/pagination";
import apiAddress from "../../global/endpointAddress";

const SavedFilters = (props) => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [sortType, setSortType] = useState("");
  /****************PAGINATION********* */
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage, setCompaniesPerPage] = useState(30);

  /****PAGGINATION*********** */
  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompany = data.slice(indexOfFirstCompany, indexOfLastCompany);

  /********************SORTING*********** */
  const [sorted, setSorted] = useState(0);
  const [sortedPart, setSortedPart] = useState(0);
  const [sortedAlphabetic, setSortedAlphabetic] = useState(0);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const GetFilterNames = () => {
    const url = `${apiAddress}/api/Users/GetUserFilters`;
    const filterOptions = document.getElementById("filter-option");

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data) {
          setResults(res.data);

          res.data.map((element, index) => {
            const option = document.createElement("option");
            option.id = element.ID;
            option.text = element.FilterName;
            option.url = element.FilterParameters;
            filterOptions.add(option, null);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetFilterNames();
  }, []);

  const selectFilter = (clicked, ordered = false) => {
    setFlag(1);
    const selectedFilter = document.getElementById("filter-option").options[
      document.getElementById("filter-option").selectedIndex
    ].url;
    axios
      .get(selectedFilter, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        if (sorted === 0 && clicked === "income") {
          if (!ordered) {
            console.log("here weeeeee");
            setSorted(1);
          }
          const arr = [...result.data.Companies].sort((a, b) =>
            a.NetIncome > b.NetIncome ? -1 : 1
          );

          setData(arr);
          setFlag(0);
        } else if (sorted === 1 && clicked === "income") {
          if (!ordered) {
            setSorted(0);
          }
          const arr = [...result.data.Companies].sort((a, b) =>
            a.NetIncome > b.NetIncome ? 1 : -1
          );

          setData(arr);
          setFlag(0);
        } else if (sortedPart === 0 && clicked === "participants") {
          setSortedPart(1);
          const arr = [...result.data.Companies].sort((a, b) =>
            a.Participants > b.Participants ? -1 : 1
          );
          setData(arr);
          setFlag(0);
        } else if (sortedPart === 1 && clicked === "participants") {
          setSortedPart(0);
          const arr = [...result.data.Companies].sort((a, b) =>
            a.Participants > b.Participants ? 1 : -1
          );
          setData(arr);
          setFlag(0);
        } else if (sortedAlphabetic === 0 && clicked === "alphabetic") {
          setSortedAlphabetic(1);
          const arr = [...result.data.Companies].sort((a, b) =>
            a.Name > b.Name ? -1 : 1
          );
          setData(arr);
          setFlag(0);
        } else if (sortedAlphabetic === 1 && clicked === "alphabetic") {
          setSortedAlphabetic(0);
          const arr = [...result.data.Companies].sort((a, b) =>
            a.Name > b.Name ? 1 : -1
          );
          setData(arr);
          setFlag(0);
        } else {
          setData(result.data.Companies);
          setFlag(0);
        }
      })
      .catch((e) => {
        console.log(e);
        alert("For some reason we could not find the desired results.");
        window.location.reload();
      });
  };

  const deleteFilter = () => {
    const deletionId = document.getElementById("filter-option").options[
      document.getElementById("filter-option").selectedIndex
    ].id;
    axios
      .delete(`${apiAddress}/api/Users/DeleteUserFilter?id=${deletionId}`, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert("First select Filter to be deleted.");
        window.location.reload();
      });
  };

  const CompaniesResult = (array) => {
    if (array !== undefined) {
      return array.map((item, index) => {
        return (
          <Company
            results={data}
            singleCompany={item}
            key={index}
            book={(type) => selectFilter(type, true)}
            sortedType={sortType}
          />
        );
      });
    }
  };

  //***********SORT BY**************
  const sortByIncome = () => {
    setSortType("income");
    setSortedPart(0);
    setSortedAlphabetic(0);
    selectFilter("income");
  };

  const sortByParticipants = () => {
    sortType = "participants";
    setSorted(0);
    setSortedAlphabetic(0);
    selectFilter(sortType);
  };

  const sortByName = () => {
    sortType = "alphabetic";
    setSorted(0);
    setSortedPart(0);
    selectFilter(sortType);
  };
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Saved Filters</h1>
      </section>
      <div className="filter-saved-filters">
        <div className="saved-filters-selectbox">
          <label className="filter-company-label">Select Filter:</label>
          <select
            className="filter-select-form-control"
            id="filter-option"
            onChange={selectFilter}
          >
            <option defaultValue="0">All</option>
          </select>
        </div>
      </div>

      {flag === 1 ? (
        <div className="plan-businessInfo">
          <Loader />
        </div>
      ) : data.length > 0 ? (
        <div className="plan-businessInfo">
          <div className="filter-main-saveFilter-btn">
            <p>
              <button className="savedFilterBtn" onClick={deleteFilter}>
                Delete Filter
              </button>
            </p>
          </div>
          <div className="table-container">
            <h1 className="plan-h1">Filter Results</h1>
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th
                    className="filter-table-header-clickable"
                    onClick={sortByName}
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
              totalCompanies={data.length}
              paginate={paginate}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SavedFilters;
