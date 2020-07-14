import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  inputStyle: {
    width: "15%",
  },
}));
const PurchasePage = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    props.setType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <FormControl className={classes.inputStyle}>
      <InputLabel id="demo-customized-select-label">Type</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
        value={props.type}
      >
        <MenuItem value={1}>Basic</MenuItem>
        <MenuItem value={2}>Premium</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PurchasePage;
