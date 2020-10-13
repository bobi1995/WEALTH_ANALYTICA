import React, { useState, useEffect } from "react";
import apiAddress from "../../global/endpointAddress";
import { lastYear } from "../../global/Years";
import { makeStyles, Box, Typography } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Datanavbar from "./DataNavbar";
import Section from "./Diagnostic/Sections";
import EmailSection from "./Diagnostic/EmailSection";
const useStyles = makeStyles((theme) => ({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
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
          <EmailSection data={results} />
          <Box>
            {/******** PLAN ASSETS */}
            <Section
              info={[
                {
                  name: "Performance",
                  data: [
                    { field: "Return Of Investment", value: results.D1 },
                    { field: "Return Of Assets", value: results.D2 },
                  ],
                },
              ]}
              mainHeading="Plan Assets"
            />

            {/******** PLAN DESIGN */}
            <Section
              info={[
                {
                  name: "Fiduciary Exposure",
                  data: [
                    {
                      field: "QDIA with Fiduciary Exposure",
                      value: results.D63,
                    },
                    { field: "QDIA Feature", value: results.D64 },
                  ],
                },
                {
                  name: "Talent Rentention",
                  data: [
                    { field: "Controlled Group", value: results.D65 },
                    { field: "Life Insurance", value: results.D66 },
                    { field: "ESOP", value: results.D67 },
                  ],
                },

                {
                  name: "Retirement Readiness",
                  data: [
                    { field: "403B", value: results.D68 },
                    {
                      field: "Plan Usage (Auto-enrollment)",
                      value: results.D69,
                    },
                    {
                      field: "Retirement Readiness with QDIA",
                      value: results.D70,
                    },

                    { field: "Employer Match Program", value: results.D71 },

                    { field: "Directed Brokerage", value: results.D72 },

                    { field: "Equity Interest", value: results.D73 },
                    { field: "Equity Interest Compliance", value: results.D74 },
                  ],
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
