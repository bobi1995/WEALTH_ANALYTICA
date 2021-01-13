import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import apiAddress from "../../../../../global/endpointAddress";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CityField = (props) => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && cities.length === 0;

  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    if (props.state) {
      (async function fetchData() {
        await axios
          .get(`${apiAddress}/api/Cities/Get?state=${props.state}`, {
            headers: {
              Authorization: "Basic " + sessionStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((result) => {
            setCities(result.data);
          })
          .catch((e) => {
            console.log(e);
          });
      })();
    }
  }, [loading, props.state]);

  useEffect(() => {
    if (!open) {
      setCities([]);
    }
  }, [open]);

  const onCityChange = (e, v) => {
    if (v) {
      props.setCity(v);
    }
  };

  return (
    <form style={{ width: "24%" }}>
      <Autocomplete
        disabled={props.state === "" ? true : false}
        multiple
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        id="city-checkbox"
        loading={loading}
        options={cities}
        disableCloseOnSelect
        onChange={onCityChange}
        getOptionLabel={(option) => option}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Cities"
            placeholder="Enter cities"
            autoComplete="off"
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
    </form>
  );
};

export default CityField;
