import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import apiAddress from "../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { lastYear } from "../../../../global/Years";
import { primaryBlue } from "../../../../global/Colors";
import Table from "./Trend/Trend";
import AlerBox from "../../../../components/alertBox";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    zIndex: "1",
    marginTop: "60px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: primaryBlue,
    color: "white",
    "&:hover": {
      color: primaryBlue,
    },
    whiteSpace: "nowrap",
  },
  closeButton: {
    position: "absolute",
    color: "grey",

    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = useState("");
  const fullWidth = true;
  const maxWidth = "xl";
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(
        `${apiAddress}/api/SmallCompanies/GetFinancialTransactionsTrend?companyID=${props.companyID}&minYear=2017&maxYear=${lastYear}`,
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        setAlertMessage("Passwords don't match");
      });
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ margin: "1% auto" }}>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Default Trends
      </Button>
      <Dialog
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        style={{ zIndex: 10001 }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
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
        {alertMessage ? (
          <AlerBox text={alertMessage} display={setAlertMessage} />
        ) : (
          ""
        )}
      </Dialog>
    </div>
  );
}
