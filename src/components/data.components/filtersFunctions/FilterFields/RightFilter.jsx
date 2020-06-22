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
import Participants from "./RightFilter/Participants";
import Income from "./RightFilter/Income";
import { makeStyles } from "@material-ui/core/styles";
import SaveFilterDialog from "./RightFilter/SaveFilterDialog";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    margin: "5% 25%",
    width: "50%",
    backgroundColor: "#68BA54",
    color: "white",
  },
  saveButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#008000",
    color: "white",
  },
}));

const RightFilters = (props) => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2018);
  const [businessCode, setBusinessCode] = useState("");
  const [planEntity, setPlanEntity] = useState("");
  const [benefitType, setBenefitType] = useState("");
  const [symbol, setSymbol] = useState("");
  const [minPart, setMinPart] = useState("");
  const [maxPart, setMaxPart] = useState("");
  const [minIncome, setMinIncome] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  const [url, setUrl] = useState("");
  return (
    <div>
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "5%",
        }}
      >
        <PlanEntity setEntity={(entity) => setPlanEntity(entity)} />
        <BenefitType
          setBenefit={(type) => setBenefitType(type)}
          setSymbol={(symbol) => setSymbol(symbol)}
        />
      </div>
      <Participants
        setMinPart={(minPart) => setMinPart(minPart)}
        setMaxPart={(maxPart) => setMaxPart(maxPart)}
      />
      <Income
        setMinIncome={(minIncome) => setMinIncome(minIncome)}
        setMaxIncome={(maxIncome) => setMaxIncome(maxIncome)}
      />

      <Button
        disabled={props.loader ? true : selectedState == "" ? true : false}
        variant="contained"
        id="right-filter-btn"
        className={classes.buttonStyle}
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
            minPart.minimumFormat,
            maxPart,
            minIncome,
            maxIncome
          ).result;
          const url = await searchFunction(
            selectedYear,
            selectedState,
            selectedCity,
            businessCode,
            planEntity,
            benefitType,
            minPart.minimumFormat,
            maxPart,
            minIncome,
            maxIncome
          ).url;
          props.getResults(a);
          setUrl(url);
          props.setLoader(false);
        }}
      >
        Search
      </Button>

      {props.results ? <SaveFilterDialog url={url} /> : ""}
    </div>
  );
};

export default RightFilters;
