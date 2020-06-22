import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import apiAddress from "../../global/endpointAddress";
import SelectFilter from "./SavedFilter/SelectFilter";
import Table from "./filtersFunctions/FilterFields/Table";
import CircularProgress from "@material-ui/core/CircularProgress";

const SavedFilters = (props) => {
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (filter) {
      setFlag(true);
      axios
        .get(filter.FilterParameters, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          setResults(result.data.Companies);
          setFlag(false);
        })
        .catch((e) => {
          console.log(e);
          alert("For some reason we could not find the desired results.");
          window.location.reload();
        });
    }
  }, [filter]);

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

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Saved Filters</h1>
      </section>
      <SelectFilter flag={flag} setFilter={(filter) => setFilter(filter)} />

      {flag ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "5%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading....Please wait
          </p>
        </div>
      ) : (
        <Table data={results ? results : []} setData={setResults} />
      )}
    </div>
  );
};

export default SavedFilters;
