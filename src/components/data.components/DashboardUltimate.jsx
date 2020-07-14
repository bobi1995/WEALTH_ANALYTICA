import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Main from "./DashboardUltimate/Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "3%",
    width: "100%",
  },
  gridStyle: {
    margin: "1%",
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
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main />
        <Grid className={classes.gridStyle}>
          <Paper>
            <Typography variant="h3" component="h2" gutterBottom>
              Start Page
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
