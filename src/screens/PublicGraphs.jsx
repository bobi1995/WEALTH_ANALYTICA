import React, { useState } from "react";
import GraphsField from "./data.screens/Graphs/GraphField";
import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { backgroundGrey, primaryBlue, orangeColor } from "../global/Colors";
const useStyles = makeStyles({
  container: {
    backgroundColor: backgroundGrey,
    height: "100vh",
  },
  typographyStyle: {
    textAlign: "center",
    fontSize: 22,
    fontStyle: "italic",
    fontFamily: "Baskervville",
  },
  linkBox: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    backgroundColor: primaryBlue,
    display: "flex",
    justifyContent: "space-around",
    padding: "0.2%",
  },
  linkStyle: {
    color: "white",
    fontSize: 18,
    lineHeight: 2.5,
    border: "1px solid white",
    paddingLeft: "0.2%",
    paddingRight: "0.2%",
    borderRadius: 5,
    "&:hover": {
      color: orangeColor,
      cursor: "pointer",
      border: `1px solid ${orangeColor}`,
      textDecoration: "none",
    },
  },
});
const PublicGraphs = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <section className="clientDash-img">
        <h1 className="onePager-header1" style={{ fontSize: 45, padding: 0 }}>
          Overview Graphs
        </h1>
      </section>
      <Box>
        <Typography
          className={classes.typographyStyle}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Wealth Analytica gives you opportunity to make overview of the
          Industries per States for the last years.
        </Typography>
      </Box>
      <GraphsField />
      <Box className={classes.linkBox}>
        <Link
          className={classes.linkStyle}
          href="https://data.wealthanalytica.com/"
        >
          Login/Register
        </Link>
        <Link
          className={classes.linkStyle}
          href="https://data.wealthanalytica.com/demo"
        >
          Request a demo
        </Link>
        <Link className={classes.linkStyle} href="https://wealthanalytica.com/">
          Back to Site
        </Link>
      </Box>
    </Box>
  );
};

export default PublicGraphs;
