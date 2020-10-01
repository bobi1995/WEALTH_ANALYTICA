import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles({
  graphsContainer: {
    width: "40%",
    minWidth: 650,
    backgroundColor: "#E3F2FD",
  },
});

const Graphs = (props) => {
  const classes = useStyles();
  return <Box className={classes.graphsContainer}>Graphs!</Box>;
};

export default Graphs;
