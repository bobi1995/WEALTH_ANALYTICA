import React, { useState } from "react";
import StatesField from "./RightFilter/StatesField";
import CityField from "./RightFilter/CityField";
import { Button, Box, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import YearField from "./RightFilter/YearField";
import searchFunction from "../searchFunction";
import BusinessCode from "./RightFilter/BusinessCodes";
import PlanEntity from "./RightFilter/PlanEntity";
import BenefitType from "./RightFilter/BenefitType";
import Participants from "./RightFilter/Participants";
import Income from "./RightFilter/Income";
import TotalParticipants from "./RightFilter/totals/TotalParticipants";
import TotalAssets from "./RightFilter/totals/TotalAssets";
import NameField from "./RightFilter/Name";
import { makeStyles } from "@material-ui/core/styles";
import { lastYear } from "../../../../global/Years";
import { primaryBlue } from "../../../../global/Colors";

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
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  subContainer: {
    width: "33%",
    marginBottom: "3%",
    border: `3px solid ${primaryBlue}`,
    padding: "1%",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "50%",
    margin: "0 auto",
  },
  headerStyle: {
    color: primaryBlue,
    fontSize: "25px",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Baskervville",
    marginBottom: "1%",
  },
}));

const RightFilters = (props) => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedYear, setSelectedYear] = useState(lastYear);
  const [businessCode, setBusinessCode] = useState("");
  const [planEntity, setPlanEntity] = useState("");
  const [benefitType, setBenefitType] = useState([]);
  const [minPart, setMinPart] = useState("");
  const [maxPart, setMaxPart] = useState("");
  const [totalMinPart, setTotalMinPart] = useState("");
  const [totalMaxPart, setTotalMaxPart] = useState("");
  const [totalMinAssets, setTotalMinAssets] = useState("");
  const [totalMaxAssets, setTotalMaxAssets] = useState("");
  const [minIncome, setMinIncome] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  const [sponsor, setSponsor] = useState("");

  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.subContainer}>
          <Typography className={classes.headerStyle}>Main Metrics</Typography>
          <YearField setYear={(year) => setSelectedYear(year)} />
          <Box
            style={{
              width: "85%",
              margin: "1% auto",
            }}
          >
            <StatesField setState={(state) => setSelectedState(state)} />
          </Box>

          <Box
            style={{
              width: "85%",
              margin: "1% auto",
            }}
          >
            <CityField
              state={selectedState}
              setCity={(city) => setSelectedCity(city)}
            />
          </Box>
          <Box
            style={{
              width: "85%",
              margin: "1% auto",
            }}
          >
            <BusinessCode
              setCode={(code) => {
                setBusinessCode(code);
              }}
            />
          </Box>
          <NameField setSponsor={(sponsor) => setSponsor(sponsor)} />
        </Box>

        <Box className={classes.subContainer}>
          <Typography className={classes.headerStyle}>Participants</Typography>
          <Participants
            setMinPart={(minPart) => setMinPart(minPart)}
            setMaxPart={(maxPart) => setMaxPart(maxPart)}
          />
          <TotalParticipants
            setTotalMinPart={(minPart) => setTotalMinPart(minPart)}
            setTotalMaxPart={(maxPart) => setTotalMaxPart(maxPart)}
          />

          <Typography
            className={classes.headerStyle}
            style={{ marginTop: "5%" }}
          >
            Assets
          </Typography>
          <Income
            setMinIncome={(minIncome) => setMinIncome(minIncome)}
            setMaxIncome={(maxIncome) => setMaxIncome(maxIncome)}
          />
          <TotalAssets
            setTotalMinAssets={(minIncome) => setTotalMinAssets(minIncome)}
            setTotalMaxAssets={(maxIncome) => setTotalMaxAssets(maxIncome)}
          />
        </Box>

        <Box className={classes.subContainer}>
          <BenefitType setBenefit={(type) => setBenefitType(type)} />
          <PlanEntity setEntity={(entity) => setPlanEntity(entity)} />
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
              maxIncome,
              totalMinPart,
              totalMaxPart,
              totalMinAssets,
              totalMaxAssets,
              sponsor
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
              maxIncome,
              totalMinPart,
              totalMaxPart,
              totalMinAssets,
              totalMaxAssets,
              sponsor
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
