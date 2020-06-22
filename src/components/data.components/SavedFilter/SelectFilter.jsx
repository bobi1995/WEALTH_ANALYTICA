import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import apiAddress from "../../../global/endpointAddress";
import { makeStyles } from "@material-ui/styles";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyle = makeStyles(() => ({
  filterSelection: {
    width: "30%",
    margin: "3% auto",
  },
}));

const SelectFilter = (props) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const loading = open && filters.length === 0;

  const classes = useStyle();

  useEffect(() => {
    const GetFilterNames = () => {
      const url = `${apiAddress}/api/Users/GetUserFilters`;
      const filterOptions = document.getElementById("filter-option");

      axios
        .get(url, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          setFilters(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    GetFilterNames();
  }, []);

  const onFilterSelect = (e, v) => {
    if (v) {
      props.setFilter(v);
      setOpen(false);
    }
  };

  return (
    <div className={classes.filterSelection}>
      <Autocomplete
        disabled={props.flag ? true : false}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        id="city-checkbox"
        loading={loading}
        options={filters}
        disableCloseOnSelect
        onChange={onFilterSelect}
        getOptionLabel={(option) => option.FilterName}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.FilterName}
          </React.Fragment>
        )}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Filters"
            placeholder="Choose filter"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SelectFilter;
