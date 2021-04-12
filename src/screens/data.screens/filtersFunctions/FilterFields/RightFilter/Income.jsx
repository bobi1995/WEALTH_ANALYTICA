import React from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Participants(props) {
  const classes = useStyles();
  const [maxIncome, setMaxIncome] = React.useState("");

  const [minIncome, setMinIncome] = React.useState("");
  const handleChangeMinimum = (e) => {
    setMinIncome(e.target.value);

    props.setMinIncome(e.target.value);
  };

  const handleChangeMaximum = (e) => {
    setMaxIncome(e.target.value);
    props.setMaxIncome(e.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Min Plan Assets"
        value={minIncome}
        onChange={handleChangeMinimum}
        name="minIncome"
        id="Minimum-Income-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Max Plan Assets"
        value={maxIncome}
        onChange={handleChangeMaximum}
        name="maxIncome"
        id="Maximum-Income-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </div>
  );
}