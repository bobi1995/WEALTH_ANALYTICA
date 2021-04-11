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

export default function TotalAssets(props) {
  const classes = useStyles();
  const [maxTotalIncome, setMaxTotalIncome] = React.useState("");

  const [minTotalIncome, setMinTotalIncome] = React.useState("");

  const handleChangeMinimum = (e) => {
    setMinTotalIncome(e.target.value);

    props.setTotalMinAssets(e.target.value);
  };

  const handleChangeMaximum = (e) => {
    setMaxTotalIncome(e.target.value);
    props.setTotalMaxAssets(e.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Min Total Assets"
        value={minTotalIncome}
        onChange={handleChangeMinimum}
        name="minIncome"
        id="Minimum-Income-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Max Total Assets"
        value={maxTotalIncome}
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
