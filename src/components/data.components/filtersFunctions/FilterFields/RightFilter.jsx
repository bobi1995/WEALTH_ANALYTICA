import React, { useState, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DashBoardFunctions from "../../dashboardFunctions/functions";
import FilterExtract from "../../commonFunctions/commonExtracts";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RightFilters = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  return (
    <div style={{ marginBottom: "5%", marginLeft: "1%" }}>
      <Autocomplete
        id="checkboxes-tags-demo"
        options={states}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
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
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="States"
            placeholder="Favorites"
            onChange={console.log("here")}
          />
        )}
      />
    </div>
  );
};

const states = FilterExtract.extractPaidFullName();

export default RightFilters;
