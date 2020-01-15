import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/onePager.scss";
import OnePagerCharts from "./OnePagerFunctions/OnePagerCharts";
import Loader from "./dashboardFunctions/loader";
import OnePagerTables from "./OnePagerFunctions/OnePagerTables";

const OnePager = props => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetOnePager?userGuid=${sessionStorage.getItem(
      "Guid"
    )}&planID=${props.match.params.planID}&isLarge=${
      props.match.params.isLarge
    }&minYear=2016&maxYear=2018`;
    console.log(url);
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        setResults(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="onePager-header1">{results.PlanName}</h1>
      </section>
      {results.PlanName ? (
        <div>
          <OnePagerCharts data={results.Statistics} />

          <OnePagerTables data={results.Statistics} />
        </div>
      ) : (
        <div className="onepager-loader-style">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default OnePager;
