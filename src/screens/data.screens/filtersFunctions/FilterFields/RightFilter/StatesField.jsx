import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FilterExtract from "../../../commonFunctions/commonExtracts";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const StatesField = (props) => {
  const states = FilterExtract.extractPaidFullName();

  const onStateChange = (e, v) => {
    if (v) {
      props.setState(v.abbriviation);
    } else {
      props.setState([]);
    }
  };

  return (
    <form>
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
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="State"
            placeholder="Enter state"
            autoComplete="off"
          />
        )}
      />
    </form>
  );
};

export default StatesField;
