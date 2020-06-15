import React, { useState, useEffect } from "react";
import StatesField from "./RightFilter/StatesField";
import CityField from "./RightFilter/CityField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import apiAddress from "../../../../global/endpointAddress";
import searchFunction from "../searchFunction";
import axios from "axios";
const RightFilters = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);

  return (
    <div style={{ marginBottom: "5%" }}>
      <StatesField setState={(state) => setSelectedState(state)} />
      <CityField
        state={selectedState}
        setCity={(city) => setSelectedCity(city)}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={async () => {
          const a = await searchFunction("2018", selectedState, selectedCity);
          console.log(a);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default RightFilters;
