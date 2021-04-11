import React, { useState, useEffect } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Main from "./DashboardUltimate/Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import GridChart from "./DashboardUltimate/Pages/AccountPage/GridChart";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Plans from "./DashboardUltimate/Pages/StartPage/Charts/Plans";
import Companies from "./DashboardUltimate/Pages/StartPage/Charts/Companies";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import GroupIcon from "@material-ui/icons/Group";
import { lastYear } from "../../global/Years";
import { primaryBlue, backgroundGrey } from "../../global/Colors";
import apiAddress from "../../global/endpointAddress";
import axios from "axios";
import Loader from "../../components/plainCicularLoader";
import AlertBox from "../../components/alertBox";
import common from "./commonFunctions/common";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "3%",
    width: "100%",
  },
  gridStyle: {
    width: "100%",
    textAlign: "center",
  },
  imageStyle: {
    width: "25%",
    margin: "0 auto",
  },
  chartDivStyle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));
const Dashboard = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setAlertMessage("");
    axios({
      method: "get",
      url: `${apiAddress}/api/SmallCompanies/GetAdvisorDashboardData?year=${lastYear}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setAlertMessage("Cannot load your personal results of subscriptions.");
      });
  }, []);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main />
        <Grid className={classes.gridStyle}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.headerStyle}
            gutterBottom
          >
            Total Addressable Market
          </Typography>
          {isLoading ? (
            <Loader />
          ) : results ? (
            <Box>
              <div className={classes.chartDivStyle}>
                <Paper>
                  <GridChart
                    data={`$${common.longReducer(results.NetAssets)}`}
                    name="Net Assets"
                    icon={AttachMoneyIcon}
                    smalltext="Total Assets less Liabilities"
                    staticon={AccountBalanceIcon}
                  />
                </Paper>
                <Paper>
                  <GridChart
                    data={`${common.longReducer(results.Participants)}`}
                    name="Participants"
                    icon={AccessibilityIcon}
                    smalltext="Total Participants in Plans"
                    staticon={GroupIcon}
                  />
                </Paper>
              </div>
              <div>
                <div className={classes.chartDivStyle}>
                  <Plans
                    totalPlans={results.TotalPlans}
                    percentage={results.PlansPercentage}
                    chartData={[
                      results.BenefitPlans,
                      results.ContributionPlans,
                      results.WelfarePlans,
                    ]}
                  />
                  <Companies
                    chartData={[results.SmallCompanies, results.LargeCompanies]}
                  />
                </div>
              </div>
              <div className={classes.chartDivStyle}>
                <Paper>
                  <GridChart
                    data={`${common.longReducer(results.TotalIncome)}`}
                    name="Total Income"
                    icon={AttachMoneyIcon}
                    smalltext={`Total Income for ${lastYear}`}
                    staticon={AccountBalanceIcon}
                  />
                </Paper>
                <Paper>
                  <GridChart
                    data={`${common.longReducer(results.TotalDistribution)}`}
                    name="Total Distributions"
                    icon={AttachMoneyIcon}
                    smalltext={`Total Distributions for ${lastYear}`}
                    staticon={AccountBalanceIcon}
                  />
                </Paper>
                <Paper>
                  <GridChart
                    data={`${common.longReducer(results.TotalExpenses)}`}
                    name="Total Expenses"
                    icon={AttachMoneyIcon}
                    smalltext={`Total Expenses for ${lastYear}`}
                    staticon={AccountBalanceIcon}
                  />
                </Paper>
              </div>
            </Box>
          ) : (
            "No results"
          )}
        </Grid>
      </div>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
