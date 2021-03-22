import React, { useRef, useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import "./Email/index.css";
import EmailSystem from "../screens/data.screens/EmailingSystem";

const useStyles = makeStyles({
  contactSign: {
    fontSize: 15,
  },

  insideHeaderBox: {
    backgroundColor: "#22c15e",
    color: "white",
    padding: 14,
    borderRadius: "12px 12xp 0px 0px",
    textAlign: "center",
  },

  insideTextBox: {
    backgroundColor: "white",
    borderRadius: "0px 0px 12px 12px",
    textAlign: "center",
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 6,
    fontSize: 13,
    border: "1px solid #fff",
    borderRadius: "99px",
    padding: "2px 7px 2px 7px",
    color: "white",
    cursor: "pointer",
    fontWeight: 10,
  },
  contactButton: {
    backgroundColor: "#22c15e",
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
  },

  main2: {
    fontSize: 14,
    borderRadius: "12px",
    border: "1px solid #fff",
    maxWidth: 250,
    display: "none",
  },
  toggle: {
    display: "block",
  },
  main: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 0,
    right: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
  },
});
const EmailPopUp = ({ contact, companyID }) => {
  const classes = useStyles();
  const chatRef = useRef(null);
  const [display, setDisplay] = useState("block");
  const handleOpen = () => {
    const node = chatRef.current;
    node.classList.toggle(classes.toggle);
  };
  const handleClose = () => {
    const node = chatRef.current;
    node.classList.toggle(classes.toggle);
  };

  return (
    <Box className={classes.main} style={{ display: `${display}` }}>
      <Box ref={chatRef} className={(classes.toggle, classes.main2)}>
        <span onClick={handleClose} className={classes.closeIcon}>
          X
        </span>
        <Box className={classes.insideHeaderBox}>
          You want to email Customer? Wealth Analytica Emailing.
        </Box>
        <Box className={classes.insideTextBox}>
          Send Email from our System:
          <br />
          <EmailSystem
            contact={contact}
            setDisplay={setDisplay}
            companyID={companyID}
          />
        </Box>
      </Box>

      <Box className={classes.contactButton} onClick={handleOpen}>
        <EmailIcon />
        <Typography component="h4" className={classes.contactSign}>
          Contact Customer
        </Typography>
      </Box>
    </Box>
  );
};

export default EmailPopUp;
