import React, { useState, useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { TextareaAutosize, TextField, Button } from "@material-ui/core";
import { Send } from "@material-ui/icons/";
import apiAddress from "../../../global/endpointAddress";
import axios from "axios";
import EmailSent from "../../../components/emailSent";
import { backgroundGrey } from "../../../global/Colors";

const EmailFields = (props) => {
  const classes = useStyles();
  const [receiver, setReceiver] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const sender = sessionStorage.getItem("Email");
  const [pdfs, setPdfs] = useState(props.pdfs);
  const [result, setResult] = useState("");
  console.log(receiver);
  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };
  const handleEmailContentChange = (e) => {
    setEmailContent(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log({
      from: sender,
      to: receiver,
      subject: `Wealth Analytica Diagnostic`,
      message: emailContent,
      PdfNumbers: pdfs,
    });
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
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setEmailContent("");
        setReceiver("");
        setPdfs([]);
        setResult(res.status);
      })
      .catch((err) => {
        setResult(err.response.data.Message);
      });
  };

  useEffect(() => {
    setPdfs(props.pdfs);
  }, [props.pdfs]);

  console.log(result);

  return (
    <Box className={classes.container}>
      <Box className={classes.emailBox}>
        <Box style={{ width: "70%", margin: "0 auto" }}>
          <Box className={classes.topContainer}>
            <Box className={classes.receiverContainer}>
              <TextField
                className={classes.receivers}
                label="To"
                type="email"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleReceiverChange}
                value={receiver}
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
              <TextareaAutosize
                onChange={handleEmailContentChange}
                className={classes.emailField}
                placeholder="Start with something nice like 'Dear Customer, ...'"
                rowsMin={5}
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
          </Box>
        </Box>
      </Box>
      {result ? <EmailSent result={result} setClose={setResult} /> : ""}
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
    width: "80%",
    backgroundColor: backgroundGrey,
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto",
  },
  emailContainer: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  emailField: {
    width: "90%",
    marginTop: "1%",
  },
  receiverContainer: {
    marginTop: "1%",
    marginLeft: "1%",
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

export default EmailFields;
