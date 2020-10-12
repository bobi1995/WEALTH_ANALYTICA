import React, { useState, useEffect } from "react";
import apiAddress from "../../global/endpointAddress";
import { lastYear } from "../../global/Years";
import { makeStyles, Box, Typography, Divider } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Datanavbar from "./DataNavbar";
import Tables from "./Diagnostic/Tables";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
  },
  subheading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 27,
  },
  table: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: "1px solid #378FC3",
  },
  tableHeader: { color: "#378FC3", fontWeight: "bold", fontSize: 16 },
  paperStyle: {
    width: "94%",
  },
  tableBox: {
    justifyContent: "center",
    display: "flex",
  },
}));

const Diagnostic = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);

  console.log(results);
  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetCompanyDiagnostics?CompanyID=${props.match.params.CompanyID}&year=${lastYear}`;
  }

  useEffect(
    (props) => {
      setLoadingFlag(true);
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
          console.log(err);
          setLoadingFlag(false);

          alert("For some reason we could not find the desired results.");
        });
    },
    [url]
  );
  return (
    <Box>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Diagnostic</h1>
      </section>
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
      ) : (
        <Box>
          <Box>
            <Typography className={classes.heading}>Company Name</Typography>
          </Box>
          <Box>
            {/**PLAN ASSETS */}
            <Tables
              info={[
                {
                  data: [
                    {
                      Field: "Return Of Investment",
                      Code: "D1",
                      Observation: results.D1,
                    },
                    {
                      Field: "Return Of Assets",
                      Code: "D2",
                      Observation: results.D2,
                    },
                  ],
                  tableHeader: "Performance",
                  subHeading: "Investments",
                },
              ]}
              mainHeading="Plan Assets"
            />

            {/**PLAN DESIGN */}
            <Tables
              info={[
                {
                  data: [
                    {
                      Field: "QDIA with Fiduciary Exposure",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D63,
                    },
                    {
                      Field: "D64 - QDIA Feature",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D64,
                    },
                    {
                      Field: "Controlled Group",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D65,
                    },
                    {
                      Field: "Life Insurance",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D66,
                    },
                    {
                      Field: "ESOP",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D67,
                    },
                  ],
                  subHeading: "Enterprise Exposure",
                  tableHeader: "Fiduciary Exposure & Talent Rentention",
                },

                {
                  data: [
                    {
                      Field: "403B",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D68,
                    },
                    {
                      Field: "Plan Usage (Auto-enrollment)",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D69,
                    },
                    {
                      Field: "Retirement Readiness with QDIA",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D70,
                    },
                    {
                      Field: "Employer Match Program",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D71,
                    },
                    {
                      Field: "Directed Brokerage",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D72,
                    },
                    {
                      Field: "Equity Interest",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D73,
                    },
                    {
                      Field: "Equity Interest Compliance",
                      Description:
                        "Some description here will be very useful and make it look way more beautiful and readable",
                      Observation: results.D74,
                    },
                  ],
                  subHeading: "Retirement Enhancement",
                  tableHeader: "Retirement Readiness",
                },
              ]}
              mainHeading="Plan Design"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Diagnostic;
