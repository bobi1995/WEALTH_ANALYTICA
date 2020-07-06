import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../../../global/endpointAddress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TotalAssetsTable from "./Financial-BalanceSheet/TotalAssets";
import TotalLiabilitiesTable from "./Financial-BalanceSheet/TotalLiabilities";

const useStyles = makeStyles(() => ({
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
}));

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState("");

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
    axios
      .get(
        `${apiAddress}/api/SmallCompanies/GetFinancialDetails?companyID=${props.companyID}&year=2018`,
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
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
        View Balance Sheet
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle className={classes.titleStyle}>Optional sizes</DialogTitle>

        <DialogContent className={classes.tableStyle}>
          <TotalAssetsTable data={results} />
          <TotalLiabilitiesTable data={results} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
