import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import UtilizationTable from "./Utilization/Table";
import Graphs from "./Utilization/Graphs";
import NoDataComponent from "./Components/NoDataComponent";

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
});

const Utilization = (props) => {
  const classes = useStyles();
  const [graphs, setGraphs] = useState("");
  const data = props.data;

  return data.length > 0 ? (
    <Box>
      <Box className={classes.headingContainer}>
        {/* <Typography component="h4" variant="h4" className={classes.heading}>
          Utilization
        </Typography> */}
        <Box className={classes.tablesContainer}>
          <UtilizationTable data={data} setGraphs={setGraphs} />
          <Graphs graphData={graphs} data={data} />
        </Box>
      </Box>
    </Box>
  ) : (
    <NoDataComponent />
  );
};

export default Utilization;
