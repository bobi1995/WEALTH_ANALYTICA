import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/onePager.scss";
import OnePagerCharts from "./OnePagerFunctions/OnePagerCharts";
import Loader from "./dashboardFunctions/loader";
import OnePagerTables from "./OnePagerFunctions/OnePagerTables";
import OnePagerBottomTables from "./OnePagerFunctions/OnePagerBottomTables";
import OnePagerRightPane from "./OnePagerFunctions/OnePagerRightPane";
import OnePagerTop from "./OnePagerFunctions/OnePagerTop";
import OnePagerMap from "./OnePagerFunctions/OnePagerMap";
import OnePagerPensionPlan from "./OnePagerFunctions/OnePagerPensionPlan";
import OnePagerLogo from "./OnePagerFunctions/OnePagerLogo";
import OnePagerAccountants from "./OnePagerFunctions/OnePagerAccountants";
import dashboardFunctions from "./dashboardFunctions/functions";

const OnePager = (props) => {
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(false);

  let url = "";
  useEffect(() => {
    if (props.match) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetOnePager?CompanyID=${props.match.params.CompanyID}&minYear=2015&maxYear=2018`;
    }
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          setLimit(true);
        } else {
          alert("For some reason we could not find the desired results.");
        }
      });
  }, []);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="onePager-header1">{results.PlanName}</h1>
      </section>
      {limit === true ? (
        <div>
          <h1 className="onepager-bottomtables-h1">
            Limit of 30 One Pager usage per month has been reached.
          </h1>
        </div>
      ) : results.PlanName ? (
        <div>
          <OnePagerTop
            data={props.match.params.CompanyID}
            state={results.State}
          />
          <OnePagerLogo />

          <OnePagerCharts data={results.Statistics} />
          <OnePagerTables data={results.Statistics} />
          {dashboardFunctions
            .commonFunctionShortAbbrBasic()
            .includes(results.State) ? (
            ""
          ) : (
            <OnePagerRightPane data={[results.City, results.BusinessCode]} />
          )}
          <OnePagerBottomTables data={results.Statistics} />
          {results.AccountantFirmNames.length > 0 ||
          results.FiduciaryTrustNames.length > 0 ? (
            <OnePagerAccountants
              accountants={results.AccountantFirmNames}
              trusts={results.FiduciaryTrustNames}
            />
          ) : (
            ""
          )}

          <OnePagerPensionPlan
            types={[
              results.PensionTypes,
              results.WelfareTypes,
              results.PensionPlanSummary,
            ]}
          />
          <OnePagerMap address={results.Address} city={results.City} />
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
