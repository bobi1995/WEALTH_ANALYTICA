import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: "15%",
  },
}));
const PurchasePage = (props) => {
  const classes = useStyles();
  const isBusiness = sessionStorage.getItem("isBusiness");

  const handleChange = (e) => {
    props.setQuantity(e.target.value);
  };
  return (
    <TextField
      disabled={isBusiness == "true" ? false : true}
      className={classes.inputStyle}
      id="standard-number"
      label="Quantity"
      type="number"
      inputProps={{
        min: "1",
      }}
      value={props.quantity}
      onChange={handleChange}
    />
  );
};

export default PurchasePage;
