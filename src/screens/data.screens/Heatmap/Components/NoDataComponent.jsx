import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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

const NoDataComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.noDataBox}>
      <Typography className={classes.noDataHeading}>
        No data to be displayed
      </Typography>
    </Box>
  );
};

export default NoDataComponent;
