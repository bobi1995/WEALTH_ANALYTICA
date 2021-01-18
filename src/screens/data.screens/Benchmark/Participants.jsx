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

export default function Participants(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    minimumFormat: "",
  });
  const [maximumParticipants, setMaximumParticipants] = React.useState("");
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    props.setMinPart({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeMaximum = (e) => {
    setMaximumParticipants(e.target.value);
    props.setMaxPart(e.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        label="Minimum"
        value={values.minimumFormat}
        onChange={handleChange}
        name="minimumFormat"
        id="Minimum-Participants-filter"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
      <TextField
        label="Maximum"
        value={maximumParticipants}
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
