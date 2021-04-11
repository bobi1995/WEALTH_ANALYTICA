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
      //prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function TotalParticipants(props) {
  const classes = useStyles();
  const [minTotalParticipants, setMinTotalParticipants] = React.useState("");
  const [maxTotalParticipants, setMaxTotalParticipants] = React.useState("");
  const handleChangeMinimum = (event) => {
    setMinTotalParticipants(event.target.value);
    props.setTotalMaxPart(event.target.value);
  };

  const handleChangeMaximum = (e) => {
    setMaxTotalParticipants(e.target.value);
    props.setTotalMinPart(e.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Min Total Participants"
        value={minTotalParticipants}
        onChange={handleChangeMinimum}
        name="minimumFormat"
        id="Minimum-Participants-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Max Total Participants"
        value={maxTotalParticipants}
        onChange={handleChangeMaximum}
        name="maximumFormat"
        id="Maximum-Participants-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </div>
  );
}
