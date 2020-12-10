import React, { useState, useEffect } from "react";
import Datanavbar from "./DataNavbar";
import IndustryInput from "../../components/IndustryInput";
import StateInput from "../../components/AllStatesInput";
import ParticipantsFilter from "./filtersFunctions/FilterFields/RightFilter/Participants";
import IncomeFilter from "./filtersFunctions/FilterFields/RightFilter/Income";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { primaryBlue } from "../../global/Colors";
import SearchIcon from "@material-ui/icons/Search";
import BenchmarkTable from "./Benchmark/BenchmarkTable";
import axios from "axios";
import { lastYear } from "../../global/Years";
import apiAddress from "../../global/endpointAddress";
import AlerBox from "../../components/alertBox";
import Loader from "../../components/plainCicularLoader";
import { codes as serviceCodes } from "../../global/ServiceCodes";

const useStyles = makeStyles({
  filterBox: {
    width: "90%",
    margin: "0 auto",
    border: `3px solid ${primaryBlue}`,
    borderRadius: 10,
    marginTop: "3%",
    padding: "1%",
  },
  industryStateBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  dropdown: {
    width: "45%",
  },
  participnatIncomeBox: {
    width: "45%",
    border: `1px solid ${primaryBlue}`,
    borderRadius: 10,
    marginTop: "3%",
    padding: "1%",
  },
  typography: {
    textAlign: "center",
    color: primaryBlue,
  },
  buttonBox: { margin: "3% auto", textAlign: "center" },
  buttonStyle: {
    width: "15%",
    backgroundColor: "#68BA54",
    color: "white",
  },
  heading: {
    color: primaryBlue,
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 35,
    marginBottom: "3%",
    marginTop: "3%",
  },
});

const Benchmark = (props) => {
  const classes = useStyles();
  const [industry, setIndustry] = useState("");
  const [state, setState] = useState("");
  const [minPart, setMinPart] = useState("");
  const [maxPart, setMaxPart] = useState("");
  const [minIncome, setMinIncome] = useState("");
  const [maxIncome, setMaxIncome] = useState("");
  const [results, setResults] = useState();
  const [industryRes, setIndustryRes] = useState();
  const [flag, setFlag] = useState(false);
  const [industryFlag, setIndustryFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  let url = "";

  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetCompanyBenchmark?companyID=${props.match.params.CompanyID}&minYear=2017&maxYear=${lastYear}`;
  }
  useEffect(() => {
    setFlag(true);
    axios({
      method: "get",
      url: url,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + sessionStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
        setFlag(false);
      })
      .catch((err) => {
        setAlertMessage(
          "For some reason we could not find the desired results."
        );
      });
  }, [url]);

  useEffect(() => {
    if (results) {
      results.ServicesByYear.map((year) =>
        year.Services.map((service) => {
          return serviceCodes.map((code, index) => {
            if (code.Service2 === service.Service2) {
              return (serviceCodes[index][year.Year] = service.Amount);
            } else return null;
          });
        })
      );

      const categories = serviceCodes.filter((el) => el.parent);
      categories.map((cat) => {
        return serviceCodes.map((service) => {
          if (service.parent !== true && service.Service3 === cat.Service3) {
            if (service[2017]) {
              cat.overall2017 = cat.overall2017 + service[2017];
            }
            if (service[2018]) {
              cat.overall2018 = cat.overall2018 + service[2018];
            }
            if (service[2019]) {
              cat.overall2019 = cat.overall2019 + service[2019];
            }
            return null;
          } else return null;
        });
      });
    }
  }, [results]);

  useEffect(() => {
    if (industryRes) {
      industryRes.ServicesByYear[0].Services.map((service) => {
        return serviceCodes.map((code, index) => {
          if (code.Service2 === service.Service2) {
            return (serviceCodes[index].industry = service.Amount);
          } else return null;
        });
      });
    }

    const categories = serviceCodes.filter((el) => el.parent);
    categories.map((cat) => {
      cat.industry = 0;
      return serviceCodes.map((service) => {
        if (service.parent !== true && service.Service3 === cat.Service3) {
          if (service.industry) {
            cat.industry = cat.industry + service.industry;
          }
          return null;
        } else return null;
      });
    });
  }, [industryRes]);

  const applyFilter = () => {
    setFlag(true);
    setIndustryFlag(true);
    axios({
      method: "get",
      url: `http://pensionswebapi-test.azurewebsites.net/api/SmallCompanies/GetFilterBenchmark?year=${lastYear}&minAssets=${minIncome}&maxAssets=${maxIncome}&minPart=${minPart}&maxPart=${maxPart}&businessCode=${industry}&state=${state}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + sessionStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setIndustryRes(res.data);
        setFlag(false);
      })
      .catch((err) => {
        setAlertMessage(
          "For some reason we could not find the desired results."
        );
      });
  };

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Benchmark</h1>
      </section>
      <Box className={classes.filterBox}>
        <Box className={classes.industryStateBox}>
          <IndustryInput
            className={classes.dropdown}
            setIndustry={setIndustry}
            elevation={1}
          />
          <StateInput className={classes.dropdown} setState={setState} />
        </Box>
        <Box className={classes.industryStateBox}>
          <Box className={classes.participnatIncomeBox}>
            <Typography className={classes.typography} variant="h5">
              Participants
            </Typography>
            <ParticipantsFilter
              setMinPart={(minPart) => setMinPart(minPart)}
              setMaxPart={(maxPart) => setMaxPart(maxPart)}
            />
          </Box>
          <Box className={classes.participnatIncomeBox}>
            <Typography className={classes.typography} variant="h5">
              Assets
            </Typography>
            <IncomeFilter
              setMinIncome={(minIncome) => setMinIncome(minIncome)}
              setMaxIncome={(maxIncome) => setMaxIncome(maxIncome)}
            />
          </Box>
        </Box>
        <Box className={classes.buttonBox}>
          <Button
            variant="contained"
            id="right-filter-btn"
            className={classes.buttonStyle}
            startIcon={<SearchIcon />}
            disabled={flag}
            onClick={applyFilter}
          >
            Apply Filters
          </Button>
        </Box>
      </Box>
      {flag ? (
        <Loader />
      ) : results ? (
        <Box>
          <Box>
            <Typography className={classes.heading}>
              {results.CompanyName}
            </Typography>
          </Box>
          <BenchmarkTable data={serviceCodes} industryFlag={industryFlag} />
        </Box>
      ) : (
        ""
      )}
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Benchmark;
