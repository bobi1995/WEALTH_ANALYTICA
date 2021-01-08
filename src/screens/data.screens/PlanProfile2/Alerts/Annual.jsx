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
import Table from "./Annual/Table";
import { primaryBlue } from "../../../../global/Colors";

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

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(
        `${apiAddress}/api/SmallCompanies/GetFinancialTransactionsAnnual?companyID=${props.companyID}&year=${lastYear}`,
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("For some reason we could not find the desired results.");
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
        {lastYear} Details
      </Button>
      <Dialog
        style={{ zIndex: 10001 }}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
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
      </Dialog>
    </div>
  );
}
