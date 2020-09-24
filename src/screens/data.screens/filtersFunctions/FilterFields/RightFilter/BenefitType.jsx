import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [benefitType, setBenefitType] = React.useState("");

  const handleChange = (event) => {
    setBenefitType(event.target.value);
    props.setBenefit(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <FormControl className={classes.formControl}>
        <InputLabel id="benefit-type-controlbox-label">Benefit Type</InputLabel>
        <Select
          labelId="benefit-type-controlbox-label"
          id="benefit-type-controlbox"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={benefitType}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Define Benefit Pension</MenuItem>
          <MenuItem value={2}>Defined Contribution Pension</MenuItem>
          <MenuItem value={3}>Welfare</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
