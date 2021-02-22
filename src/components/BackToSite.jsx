import React from "react";
import { makeStyles, Box, Link } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Email/index.css";
import { primaryBlue } from "../global/Colors";

const useStyles = makeStyles({
  contactSign: {
    fontSize: 15,
    color: "white",
  },

  contactButton: {
    backgroundColor: primaryBlue,
    borderRadius: "20px",
    padding: "8px 15px",
    cursor: "pointer",
    color: "white",
    maxWidth: "220px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#91C1DF",
    },
  },

  main: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 0,
    left: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
    "&:hover": {
      textDecoration: "none",
    },
  },
});
const EmailPopUp = () => {
  const classes = useStyles();
  return (
    <Link href="https://wealthanalytica.com/" className={classes.main}>
      <Box className={classes.contactButton}>
        <Box className={classes.contactSign}>
          <ArrowBackIcon />
          Back To Site
        </Box>
      </Box>
    </Link>
  );
};

export default EmailPopUp;
