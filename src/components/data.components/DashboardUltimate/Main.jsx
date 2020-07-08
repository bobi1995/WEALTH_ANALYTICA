import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Sidebar/Profile";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "3%",
    width: "100%",
    height: "100%",
  },
}));
const Main = (props) => {
  const classes = useStyles();
  return (
    <Grid>
      <Paper className={classes.paper}>
        <Profile />
        <Sidebar opened={props.opened} />
      </Paper>
    </Grid>
  );
};

export default Main;
