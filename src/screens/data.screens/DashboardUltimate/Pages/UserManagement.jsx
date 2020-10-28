import React from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FreeStates from "./UserManagement/FreeStates";
import Users from "./UserManagement/Users";
import AddUser from "./UserManagement/AddUser";
import { backgroundGrey } from "../../../../global/Colors";
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
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main opened="management" />
        <Grid className={classes.gridStyle}>
          <Paper className={classes.paperStyleInput}>
            <Users />
          </Paper>
          <Paper className={classes.paperStyleInput}>
            <AddUser />
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
