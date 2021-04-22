import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import common from "../../../commonFunctions/commonExtracts";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import Moment from "react-moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import AssignState from "./FreeStates/AssignState";
import { primaryBlue } from "../../../../../global/Colors";
import AlertBox from "../../../../../components/alertBox";
import SingleState from "./FreeStates/SingleState";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
  statesStyle: { marginBottom: "1%" },
  singleState: {
    textAlign: "center",
    borderRadius: "20px",
    marginBottom: "1%",
  },
  saveButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#008000",
    color: "white",
  },
}));

const FreeStates = () => {
  const classes = useStyles();
  const [alertMessage, setAlertMessage] = useState("");
  const [results, setResults] = useState("");

  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetPaymentsAndsubscriptions`;

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        setAlertMessage("Cannot load free states.");
      });
  }, []);

  console.log(results);
  return (
    <div className={classes.mainDiv}>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        Free States Available
      </Typography>

      <div className={classes.statesStyle}>
        {results ? (
          results.map((el) => (
            <div key={el.PaymentID} className={classes.singleState}>
              <SingleState subscription={el} />
            </div>
          ))
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
      </div>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FreeStates;
