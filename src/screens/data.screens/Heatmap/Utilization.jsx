import React from "react";
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
  table: {
    minWidth: 650,
  },
  tablesContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    width: "40%",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Utilization = (props) => {
  const classes = useStyles();
  console.log(props.data.filter((el) => el.utilization !== null));
  const data = props.data.filter((el) => el.utilization !== null);
  return data.length > 0 ? (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Utilization
        </Typography>
        <Box className={classes.tablesContainer}>
          <UtilizationTable data={data} />
          <Graphs />
        </Box>
      </Box>
    </Box>
  ) : (
    ""
  );
};

export default Utilization;
