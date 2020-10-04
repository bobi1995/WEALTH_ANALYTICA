import React, { useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import UtilizationTable from "./Utilization/Table";
import Graphs from "./Utilization/Graphs";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
  },
  tablesContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3%",
  },
  table: {
    width: "40%",
    minWidth: 650,
  },
  noDataBox: {
    width: "100%",
    textAlign: "center",
  },
  noDataHeading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    fontSize: 25,
    marginTop: "7%",
  },
});

const Utilization = (props) => {
  const classes = useStyles();
  const [graphs, setGraphs] = useState("");

  const data = props.data.filter((el) => el.utilization !== null);
  return data.length > 0 ? (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Utilization
        </Typography>
        <Box className={classes.tablesContainer}>
          <UtilizationTable data={data} setGraphs={setGraphs} />
          <Graphs graphData={graphs} data={data} />
        </Box>
      </Box>
    </Box>
  ) : (
    <Box className={classes.noDataBox}>
      <Typography className={classes.noDataHeading}>
        No data to be displayed
      </Typography>
    </Box>
  );
};

export default Utilization;
