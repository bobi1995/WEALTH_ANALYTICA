import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import apiAddress from "../../../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./InvestmentDetails/Table";
import { lastYear } from "../../../../../../global/Years";
import { primaryBlue } from "../../../../../../global/Colors";
import AlertBox from "../../../../../../components/alertBox";

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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);

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
        alert("For some reason we could not find the desired results.");
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
        Investment Details
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Investment Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>

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
