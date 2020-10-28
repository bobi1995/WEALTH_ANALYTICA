import React from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Main from "./DashboardUltimate/Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridChart from "./DashboardUltimate/Pages/AccountPage/GridChart";
import numeral from "numeral";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Plans from "./DashboardUltimate/Pages/StartPage/Charts/Plans";
import Companies from "./DashboardUltimate/Pages/StartPage/Charts/Companies";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import GroupIcon from "@material-ui/icons/Group";
import { lastYear } from "../../global/Years";
import { primaryBlue, backgroundGrey } from "../../global/Colors";

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
            Welcome To Wealth Analytica
          </Typography>
          <div className={classes.chartDivStyle}>
            <Paper>
              <GridChart
                data={`$ 8 Trillions`}
                name="Total Assets"
                icon={AttachMoneyIcon}
                smalltext="Total assets not including liabilities"
                staticon={AccountBalanceIcon}
              />
            </Paper>
            <Paper>
              <GridChart
                data={`$ 8 Trillions`}
                name="Net Assets"
                icon={AttachMoneyIcon}
                smalltext="Total Assets less Liabilities"
                staticon={AccountBalanceIcon}
              />
            </Paper>
            <Paper>
              <GridChart
                data={`${numeral(179114708).format("0,0")}`}
                name="Participants"
                icon={AccessibilityIcon}
                smalltext="Total Participants in Plans"
                staticon={GroupIcon}
              />
            </Paper>
          </div>
          <div>
            <div className={classes.chartDivStyle}>
              <Plans />
              <Companies />
            </div>
          </div>
          <div className={classes.chartDivStyle}>
            <Paper>
              <GridChart
                data={`$ 290 Billions`}
                name="Total Income"
                icon={AttachMoneyIcon}
                smalltext={`Total Income for ${lastYear}`}
                staticon={AccountBalanceIcon}
              />
            </Paper>
            <Paper>
              <GridChart
                data={`$  -561 Billions`}
                name="Net Assets"
                icon={AttachMoneyIcon}
                smalltext={`Net Assets for ${lastYear}`}
                staticon={AccountBalanceIcon}
                colornegative="true"
              />
            </Paper>
            <Paper>
              <GridChart
                data={`$ 826 Billions`}
                name="Total Distribution"
                icon={AttachMoneyIcon}
                smalltext={`Total Distribution for ${lastYear}`}
                staticon={AccountBalanceIcon}
              />
            </Paper>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
