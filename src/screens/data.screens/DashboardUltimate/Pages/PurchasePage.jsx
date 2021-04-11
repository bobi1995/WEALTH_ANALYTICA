import React, { useState } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { primaryBlue, backgroundGrey } from "../../../../global/Colors";
import SingleState from "./PurchasePage/SingleState";
import National from "./PurchasePage/National";
import Regional from "./PurchasePage/Regional";
import SingleStateView from "./PurchasePage/SingleState/SingleStateView";
import RegionalView from "./PurchasePage/Regional/RegionalView";
import BackBtn from "./PurchasePage/components/BackBtn";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
    textAlign: "center",
  },
  typeContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "5%",
  },
  paperType: {
    width: "30%",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B5D3E7",
    borderWidth: 3,
    borderColor: "white",
    borderStyle: "solid",
    "&:hover": {
      backgroundColor: primaryBlue,
      cursor: "pointer",
    },
  },
  typeHeader: {
    color: "white",
    fontSize: 17,
  },
  paperStyleInput: {
    width: "90%",
    margin: "1% auto",
  },
  divStyle: {
    paddingTop: "3%",
    display: "flex",
    justifyContent: "space-around",
  },
  paperStyleSummary: {
    width: "90%",
    margin: "1% auto",
  },
  paperStyleChart: {
    width: "50%",
    margin: "1% auto",
  },
  chartDivStyle: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
  buttonStyle: {
    margin: "3% auto",
    backgroundColor: "#68BA54",
    color: "white",
  },
}));
const PurchasePage = (props) => {
  const classes = useStyles();
  const [view, setView] = useState();

  const switchViews = () => {
    switch (view) {
      case "SingleState":
        return (
          <Grid className={classes.gridStyle}>
            <BackBtn setView={setView} />
            <SingleStateView />
          </Grid>
        );
      case "Regional":
        return (
          <Grid className={classes.gridStyle}>
            <BackBtn setView={setView} />
            <RegionalView />
          </Grid>
        );
      default:
        return (
          <Grid className={classes.gridStyle}>
            <Typography
              variant="h4"
              component="h4"
              className={classes.headerStyle}
              gutterBottom
            >
              Choose Subscription's Type
            </Typography>
            <Box className={classes.typeContainer}>
              <SingleState setView={setView} />

              <Regional setView={setView} />

              <National />
            </Box>
          </Grid>
        );
    }
  };

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main opened="purchase" />
        {switchViews()}
      </div>
    </div>
  );
};

export default PurchasePage;
