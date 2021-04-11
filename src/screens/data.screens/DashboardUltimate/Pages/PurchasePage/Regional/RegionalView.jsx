import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TypeSelect from "../SingleState/components/TypeSelect";
import USAMap from "react-usa-map";
import { Typography, Box } from "@material-ui/core";
import { primaryBlue } from "./../../../../../../global/Colors";
import PurchaseTable from "./components/PurchaseTable";
import PayPal from "./components/PayPal";

const useStyles = makeStyles((theme) => ({
  paperStyleInput: {
    width: "90%",
    margin: "1% auto",
  },
  divStyle: {
    paddingTop: "3%",
    display: "flex",
    justifyContent: "space-around",
  },
  buttonStyle: {
    margin: "3% auto",
    backgroundColor: "#68BA54",
    color: "white",
  },
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
  },
}));
const RegionalView = (props) => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const mapHandler = (event) => {
    if (selectedState.includes(event.target.dataset.name)) {
      const index = selectedState.indexOf(event.target.dataset.name);
      const newArr = selectedState;
      newArr.splice(index, 1);
      setSelectedState([...newArr]);
    } else if (selectedState.length === 3) {
      alert("Cannot select more than 3 States for Regional Subscription");
    } else setSelectedState([...selectedState, event.target.dataset.name]);
  };
  const statesFilling = (states) => {
    const output = states.reduce((acc, val) => {
      acc[val] = {
        fill: "blue",
      };
      return acc;
    }, {});
    return output;
  };
  useEffect(() => {
    if (selectedState.length === 3) {
      var element = document.getElementById("box");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedState, selectedType]);
  return (
    <div>
      <Paper className={classes.paperStyleInput}>
        <div className={classes.divStyle}>
          <TypeSelect
            type={selectedType}
            setType={(type) => setSelectedType(type)}
          />
        </div>
        <Box style={{ marginTop: "5%" }}>
          <Typography
            className={classes.headerStyle}
            variant="h5"
            component="h5"
          >
            Please, select desired 3 States
          </Typography>
          <USAMap
            customize={statesFilling(selectedState)}
            onClick={mapHandler}
          />
        </Box>
        {selectedState.length === 3 && selectedType ? (
          <Box>
            <PurchaseTable states={selectedState} type={selectedType} />
            <PayPal states={selectedState} type={selectedType} />
          </Box>
        ) : (
          ""
        )}
      </Paper>
      <Box id="box"></Box>
    </div>
  );
};

export default RegionalView;
