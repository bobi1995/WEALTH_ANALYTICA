import React, { useState, useEffect } from "react";
import Datanavbar from "../../DataNavbar";
import Magellan from "../../Magellan";
import Main from "../Main";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import apiAddress from "../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

import StateSelect from "./PurchasePage/StateSelect";
import TypeSelect from "./PurchasePage/TypeSelect";
import QuantitySelect from "./PurchasePage/QuantitySelect";
import PurchaseTable from "./PurchasePage/PurchaseTable";

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    width: "100%",
    textAlign: "center",
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
    color: "#378FC3",
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
  const [selectedState, setSelectedState] = useState([""]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setSelectedQuantity("1");
    setSelectedState("");
    setSelectedType("");
  }, [data]);

  const handleClick = () => {
    setData([
      ...data,
      {
        state: selectedState,
        type: selectedType,
        quantity: selectedQuantity,
      },
    ]);
  };
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: "#F4F6F8" }}>
        <Main opened="purchase" />
        <Grid className={classes.gridStyle}>
          <Typography
            variant="h2"
            component="h2"
            className={classes.headerStyle}
            gutterBottom
          >
            Purchase Subscriptions
          </Typography>
          <Paper className={classes.paperStyleInput}>
            <div className={classes.divStyle}>
              <StateSelect
                state={selectedState}
                setState={(state) => setSelectedState(state)}
              />
              <TypeSelect
                type={selectedType}
                setType={(type) => setSelectedType(type)}
              />
              <QuantitySelect
                quantity={selectedQuantity}
                setQuantity={(quantity) => setSelectedQuantity(quantity)}
              />
            </div>

            <Button
              disabled={
                selectedQuantity && selectedState && selectedType ? false : true
              }
              variant="contained"
              id="right-filter-btn"
              className={classes.buttonStyle}
              startIcon={<AddIcon />}
              onClick={handleClick}
            >
              Add
            </Button>
          </Paper>
          {data ? (
            <Paper className={classes.paperStyleInput}>
              <PurchaseTable data={data} setData={(data) => setData(data)} />
            </Paper>
          ) : (
            ""
          )}
        </Grid>
      </div>
    </div>
  );
};

export default PurchasePage;