import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import NoDataComponent from "./Components/NoDataComponent";
import TouchesTable from "./Touches/Table";

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

const Touches = (props) => {
  const classes = useStyles();

  const data = props.data.filter((el) => el.touches !== null);
  return data.length > 0 ? (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Touches
        </Typography>
        <Box className={classes.tablesContainer}>
          <TouchesTable data={data} />
        </Box>
      </Box>
    </Box>
  ) : (
    <NoDataComponent />
  );
};

export default Touches;
