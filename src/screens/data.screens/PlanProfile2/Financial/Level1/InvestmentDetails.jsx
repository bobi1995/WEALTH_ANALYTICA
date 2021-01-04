import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./InvestmentDetails/Table";
import { lastYear } from "../../../../../global/Years";
import { primaryBlue } from "../../../../../global/Colors";
import AlertBox from "../../../../../components/alertBox";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "60px",
  },
  titleStyle: {
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    color: "grey",

    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  buttonStyle: {
    backgroundColor: primaryBlue,
    color: "white",
    "&:hover": {
      color: primaryBlue,
    },
    whiteSpace: "nowrap",
  },
}));

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const fullWidth = true;
  const maxWidth = "lg";
  const [results, setResults] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    console.log(
      `${apiAddress}/api/SmallCompanies/GetInvestmentDetails?companyID=${props.companyID}&year=${lastYear}`
    );

    axios({
      method: "get",
      url: `${apiAddress}/api/SmallCompanies/GetInvestmentDetails?companyID=${props.companyID}&year=${lastYear}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + sessionStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        console.log(error);
        setAlertMessage(
          "For some reason we could not find the desired results."
        );
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!alertMessage) {
      handleClose();
    }
  }, [alertMessage]);

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Investment Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className={classes.mainDiv}
      >
        <DialogTitle className={classes.titleStyle}>
          Investment Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        {results ? (
          <Table data={results} />
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress
              size={150}
              style={{ textAlign: "center", marginTop: "15%" }}
            />
            <p style={{ textAlign: "center", marginTop: "3%" }}>
              Loading....Please wait
            </p>
          </div>
        )}
      </Dialog>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
