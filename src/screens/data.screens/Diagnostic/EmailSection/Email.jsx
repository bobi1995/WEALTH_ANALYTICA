import React, { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import {
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Send, HighlightOff } from "@material-ui/icons/";
import apiAddress from "../../../../global/endpointAddress";
import axios from "axios";
import { Link as ScrollLink, Element } from "react-scroll";

const EmailSection = (props) => {
  const classes = useStyles();
  const [receiver, setReceiver] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const sender = sessionStorage.getItem("Email");
  const [display, setDisplay] = useState(false);
  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };
  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.container}>
      {display ? (
        ""
      ) : (
        <Box style={{ textAlign: "center" }}>
          <ScrollLink
            to="email-diagnostic"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
            onClick={() => setDisplay(true)}
            className={classes.contactBtn}
            style={{
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Email Customer
          </ScrollLink>
        </Box>
      )}
      {display ? (
        <Box>
          <Box className={classes.topContainer}>
            <Box className={classes.receiverContainer} id="email-diagnostic">
              <TextField
                className={classes.receivers}
                label="To"
                type="email"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleReceiverChange}
              />
              <TextField
                className={classes.receivers}
                style={{ marginTop: "2%" }}
                label="From"
                type="email"
                autoComplete="current-password"
                variant="outlined"
                defaultValue={sender}
                disabled
              />
            </Box>
            <Box className={classes.emailContainer}>
              <Typography
                className={classes.heading}
                variant="h5"
                component="h5"
                gutterBottom
              >
                Write your email to Client Quick &amp; Easy
              </Typography>

              <TextareaAutosize
                onChange={handleEmailContentChange}
                className={classes.emailField}
                placeholder="Start with something nice like 'Dear Customer, ...'"
                rowsMin={3}
              />
            </Box>
          </Box>
          <Box className={classes.buttonContainer}>
            <Button
              className={classes.greenButton}
              onClick={sendEmail}
              startIcon={<Send />}
            >
              Send
            </Button>
            <Button
              onClick={() => {
                setDisplay(false);
              }}
              className={classes.redButton}
              startIcon={<HighlightOff />}
            >
              Close
            </Button>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#F3F4F8",
    padding: "1%",
    marginTop: "1%",
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#F3F4F8",
    display: "flex",
    justifyContent: "space-around",
  },
  emailContainer: {
    width: "100%",
  },
  emailField: {
    width: "100%",
  },
  receiverContainer: {
    marginTop: "1%",
    marginRight: "1%",
  },
  receivers: {
    backgroundColor: "white",
    width: "100%",
  },
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "2%",
  },
  redButton: {
    border: "1px solid white",
    color: "white",
    backgroundColor: "red",
    width: "10%",
    "&:hover": { backgroundColor: "#FFB6C1" },
  },
  greenButton: {
    border: "1px solid white",
    color: "white",
    backgroundColor: "green",
    width: "10%",
    "&:hover": { backgroundColor: "#A8DD8A" },
  },
  contactBtn: {
    backgroundColor: "#008000",
    "&:hover": {
      backgroundColor: "#A8DD8A",
    },
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    paddingTop: "0.25%",
  },
});

export default EmailSection;
