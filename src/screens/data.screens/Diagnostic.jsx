import React, { useState, useEffect } from "react";
import apiAddress from "../../global/endpointAddress";
import { lastYear } from "../../global/Years";
import { makeStyles, Box, Typography } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Datanavbar from "./DataNavbar";
import Section from "./Diagnostic/Sections";
import EmailSection from "./Diagnostic/EmailSection";
import Indicators from "./Diagnostic/Indicators";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
    marginBottom: "3%",
    marginTop: "3%",
  },
  indicatorsBox: {
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
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
  const [results, setResults] = useState([]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [err, setErr] = useState("");
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
          setLoadingFlag(false);

          setErr(err.response.data);
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
      ) : !err ? (
        <Box>
          <Box>
            <Typography className={classes.heading}>
              {results.SponsorName}
            </Typography>
          </Box>
          <EmailSection data={results} />
          <Box>
            {/******** PLAN DESIGN */}
            <Section
              info={[
                {
                  name: "Performance",
                  data: [
                    { field: "Return Of Investment", value: results.D1 },
                    { field: "Return Of Assets", value: results.D2 },
                  ],
                },
                {
                  name: "Fid. Exposure",
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
                {
                  name: "Active Particip.",
                  data: [
                    {
                      field: "Average Active Participants",
                      value: results.D6,
                    },
                    { field: "ActiveParticipants", value: results.D3 },
                    {
                      field: "Participants WithBenefit Account",
                      value: results.D5,
                    },
                  ],
                },
                {
                  name: "Plan Assets",
                  data: [
                    { field: "Average Assets", value: results.D12 },
                    {
                      field: "Average Participant Balance",
                      value: results.D18,
                    },
                    {
                      field: "Separated Vested Participants",
                      value: results.D4,
                    },
                  ],
                },

                {
                  name: "Contributions",
                  data: [
                    { field: "Total Contributions", value: results.D7 },
                    {
                      field: "Contribution Yield",
                      value: results.D11,
                    },
                    {
                      field: "Employee Contributions",
                      value: results.D9,
                    },

                    { field: "Participant Contributions", value: results.D10 },

                    {
                      field: "Total Contributions Participant",
                      value: results.D8,
                    },

                    {
                      field: "Participant Contribution By Participant",
                      value: results.D19,
                    },
                    {
                      field: "Employee Contribution By Participant",
                      value: results.D20,
                    },
                  ],
                },

                {
                  name: "Leakage",
                  data: [
                    { field: "Total Loans", value: results.D15 },
                    {
                      field: "Loan Participants",
                      value: results.D14,
                    },
                    {
                      field: "Loans Percentage Yield",
                      value: results.D13,
                    },

                    { field: "Total Distbibutions", value: results.D16 },

                    {
                      field: "Distributions Participant",
                      value: results.D26,
                    },

                    {
                      field: "Distribution Yield",
                      value: results.D17,
                    },
                    {
                      field: "Distribution By Participants",
                      value: results.D21,
                    },
                  ],
                },

                {
                  name: "Plan Expenses",
                  data: [
                    { field: "Total Expenses", value: results.D23 },
                    {
                      field: "Cost Participants",
                      value: results.D24,
                    },
                    {
                      field: "Expense Ratio",
                      value: results.D25,
                    },
                  ],
                },

                {
                  name: "Accountant",
                  data: [
                    {
                      field: "Accountant Total Participants",
                      value: results.D56,
                    },
                    {
                      field: "Accountant Waiver",
                      value: results.D59,
                    },
                    {
                      field: "Accountant Opinion",
                      value: results.D57,
                    },
                    {
                      field: "Accountant Audit Scope",
                      value: results.D58,
                    },
                  ],
                },

                {
                  name: "Benefits",
                  data: [
                    {
                      field: "Benefit Payment Failure Ind",
                      value: results.D56,
                    },
                    {
                      field: "Accountant Waiver",
                      value: results.D59,
                    },
                    {
                      field: "Accountant Opinion",
                      value: results.D57,
                    },
                    {
                      field: "Accountant Audit Scope",
                      value: results.D58,
                    },
                  ],
                },
              ]}
              mainHeading="Observations"
            />
          </Box>
          <Box className={classes.indicatorsBox}>
            <Indicators
              info={[
                {
                  field: "Benefit Payment Failure Ind",
                  value: results.D31,
                },
                {
                  field: "Benefit Payment Failure Amt",
                  value: results.D32,
                  type: "amount",
                },
                {
                  field: "All Plan Asset Distribution Ind",
                  value: results.D27,
                },
                {
                  field: "Asset Held Ind",
                  value: results.D28,
                },
                {
                  field: "Asset Not Values Ind",
                  value: results.D29,
                },
                {
                  field: "Eligible Assets",
                  value: results.D55,
                },
                {
                  field: "Asset Not Values Amt",
                  value: results.D30,
                  type: "amount",
                },
                {
                  field: "Blackout Period Ind",
                  value: results.D33,
                },
                {
                  field: "Blackout Notice Ind",
                  value: results.D34,
                },
                {
                  field: "Five Percent Ind",
                  value: results.D39,
                },
              ]}
            />
            <Indicators
              info={[
                {
                  field: "Inv. Concentration 20 Ind",
                  value: results.D40,
                },
                {
                  field: "Inv. Concentration 20 Amt",
                  value: results.D41,
                  type: "amount",
                },
                {
                  field: "Contribution Failure Ind",
                  value: results.D35,
                },
                {
                  field: "Contribution Non Cash Ind",
                  value: results.D37,
                },
                {
                  field: "Contribution Failure Amt",
                  value: results.D36,
                  type: "amount",
                },
                {
                  field: "Contribution Non Cash Amt",
                  value: results.D38,
                  type: "amount",
                },
                {
                  field: "Leases In Default Amt",
                  value: results.D43,
                  type: "amount",
                },
                {
                  field: "Leases In Default Ind",
                  value: results.D42,
                },
                {
                  field: "Loans In Default Amt",
                  value: results.D45,
                  type: "amount",
                },
                {
                  field: "Loans In Default Ind",
                  value: results.D44,
                },
              ]}
            />
            <Indicators
              info={[
                {
                  field: "Loss Discover Amt",
                  value: results.D47,
                  type: "amount",
                },
                {
                  field: "Loss Discover Ind",
                  value: results.D46,
                },
                {
                  field: "Party Int Not Reporting Ind",
                  value: results.D48,
                },
                {
                  field: "Party Int Not Reporting Amt",
                  value: results.D49,
                  type: "amount",
                },
                {
                  field: "PBGC Insurance Ind",
                  value: results.D50,
                },
                {
                  field: "Pension Funding 412 Amt",
                  value: results.D51,
                  type: "amount",
                },
                {
                  field: "Reserve Term Ind",
                  value: results.D52,
                },
                {
                  field: "Reserve Term Amt",
                  value: results.D53,
                  type: "amount",
                },
                {
                  field: "Fidelity Bond Ind",
                  value: results.D54,
                },
              ]}
            />
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
