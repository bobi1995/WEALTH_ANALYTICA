import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  label: {
    display: "flex",
  },
}));

export default function CheckboxesGroup({ state, setSelectedState }) {
  const classes = useStyles();

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (state.includes(value)) {
      return state.splice(state.indexOf(value), 1);
    } else return setSelectedState([...state, value]);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" style={{ textAlign: "center" }}>
          Assign what to export
        </FormLabel>
        <FormGroup>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="1" value="1" />
                }
                label="Financial"
                className={classes.label}
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="2" value="2" />
                }
                className={classes.label}
                label="Investments"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="3" value="3" />
                }
                className={classes.label}
                label="Participants"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="4" value="4" />
                }
                className={classes.label}
                label="Statistics"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="5" value="5" />
                }
                className={classes.label}
                label="Service Providers"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="6" value="6" />
                }
                className={classes.label}
                label="Alerts"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="7" value="7" />
                }
                className={classes.label}
                label="Healthcare"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="8" value="8" />
                }
                className={classes.label}
                label="Utilization"
              />
            </Box>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="9" value="9" />
                }
                className={classes.label}
                label="Compliance"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="10" value="10" />
                }
                className={classes.label}
                label="Accountants"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="11" value="11" />
                }
                className={classes.label}
                label="Benefit Types"
              />
              <FormControlLabel
                control={
                  <Checkbox onChange={handleChange} name="12" value="12" />
                }
                className={classes.label}
                label="Diagnostics"
              />
            </Box>
          </Box>
        </FormGroup>
      </FormControl>
    </div>
  );
}
