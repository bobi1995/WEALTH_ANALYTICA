import React, { useState, useEffect } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import apiAddress from "../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridChart from "./AccountPage/GridChart";
import GridChartTotal from "./AccountPage/GridChartTotal";
import Profile from "./AccountPage/Profile";
import PersonalStates from "./AccountPage/PersonalStates";
import ProfileDetails from "./AccountPage/ProfileDetails";

import BatteryFullIcon from "@material-ui/icons/BatteryFull";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Battery50Icon from "@material-ui/icons/Battery50";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import CreditCardIcon from "@material-ui/icons/CreditCard";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "3%",
    width: "100%",
  },
  gridStyle: {
    width: "100%",
  },
  statsStyle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
}));
const AccountPage = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState("");
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    setFlag(1);
    axios
      .get(`${apiAddress}/api/Users/GetSubsDetails`, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        setResults(result.data);
        setFlag(0);
      })
      .catch((e) => {
        console.log(e);
        alert("For some reason we could not find the desired results.");
        window.location.reload();
      });
  }, []);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main opened="account" />

        <Grid className={classes.gridStyle}>
          {flag === 0 ? (
            results ? (
              <div>
                <div className={classes.statsStyle}>
                  <Paper>
                    <GridChart
                      data={results.ActiveSubs}
                      name="Total Subscriptions"
                      icon={CheckCircleOutlineIcon}
                      smalltext="Active and Expired"
                      staticon={AddToPhotosIcon}
                    />
                  </Paper>
                  <Paper>
                    <GridChart
                      data={results.ActivePremiumSubs}
                      name="Premium Subscriptions"
                      icon={BatteryFullIcon}
                      smallstat={
                        (results.ActivePremiumSubs / results.ActiveSubs) * 100
                      }
                      staticon={TrendingUpIcon}
                      smalltext="of All Active Subscriptions"
                    />
                  </Paper>
                  <Paper>
                    <GridChart
                      data={results.ActiveBasicSubs}
                      name="Basic Subscriptions"
                      icon={Battery50Icon}
                      smallstat={
                        (results.ActiveBasicSubs / results.ActiveSubs) * 100
                      }
                      staticon={TrendingUpIcon}
                      smalltext="of All Active Subscriptions"
                    />
                  </Paper>
                  <Paper>
                    <GridChartTotal
                      data={results.ActiveSubsPrice}
                      name="Actives Price"
                      icon={AttachMoneyIcon}
                      staticon={CreditCardIcon}
                      smalltext="Amount paid for all Active Subscriptions"
                    />
                  </Paper>
                </div>
                <div className={classes.statsStyle}>
                  <Paper>
                    <Profile />
                  </Paper>
                  <Paper>
                    <ProfileDetails />
                  </Paper>
                </div>
              </div>
            ) : (
              ""
            )
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
        </Grid>
      </div>
    </div>
  );
};

export default AccountPage;
