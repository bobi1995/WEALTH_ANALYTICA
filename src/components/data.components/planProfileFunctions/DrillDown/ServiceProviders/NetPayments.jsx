import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import NetPayments from "./Tables/NetPayments";
import NetPaymentsTableView from "./Tables/NetPaymentsTableView";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginTop: "60px",
  },
  buttonStyle: {
    backgroundColor: "#378FC3",
    color: "white",
    "&:hover": {
      color: "#378FC3",
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
  viewButton: {
    position: "absolute",
    marginLeft: "3%",
    marginTop: "1%",
    backgroundColor: "#28A745",
    color: "white",
    "&:hover": {
      backgroundColor: "#CCEACC",
      border: "1px solid #28A745",
    },
  },
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
    textAlign: "center",
  },
}));

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState("");
  const [tableView, SetTableView] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xl");

  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(
        `${apiAddress}/api/SmallCompanies/GetServiceProviderPayments?companyID=${props.companyID}&year=2018`,
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
    <div>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Net Payments
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        className={classes.mainDiv}
      >
        <Button
          className={classes.viewButton}
          onClick={() => {
            SetTableView(!tableView);
          }}
        >
          {tableView ? "Normal View" : "Table View"}
        </Button>
        <Typography
          variant="h3"
          component="h3"
          className={classes.headerStyle}
          gutterBottom
        >
          Service Providers Details
        </Typography>
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
              <div>
                {tableView ? (
                  <NetPaymentsTableView data={results} />
                ) : (
                  <NetPayments data={results} />
                )}
              </div>
            ) : (
              <Typography
                variant="h3"
                component="h3"
                className={classes.headerStyle}
                gutterBottom
              >
                No Net Payments to be displayed
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
