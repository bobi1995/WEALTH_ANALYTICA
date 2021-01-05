import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import Brokers from "./Tables/Brokers";
import Typography from "@material-ui/core/Typography";
import { lastYear } from "../../../../global/Years";
import { primaryBlue } from "../../../../global/Colors";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "60px",
  },
  buttonStyle: {
    backgroundColor: primaryBlue,
    color: "white",
    "&:hover": {
      color: primaryBlue,
    },
    whiteSpace: "nowrap",
  },
  tableStyle: {
    height: "75vh",
    display: "flex",
    justifyContent: "space-around",
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
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
}));

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState("");
  const fullWidth = true;
  const maxWidth = "lg";

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(
        `${apiAddress}/api/SmallCompanies/GetHealthcareBrokers?companyID=${props.companyID}&year=${lastYear}`,
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
        window.location.reload();
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Brokers
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
          Health Care Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        {results ? (
          <div>
            {results.length > 0 ? (
              <Brokers data={results} />
            ) : (
              <Typography
                variant="h3"
                component="h3"
                className={classes.headerStyle}
                gutterBottom
              >
                No Brokers to be displayed
              </Typography>
            )}
          </div>
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
};