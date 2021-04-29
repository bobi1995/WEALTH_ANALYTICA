import React, { useState, useEffect } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../../../../components/plainCicularLoader";
import apiAddress from "../../../../global/endpointAddress";
import axios from "axios";
import { backgroundGrey, primaryBlue } from "../../../../global/Colors";
import Connection from "./Connections/Connection";
import { lastYear } from "../../../../global/Years";
import AlertBox from "../../../../components/alertBox";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
  },
  header: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
}));
const Connections = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState("");
  const [flag, setFlag] = useState(1);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const url = `${apiAddress}/api/Bookmarks/List?loadFinancialDetails=true&year=${lastYear}`;
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const newArr = res.data.filter((element) => element.IsClient === true);
        setResults(newArr);
        setFlag(0);
      })
      .catch((err) => {
        setAlertMessage("For some reason we could not load your connections.");
      });
  }, []);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main opened="connections" />

        <Grid className={classes.gridStyle}>
          <Typography
            className={classes.header}
            variant="h4"
            component="h4"
            gutterBottom
          >
            Your Connections
          </Typography>
          {flag === 0 ? (
            results.length > 0 ? (
              results.map((el) => <Connection data={el} key={el.CompanyID} />)
            ) : (
              <div>
                <h1
                  className={classes.header}
                  style={{ width: "70%", margin: "7% auto" }}
                >
                  You do not have any connections. Please add some to see the
                  results
                </h1>
              </div>
            )
          ) : (
            <Loader />
          )}
        </Grid>
      </div>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Connections;
