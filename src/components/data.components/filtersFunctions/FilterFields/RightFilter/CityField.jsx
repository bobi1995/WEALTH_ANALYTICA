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
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async function fetchData() {
      const response = await axios
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
    return () => {
      active = false;
    };
  }, [loading]);
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
    <div style={{ marginBottom: "5%", marginLeft: "1%" }}>
      <Autocomplete
        disabled={props.state == "" ? true : false}
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

export default CityField;
