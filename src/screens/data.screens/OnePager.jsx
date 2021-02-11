import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/onePager.scss";
import Loader from "../../components/Loader/Loader";
import OnePagerBottomTables from "./OnePagerFunctions/OnePagerBottomTables";
import OnePagerRightPane from "./OnePagerFunctions/OnePagerRightPane";
import EmailPopUp from "../../components/EmailPopUp";
import GoogleMap from "../../components/GoogleMap";
import OnePagerPensionPlan from "./OnePagerFunctions/OnePagerPensionPlan";
import OnePagerAccountants from "./OnePagerFunctions/OnePagerAccountants";
import commonFunctions from "../../components/commonFunctions";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import OnePagerTopStatistics from "./OnePagerFunctions/OnePagerTopStatistics";
import { minYear, lastYear } from "../../global/Years";
import AlerBox from "../../components/alertBox";
import { Link, Box, makeStyles } from "@material-ui/core";
import commonExtract from "./commonFunctions/commonExtracts";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles({
  main: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 45,
    right: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
  },
  contactButton: {
    backgroundColor: "#3F51B5",
    borderRadius: "20px",
    padding: "8px 15px",
    cursor: "pointer",
    color: "white",
    maxWidth: "220px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#828fd4",
      color: "white",
    },
  },
});

const OnePager = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  let available = false;

  if (results) {
    commonExtract.extractStates().forEach((el) => {
      if (results.State === el.State && el.Type === 2) {
        available = true;
      }
    });
  }

  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetOnePager?CompanyID=${props.match.params.CompanyID}&minYear=${minYear}&maxYear=${lastYear}`;
  }
  useEffect(
    (props) => {
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
              setAlertMessage("Maximum request for OnePager reached.");
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

          <GoogleMap
            address={results.Address}
            city={results.City}
            location={results.Location}
            companyID={props.match.params.CompanyID}
          />
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

      <Box className={classes.main}>
        <Link
          disabled={available ? false : true}
          href={`/planprofile/${props.match.params.CompanyID}`}
          target="_blank"
          className={classes.contactButton}
        >
          <ArrowForwardIcon /> PLAN DESIGN
        </Link>
      </Box>
      <EmailPopUp contact={results.Contacts} />
    </div>
  );
};

export default OnePager;
