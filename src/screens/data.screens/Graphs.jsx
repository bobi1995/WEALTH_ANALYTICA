import React, { useState, useEffect, useCallback } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Main from "./DashboardUltimate/Main";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import StateInput from "./DashboardUltimate/Pages/StatisticPage/StateInput";
import IndustryInput from "../../components/IndustryInput";
import axios from "axios";
import apiAddress from "../../global/endpointAddress";
import { lastYear } from "../../global/Years";
import PlainLoader from "../../components/plainCicularLoader";
import Chart from "./Graphs/Chart";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
  },
  paperStyleInput: {
    width: "80%",
    margin: "1% auto",
    display: "flex",
    justifyContent: "space-around",
    padding: "3%",
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
  boxStyle: {
    width: "45%",
  },
  graphsBox: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
}));

const Graphs = (props) => {
  const classes = useStyles();
  const [state, setState] = useState("");
  const [industry, setIndustry] = useState("");
  const [flag, setFlag] = useState(0);
  const [data, setData] = useState();
  const GetData = useCallback(() => {
    if (state && industry) {
      setFlag(1);
      axios
        .get(
          `${apiAddress}/api/SmallCompanies/GetCompanyGraphs?businessCategory=${industry}&minYear=2017&maxYear=${lastYear}&state=${state}`,
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
  }, [state, industry]);

  useEffect(() => {
    GetData();
  }, [state, industry]);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main opened="graphs" />
        <Grid className={classes.gridStyle}>
          <Paper className={classes.paperStyleInput}>
            <Box className={classes.boxStyle}>
              <StateInput setState={(state) => setState(state)} />
            </Box>
            <Box className={classes.boxStyle}>
              <IndustryInput
                setIndustry={(industry) => setIndustry(industry)}
              />
            </Box>
          </Paper>
          {flag === 1 ? (
            <PlainLoader />
          ) : data ? (
            <Box>
              <Box className={classes.graphsBox}>
                <Chart
                  data={data.RateOfInvestmentReturn}
                  title="Rate Of Investment Return"
                />
                <Chart
                  data={data.PercentageOfActivePlanParticipants}
                  title="Percentage Of Active Plan Participants"
                />
              </Box>
            </Box>
          ) : (
            ""
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Graphs;
