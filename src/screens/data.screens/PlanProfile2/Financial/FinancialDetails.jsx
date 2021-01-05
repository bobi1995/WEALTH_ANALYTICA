import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TotalAssetsTable from "./Level1/Type1/Financial-BalanceSheet/BalanceTable";
import IncomeStatement from "./Level1/Type1/Financial-IncomeStatement/IncomeTable";
import BalanceType2 from "./Level1/Type2/BalanceType2";
import IncomeType2 from "./Level1/Type2/IncomeType2";
import BalanceType3 from "./Level1/Type3/BalanceType3";
import IncomeType3 from "./Level1/Type3/IncomeType3";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
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
        `${apiAddress}/api/SmallCompanies/GetFinancialDetails?companyID=${props.companyID}&year=${lastYear}`,
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

  const renderCases = (companyType) => {
    switch (companyType) {
      case 1:
        return (
          <DialogContent className={classes.tableStyle}>
            <TotalAssetsTable data={results} />
            <IncomeStatement data={results} />
          </DialogContent>
        );
      case 2:
        return (
          <DialogContent className={classes.tableStyle}>
            <BalanceType2 data={results} />
            <IncomeType2 data={results} />
          </DialogContent>
        );
      case 3:
        return (
          <DialogContent className={classes.tableStyle}>
            <BalanceType3 data={results} />
            <IncomeType3 data={results} />
          </DialogContent>
        );
      default:
        return;
    }
  };

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.buttonStyle}
        onClick={handleClickOpen}
      >
        Financial Details
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
          Financial Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        {results ? (
          renderCases(results.CompanyType)
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
        {/* {results ? (
          results.CompanyType === 1 ? (
            <InvestmentDetails companyID={props.companyID} />
          ) : (
            ""
          )
        ) : (
          ""
        )} */}
      </Dialog>
    </div>
  );
};