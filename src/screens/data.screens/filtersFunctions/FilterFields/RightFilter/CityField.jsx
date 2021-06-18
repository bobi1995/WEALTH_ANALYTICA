import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CircularProgress from "@material-ui/core/CircularProgress";
import apiAddress from "../../../../../global/endpointAddress";
import AlerBox from "../../../../../components/alertBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CityField = (props) => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && cities.length === 0;
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!loading) {
      return undefined;
    }
    if (props.state) {
      (async function fetchData() {
        await axios
          .get(`${apiAddress}/api/Cities/Get?state=${props.state}`, {
            headers: {
              Authorization: "Basic " + localStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((result) => {
            setCities(result.data);
          })
          .catch((e) => {
            setAlertMessage(
              "Cannot load cities for this state. Please try again."
            );
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
    <form>
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
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </form>
  );
};

export default CityField;
