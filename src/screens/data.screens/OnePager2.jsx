import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import Loader from "../../components/plainCicularLoader";
import GoogleMap from "../../components/GoogleMap";
import commonFunctions from "../../components/commonFunctions";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import { minYear, lastYear, allYears } from "../../global/Years";
import { primaryBlue } from "../../global/Colors";
import AlerBox from "../../components/alertBox";
import {
  Box,
  Typography,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import "../../styles/dataPages/onePager.scss";
import DataExtract from "./OnePagerFunctions/OnePagerDataExtract";
import { Bar, Line } from "react-chartjs-2";
import numeral from "numeral";
import dataReducer from "../../components/dataReducer";

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
  let options = [];
  let totalAssetsReduced = [];
  const divideBy = (array) => {
    const max = Math.max(...array);
    const parts = max.toString().split(".");
    const lengthOfAv = parts[0].toString().length;
    if (lengthOfAv > 12) {
      return 100000000000;
    } else if (lengthOfAv <= 12 && lengthOfAv > 9) {
      return 1000000000;
    } else if (lengthOfAv <= 9 && lengthOfAv > 6) {
      return 1000000;
    } else if (lengthOfAv <= 6 && lengthOfAv > 3) {
      return 1000;
    }
  };
  if (results.Statistics) {
    const years = DataExtract.yearsExtract(results.Statistics);
    const totalAssets = DataExtract.totalAssetsExtract(results.Statistics);
    const netAssets = DataExtract.netAssetsExtract(results.Statistics);
    const allArrayAsset = totalAssets.concat(netAssets);

    const totalAssetsReduced = totalAssets.map((element) => {
      return element / divideBy(allArrayAsset);
    });
    const netAssetsReduced = netAssets.map((element) => {
      return element / divideBy(allArrayAsset);
    });

    const biggestTotalAsset = Math.max(...totalAssets);
    const biggestNetAsstes = Math.max(...netAssets);
    options = dataReducer.optionReturn([biggestTotalAsset, biggestNetAsstes]);

    data = {
      labels: years,
      datasets: [
        {
          label: "Total Assets",
          backgroundColor: "rgba(147,112,219)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(221,160,221)",
          hoverBorderColor: "rgba(147,112,219)",
          data: totalAssetsReduced,
          stack: 1,
        },
        {
          label: "Net Assets",
          backgroundColor: "rgba(32,178,170)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(175,238,238)",
          hoverBorderColor: "rgba(32,178,170)",
          data: netAssetsReduced,
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
        <Box style={{ display: "flex", width: "100%" }}>
          <Box
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <Box style={{ width: "30%" }}>
              <Bar data={data} options={options} />
              <TableContainer component={Paper} className={classes.table}>
                <Table stickyHeader size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      {allYears.map((el) => (
                        <TableCell
                          style={{ textAlign: "center" }}
                          key={el}
                          className={classes.tableHeader}
                        >
                          {el}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {totalAssetsReduced.map((el, ind) => {
                        console.log(el);
                        return (
                          <TableCell style={{ textAlign: "center" }} key={ind}>
                            {`$${numeral(el).format("0,00")}`}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box style={{ width: "30%" }}>
              <Bar data={data} options={options} />
            </Box>
            .
            <Box style={{ width: "30%" }}>
              <Bar data={data} options={options} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OnePager2;
