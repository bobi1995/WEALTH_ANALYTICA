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
import PdfList from "./PdfList";
import EmailSent from "../../../../components/emailSent";
import Loader2 from "../../../../components/loader2";
import { backgroundGrey } from "../../../../global/Colors";
const EmailSection = (props) => {
  const classes = useStyles();
  const [receiver, setReceiver] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const sender = localStorage.getItem("Email");
  const [display, setDisplay] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [result, setResult] = useState("");
  const [displayFlag, setDisplayFlag] = useState(false);

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };
  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setDisplayFlag(true);
    axios
      .post(
        `${apiAddress}/api/SmallCompanies/SendDiagnosticsEmail`,
        {
          from: sender,
          to: receiver,
          subject: `Wealth Analytica Diagnostic`,
          message: emailContent,
          PdfNumbers: pdfs,
        },
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setDisplayFlag(false);
        setResult(res.status);
        setDisplay(false);
        setEmailContent("");
        setReceiver("");
        setPdfs("");
      })
      .catch((err) => {
        setDisplayFlag(false);
        setResult(err.response.data.Message);
      });
  };

  return (
    <Box
      className={classes.container}
      style={{ backgroundColor: display ? backgroundGrey : "white" }}
    >
      {displayFlag ? <Loader2 text="Sending...Please wait" /> : ""}
      {result ? <EmailSent result={result} setClose={setResult} /> : ""}

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
        <Box className={classes.emailBox}>
          <Box style={{ width: "100%" }}>
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
          <PdfList setPdfs={setPdfs} />
        </Box>
      ) : (
        <Element id="email-diagnostic" />
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",

    padding: "1%",
    marginTop: "1%",
  },
  topContainer: {
    width: "100%",
    backgroundColor: backgroundGrey,
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
    textTransform: "uppercase",
    backgroundColor: "#008000",
    "&:hover": {
      backgroundColor: "#A8DD8A",
    },
    fontSize: 22,
    borderRadius: 5,
    textAlign: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    paddingTop: "0.25%",
    fontFamily: "Slabo,serif",
  },

  emailBox: {
    display: "flex",
  },
});

export default EmailSection;
