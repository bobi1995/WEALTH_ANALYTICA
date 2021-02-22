import React, { useEffect, useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import StateInput from "../../../components/AllStatesInput";
import IndustryInput from "../../../components/IndustryInput";
import axios from "axios";
import apiAddress from "../../../global/endpointAddress";
import { lastYear } from "../../../global/Years";
import PlainLoader from "../../../components/plainCicularLoader";
import Chart from "../Graphs/Chart";
import { backgroundGrey } from "../../../global/Colors";
const useStyles = makeStyles(() => ({
  gridStyle: {
    width: "100%",
    backgroundColor: backgroundGrey,
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

const GraphField = () => {
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
          `${apiAddress}/api/Public/GetCompanyGraphs?businessCategory=${industry}&minYear=2017&maxYear=${lastYear}&state=${state}`,
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
  }, [state, industry, GetData]);

  return (
    <Grid className={classes.gridStyle}>
      <Paper className={classes.paperStyleInput}>
        <Box className={classes.boxStyle}>
          <StateInput setState={(state) => setState(state)} />
        </Box>
        <Box className={classes.boxStyle}>
          <IndustryInput setIndustry={(industry) => setIndustry(industry)} />
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

          <Box className={classes.graphsBox}>
            <Chart data={data.TotalPlanExpenses} title="Total Plan Expenses" />
            <Chart
              data={data.AverageParticipantBalance}
              title="Average Participant Balance"
            />
          </Box>

          <Box className={classes.graphsBox}>
            <Chart
              data={data.PercentOfEmployeeContributions}
              title="Percent Of Employee Contributions"
            />
            <Chart
              data={data.PercentageOfEmployerContributions}
              title="Percentage Of Employer Contributions"
            />
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Grid>
  );
};
export default GraphField;
