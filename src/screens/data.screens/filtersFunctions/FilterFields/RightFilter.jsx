import React, { useState } from "react";
import StatesField from "./RightFilter/StatesField";
import CityField from "./RightFilter/CityField";
import { Button, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import YearField from "./RightFilter/YearField";
import searchFunction from "../searchFunction";
import BusinessCode from "./RightFilter/BusinessCodes";
import PlanEntity from "./RightFilter/PlanEntity";
import BenefitType from "./RightFilter/BenefitType";
import Participants from "./RightFilter/Participants";
import Income from "./RightFilter/Income";
import { makeStyles } from "@material-ui/core/styles";
import { lastYear } from "../../../../global/Years";

const useStyles = makeStyles(() => ({
  buttonStyle: {
    width: "25%",
    backgroundColor: "#68BA54",
    color: "white",
  },
  saveButton: {
    width: "25%",
  },
  mainContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  subContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "1%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    margin: "0 auto",
  },
}));

const RightFilters = (props) => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedYear, setSelectedYear] = useState(lastYear);
  const [businessCode, setBusinessCode] = useState("");
  const [planEntity, setPlanEntity] = useState("");
  const [benefitType, setBenefitType] = useState("");
  const [minPart, setMinPart] = useState("");
  const [maxPart, setMaxPart] = useState("");
  const [minIncome, setMinIncome] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Box className={classes.subContainer}>
          <YearField setYear={(year) => setSelectedYear(year)} />

          <Participants
            setMinPart={(minPart) => setMinPart(minPart)}
            setMaxPart={(maxPart) => setMaxPart(maxPart)}
          />
          <Income
            setMinIncome={(minIncome) => setMinIncome(minIncome)}
            setMaxIncome={(maxIncome) => setMaxIncome(maxIncome)}
          />
          {/*  */}
        </Box>
        <Box className={classes.subContainer}>
          <StatesField setState={(state) => setSelectedState(state)} />
          <CityField
            state={selectedState}
            setCity={(city) => setSelectedCity(city)}
          />
          {/* */}
          <BusinessCode
            setCode={(code) => {
              setBusinessCode(code);
            }}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "24%",
            }}
          >
            <PlanEntity setEntity={(entity) => setPlanEntity(entity)} />
            <BenefitType setBenefit={(type) => setBenefitType(type)} />
          </Box>
        </Box>
      </Box>

      <Box className={classes.buttonContainer}>
        <Button
          disabled={props.loader ? true : selectedState === "" ? true : false}
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
            props.setUrl(url);
            props.setLoader(false);
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default RightFilters;
