import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
  },
}));

const Name = ({ setSponsor }) => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    setSponsor(event.target.value);
  };
  return (
    <TextField
      className={classes.root}
      id="outlined-basic"
      label="Sponsor Name"
      variant="outlined"
      onChange={handleChange}
      value={name}
    />
  );
};

export default Name;
