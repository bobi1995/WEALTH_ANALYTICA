import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import states from "../../../../../global/variables";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: "25%",
  },
}));
const PurchasePage = (props) => {
  const classes = useStyles();
  const handlePick = (e, v) => {
    props.setState(v);
  };
  return (
    <Autocomplete
      className={classes.inputStyle}
      options={states}
      getOptionLabel={(option) => (option ? option.name : "")}
      onChange={handlePick}
      defaultValue={props.state ? props.state : ""}
      renderInput={(params) => (
        <TextField {...params} label="State" variant="outlined" />
      )}
    />
  );
};

export default PurchasePage;
