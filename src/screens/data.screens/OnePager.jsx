import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/onePager.scss";
import Loader from "../../components/Loader/Loader";
import OnePagerBottomTables from "./OnePagerFunctions/OnePagerBottomTables";
import OnePagerRightPane from "./OnePagerFunctions/OnePagerRightPane";
import OnePagerMail from "./OnePagerFunctions/OnePagerMail";
import OnePagerMap from "./OnePagerFunctions/OnePagerMap";
import OnePagerPensionPlan from "./OnePagerFunctions/OnePagerPensionPlan";
import OnePagerLogo from "./OnePagerFunctions/OnePagerLogo";
import OnePagerAccountants from "./OnePagerFunctions/OnePagerAccountants";
import commonFunctions from "../../components/commonFunctions";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import OnePagerTopStatistics from "./OnePagerFunctions/OnePagerTopStatistics";
import { minYear, lastYear } from "../../global/Years";
import AlerBox from "../../components/alertBox";

const OnePager = (props) => {
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetOnePager?CompanyID=${props.match.params.CompanyID}&minYear=${minYear}&maxYear=${lastYear}`;
  }
  useEffect(
    (props) => {
      console.log(url);

      axios({
        method: "get",
        url: url,
        timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          setResults(res.data);
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.status === 400) {
              setLimit(true);
            } else {
              setAlertMessage(
                "For some reason we could not find the desired results."
              );
            }
          } else
            setAlertMessage(
              "For some reason we could not find the desired results."
            );
        });
    },
    [url]
  );

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="onePager-header1">{results.PlanName}</h1>
      </section>
      <Magellan activeStep={3} />
      {limit === true ? (
        <div>
          <h1
            className="onepager-bottomtables-h1"
            style={{ width: "70%", margin: "auto" }}
          >
            Limit of 30 One Pager usages per month has been reached or you do
            not have subscription for this state anymore.
          </h1>
        </div>
      ) : results.PlanName ? (
        <div className="usermanagement">
          <OnePagerMail
            data={props.match.params.CompanyID}
            state={results.State}
            contact={results.Contacts}
            site={results.Website}
            administrator={results.AdministratorName}
            phone={results.Phone}
          />
          <OnePagerLogo />

          <div className="plan-businessInfo-2">
            <OnePagerTopStatistics data={results.Statistics} />
            {/* 
            <OnePagerCharts data={results.Statistics} />
            <OnePagerTables data={results.Statistics} /> */}
          </div>
          {commonFunctions
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
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default OnePager;
