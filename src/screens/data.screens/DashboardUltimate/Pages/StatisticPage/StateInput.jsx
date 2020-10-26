import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FilterExtract from "../../..//commonFunctions/commonExtracts";
import { makeStyles } from "@material-ui/core/styles";
import { primaryBlue } from "../../../../../global/Colors";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  content: {
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: primaryBlue,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  differenceIcon: {
    color: primaryBlue,
  },
  differenceValue: {
    color: primaryBlue,
    marginRight: theme.spacing(1),
  },
}));

const StatesField = (props) => {
  const { className } = props;

  const classes = useStyles();
  const [states, setStates] = useState([]);

  const onStateChange = (e, v) => {
    if (v) {
      props.setState(v.abbriviation);
    } else {
      props.setState([]);
    }
  };
  useEffect(() => {
    setStates(FilterExtract.paidFullNameDASHBOARD());
  }, []);

  return (
    <Card className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Autocomplete
            id="checkboxes-tags-demo"
            options={states}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            onChange={onStateChange}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />

                {option.name}
              </React.Fragment>
            )}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="State"
                placeholder="Enter state"
              />
            )}
          />
        </Grid>
        <div className={classes.difference}>
          <ArrowDownwardIcon className={classes.differenceIcon} />

          <Typography className={classes.caption} variant="caption">
            Choose desired state
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatesField;
