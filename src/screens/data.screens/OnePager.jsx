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
import { Link, Box, makeStyles, Paper, Typography } from "@material-ui/core";
import commonExtract from "./commonFunctions/commonExtracts";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StarIcon from "@material-ui/icons/Star";
import { primaryBlue } from "../../global/Colors";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { addBookmark, removeBookmark } from "./OnePagerFunctions/Bookmark";
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
  main2: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 5,
    left: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
    display: "flex",
    justifyContent: "space-around",
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
          Authorization: "Basic " + localStorage.getItem("Token"),
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
      <Paper className={classes.main2} elevation={21}>
        <Typography
          style={{
            fontSize: 22,
            color: primaryBlue,
            fontFamily: "Baskervville",
            fontWeight: 300,
          }}
        >
          {results.BookmarkUserGuid
            ? results.BookmarkUserGuid === localStorage.getItem("Guid")
              ? "REMOVE"
              : "CONNECTED"
            : "BOOKMARK"}
        </Typography>
        {results.BookmarkUserGuid ? (
          <StarIcon
            fontSize="large"
            onClick={
              results.BookmarkUserGuid === localStorage.getItem("Guid")
                ? () => removeBookmark(props.match.params.CompanyID)
                : null
            }
            style={
              results.BookmarkUserGuid === localStorage.getItem("Guid")
                ? { color: "#e6e600" }
                : { color: "red" }
            }
          />
        ) : (
          <StarBorderIcon
            fontSize="large"
            onClick={() => addBookmark(props.match.params.CompanyID)}
          />
        )}
      </Paper>
      <Box className={classes.main}>
        <Link
          disabled={available ? false : true}
          href={`/planprofile/${props.match.params.CompanyID}`}
          className={classes.contactButton}
        >
          <ArrowForwardIcon /> PLAN DESIGN
        </Link>
      </Box>
      <EmailPopUp
        contact={results.Contacts}
        companyID={props.match.params.CompanyID}
        busy={
          results.BookmarkUserGuid &&
          results.BookmarkUserGuid !== localStorage.getItem("Guid")
            ? true
            : false
        }
      />
    </div>
  );
};

export default OnePager;
