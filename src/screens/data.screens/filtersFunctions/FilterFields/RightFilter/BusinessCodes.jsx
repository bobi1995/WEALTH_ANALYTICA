import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import businessCodes from "../../../../../global/businessCode";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const BusinessCode = (props) => {
  const onCodeChange = (e, v) => {
    if (v) {
      props.setCode(v.BusinessCode);
    } else {
      props.setCode("");
    }
  };

  return (
    <form>
      <Autocomplete
        id="business-code-box"
        options={businessCodes}
        disableCloseOnSelect
        getOptionLabel={(option) => option.IndustryName}
        onChange={onCodeChange}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />

            {option.IndustryName}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Industry"
            placeholder="Enter industry"
            autoComplete="off"
          />
        )}
      />
    </form>
  );
};

export default BusinessCode;
