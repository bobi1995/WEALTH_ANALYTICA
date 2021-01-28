import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import Loader from "../../components/plainCicularLoader";
import GoogleMap from "../../components/GoogleMap";
import commonFunctions from "../../components/commonFunctions";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import { minYear, lastYear } from "../../global/Years";
import { primaryBlue } from "../../global/Colors";
import AlerBox from "../../components/alertBox";
import { Box, Typography, makeStyles } from "@material-ui/core";
import "../../styles/dataPages/onePager.scss";
import DataExtract from "./OnePagerFunctions/OnePagerDataExtract";
import { Bar, Line } from "react-chartjs-2";

const useStyles = makeStyles({
  limitSign: {
    color: primaryBlue,
    textAlign: "center",
    marginTop: "5%",
  },
});

const OnePager2 = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(false);
  const [loader, setLoader] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetOnePager?CompanyID=${props.match.params.CompanyID}&minYear=${minYear}&maxYear=${lastYear}`;
  }
  useEffect(
    (props) => {
      setLoader(true);
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
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);

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
  let data;
  let totalAssets = [];
  if (results.Statistics) {
    const years = DataExtract.yearsExtract(results.Statistics);
    const totalAssets = DataExtract.totalAssetsExtract(results.Statistics);
    const netAssets = DataExtract.netAssetsExtract(results.Statistics);

    data = {
      labels: years,
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(147,112,219)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: totalAssets,
          stack: 1,
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: netAssets,
          stack: 2,
        },
      ],
    };
  }

  console.log(results.Statistics);
  return (
    <Box>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="onePager-header1">{results.PlanName}</h1>
      </section>
      <Magellan activeStep={3} />
      {limit ? (
        <Box>
          <Typography variant="h3" component="h3" className={classes.limitSign}>
            Limit of 30 One Pager usages per month has been reached or you do
            not have subscription for this state anymore.
          </Typography>
        </Box>
      ) : loader ? (
        <Loader />
      ) : (
        <Box>
          <Bar data={data} />
        </Box>
      )}
    </Box>
  );
};

export default OnePager2;
