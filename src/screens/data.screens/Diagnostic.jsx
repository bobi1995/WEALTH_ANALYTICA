import React, { useState, useEffect } from "react";
import apiAddress from "../../global/endpointAddress";
import { lastYear } from "../../global/Years";
import { makeStyles, Box, Typography } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Section from "./Diagnostic/Sections";
import Score from "./Diagnostic/Score";
import Indicators from "./Diagnostic/Indicators";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
    marginTop: "1%",
  },
  errorStyle: {
    color: "#388fc2",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Slabo,serif",
    marginTop: "5%",
  },
}));

const Diagnostic = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState();
  const [loadingFlag, setLoadingFlag] = useState(true);
  const [err, setErr] = useState("");
  let url = "";
  if (props.companyID) {
    url = `${apiAddress}/api/SmallCompanies/GetCompanyDiagnostics?CompanyID=${props.companyID}&year=${lastYear}`;
  }
  useEffect(() => {
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
        setLoadingFlag(false);
      })
      .catch((err) => {
        setLoadingFlag(false);
        setErr(err.response.data);
      });
  }, [url]);
  return (
    <Box>
      {loadingFlag ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "15%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading....Please wait
          </p>
        </div>
      ) : !err && results ? (
        <Box>
          <Box>
            <Typography className={classes.heading}>
              {results.SponsorName}
            </Typography>
          </Box>
          <Score data={results} />
          <Box>
            {/******** PLAN DESIGN */}
            <Section info={results.Metrics} mainHeading="Observations" />
          </Box>
          <Box className={classes.indicatorsBox}>
            <Indicators info={results.Metrics} />
          </Box>
        </Box>
      ) : err === "Company heatmap data not found!" ? (
        <Box className={classes.errorStyle}>
          No data available for this Sponsor
        </Box>
      ) : (
        <Box className={classes.errorStyle}>{err}</Box>
      )}
    </Box>
  );
};

export default Diagnostic;
