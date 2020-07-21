import React, { useState, useEffect } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FreeStates from "./UserManagement/FreeStates";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Users from "./UserManagement/Users";

const useStyles = makeStyles((theme) => ({
  paperStyleInput: {
    margin: "3%",
  },
  gridStyle: {
    width: "100%",
  },
}));

const UserManagement = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main opened="management" />
        <Grid className={classes.gridStyle}>
          <Paper className={classes.paperStyleInput}>
            <Users />
          </Paper>
          <Paper className={classes.paperStyleInput}>
            <FreeStates />
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default UserManagement;
