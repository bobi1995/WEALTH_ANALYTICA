import React, { useState, useEffect } from "react";
import StatesField from "./RightFilter/StatesField";
import CityField from "./RightFilter/CityField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import YearField from "./RightFilter/YearField";
import searchFunction from "../searchFunction";
import BusinessCode from "./RightFilter/BusinessCodes";
import PlanEntity from "./RightFilter/PlanEntity";
import BenefitType from "./RightFilter/BenefitType";
const RightFilters = (props) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2018);
  const [businessCode, setBusinessCode] = useState("");
  const [planEntity, setPlanEntity] = useState("");
  const [benefitType, setBenefitType] = useState("");
  const [symbol, setSymbol] = React.useState("");
  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <StatesField setState={(state) => setSelectedState(state)} />
      <CityField
        state={selectedState}
        setCity={(city) => setSelectedCity(city)}
      />
      <YearField setYear={(year) => setSelectedYear(year)} />
      <BusinessCode
        setCode={(code) => {
          setBusinessCode(code);
        }}
      />
      <div style={{ display: "flex" }}>
        <PlanEntity setEntity={(entity) => setPlanEntity(entity)} />
        <BenefitType
          setBenefit={(type) => setBenefitType(type)}
          setSymbol={(symbol) => setSymbol(symbol)}
        />
      </div>
      <Button
        disabled={selectedState == "" ? true : false}
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={async () => {
          props.setLoader(true);
          const a = await searchFunction(
            selectedYear,
            selectedState,
            selectedCity,
            businessCode,
            planEntity,
            benefitType,
            symbol
          );
          props.getResults(a);
          props.setLoader(false);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default RightFilters;
