import React, { useState, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FilterExtract from "../commonFunctions/commonExtracts";
import { makeStyles } from "@material-ui/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const styles = makeStyles(() => ({
  mainStyle: {
    width: "25%",
    margin: "5% auto",
  },
}));
const states = FilterExtract.paidFullNameDASHBOARD();

const StatesField = (props) => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const onStateChange = (e, v) => {
    if (v) {
      props.setState(v.abbriviation);
    } else {
      props.setState([]);
    }
  };

  return (
    <div className={classes.mainStyle}>
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
    </div>
  );
};

export default StatesField;
