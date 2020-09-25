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

const EmailSection = (props) => {
  const classes = useStyles();
  const [receiver, setReceiver] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const sender = sessionStorage.getItem("Email");

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };
  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(
        `${apiAddress}/api/SmallCompanies/SendEmail`,
        {
          from: sender,
          to: receiver,
          subject: `Wealth Analytica Plan Info`,
          message: emailContent,
          CompanyId: props.companyID,
        },
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className={classes.container}>
      <Box className={classes.topContainer}>
        <Box className={classes.receiverContainer}>
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
        <Button className={classes.redButton} startIcon={<HighlightOff />}>
          Close
        </Button>
      </Box>
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
    //font-family: "Slabo", serif;
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
});

export default EmailSection;
