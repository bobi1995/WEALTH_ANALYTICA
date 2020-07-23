import React, { useState, useEffect } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import StateInput from "./StatisticPage/StateInput";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";
import DashSummary from "./StatisticPage/DashSummary";
import ContributionByEmployee from "./StatisticPage/Charts/ContributionByEmployee";
import NetAssets from "./StatisticPage/Charts/NetAssets";
import NetIncome from "./StatisticPage/Charts/NetIncome";
import ParticipantBalance from "./StatisticPage/Charts/ParticipantBalance";
import TotalExpenses from "./StatisticPage/Charts/TotalExpenses";
import TotalIncome from "./StatisticPage/Charts/TotalIncome";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
  },
  paperStyleInput: {
    width: "25%",
    margin: "1% auto",
  },
  paperStyleSummary: {
    width: "90%",
    margin: "1% auto",
  },
  paperStyleChart: {
    width: "50%",
    margin: "1% auto",
  },
  chartDivStyle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
}));

const StatisticsPage = (props) => {
  const classes = useStyles();

  const [state, setState] = useState([]);
  const [year, setYear] = useState(2018);
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    if (state.length > 0) {
      setFlag(1);
      axios
        .get(
          `${apiAddress}/api/SmallCompanies/GetCompaniesTotals?summaryYear=${year}&minYear=2015&maxYear=2018&state=${state}`,
          {
            headers: {
              Authorization: "Basic " + sessionStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setData(res.data);
          setFlag(0);
        })
        .catch((error) => {
          console.log(error);
          alert("For some reason we could not find the desired results.");
          window.location.reload();
        });
    }
  }, [state, year]);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main opened="statistics" />
        <Grid className={classes.gridStyle}>
          <Paper className={classes.paperStyleInput}>
            <StateInput setState={(state) => setState(state)} />
          </Paper>
          <Paper className={classes.paperStyleSummary}>
            {state.length > 0 ? (
              <DashSummary
                result={data.FilterProfile}
                onYearChange={(yearChange) => {
                  setYear(yearChange);
                }}
              />
            ) : (
              ""
            )}
          </Paper>
          {flag === 0 ? (
            data.Statistics && state.length > 0 ? (
              <div>
                <div className={classes.chartDivStyle}>
                  <NetIncome statistics={data.Statistics} />

                  <NetAssets statistics={data.Statistics} />
                </div>
                <div className={classes.chartDivStyle}>
                  <ContributionByEmployee statistics={data.Statistics} />
                  <ParticipantBalance statistics={data.Statistics} />
                </div>
                <div className={classes.chartDivStyle}>
                  <TotalExpenses statistics={data.Statistics} />
                  <TotalIncome statistics={data.Statistics} />
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            <div style={{ width: "100%", textAlign: "center" }}>
              <CircularProgress
                size={150}
                style={{ textAlign: "center", marginTop: "15%" }}
              />
              <p style={{ textAlign: "center", marginTop: "3%" }}>
                Loading....Please wait
              </p>
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default StatisticsPage;
