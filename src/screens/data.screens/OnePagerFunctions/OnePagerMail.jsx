import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const OnePagerMail = () => {
  const classes = useStyles();

  return <Box className={classes.container}>Hi!</Box>;
};

const useStyles = makeStyles({
  container: {
    width: "94%",
    backgroundColor: "red",
    margin: "3% auto",
  },
});

export default OnePagerMail;
