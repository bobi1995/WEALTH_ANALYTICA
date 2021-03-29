import React, { useState, useEffect } from "react";
import { Box, Typography, makeStyles, TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import BuildIcon from "@material-ui/icons/Build";
import apiAddress from "../../../global/endpointAddress";
import { lastYear } from "../../../global/Years";
import axios from "axios";
import Table from "./Retirement/Table";
import AlerBox from "../../../components/alertBox";
import PreCalculatedTable from "./Retirement/PreCalculatedTable";
import Loader from "../../../components/plainCicularLoader";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
  },
  tablesContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3%",
  },
  inputsContainer: {
    marginBottom: "5%",
    marginTop: "3%",
  },
  inputsContainerAll: { width: "35%" },
  tableContainer: { width: "55%" },
  individualInput: {
    width: "70%",
  },
  table: {
    width: "40%",
    minWidth: 650,
  },
});

const Retirement = (props) => {
  const classes = useStyles();
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [results, setResults] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const [preCalculated, setPreCalculated] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `${apiAddress}/api/SmallCompanies/GetRetirement?companyID=${props.companyID}&minYear=2017&maxYear=${lastYear}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setPreCalculated(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

        setAlertMessage(
          "For some reason we could not find the desired results."
        );
      });
  }, [props.companyID]);

  const handleButtonClick = () => {
    console.log(
      `${apiAddress}/api/SmallCompanies/GetRetirement?companyID=${props.companyID}&minYear=2017&maxyear=${lastYear}&estEmlployeeContrib=${first}&replacementIncomeRate=${second}&expROR=${third}`
    );
    axios({
      method: "get",
      url: `${apiAddress}/api/SmallCompanies/GetRetirement?companyID=${props.companyID}&minYear=2017&maxyear=${lastYear}&estEmlployeeContrib=${first}&replacementIncomeRate=${second}&expROR=${third}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        setAlertMessage(
          "For some reason we could not find the desired results."
        );
      });
  };

  return (
    <Box>
      <Box className={classes.headingContainer}>
        {/* <Typography component="h4" variant="h4" className={classes.heading}>
          Retirement Readiness
        </Typography> */}
        <Box className={classes.tablesContainer}>
          <Box className={classes.inputsContainerAll}>
            <Typography component="h4" variant="h4" className={classes.heading}>
              Enter Metrics
            </Typography>
            <Box className={classes.inputsContainer}>
              <TextField
                onChange={(newText) => setFirst(newText.target.value)}
                className={classes.individualInput}
                label="Estimated Employee Contrib. Rate Per Year"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Box>

            <Box className={classes.inputsContainer}>
              <TextField
                onChange={(newText) => setSecond(newText.target.value)}
                className={classes.individualInput}
                label="Replacement Income Rate"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Box>

            <Box className={classes.inputsContainer}>
              <TextField
                onChange={(newText) => setThird(newText.target.value)}
                className={classes.individualInput}
                label="Expected Rate Of Return"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<BuildIcon />}
                onClick={handleButtonClick}
                disabled={!first || !second || !third}
              >
                Calculate
              </Button>
            </Box>
          </Box>

          <Box className={classes.tableContainer}>
            {loading ? (
              <Loader />
            ) : preCalculated.length > 0 ? (
              <PreCalculatedTable data={preCalculated} />
            ) : (
              "No Results to be displayed"
            )}
            {results ? (
              <Table data={results} />
            ) : (
              <Typography
                component="h4"
                variant="h4"
                className={classes.heading}
              >
                Calculate Retirement Analytics as per your Metrics
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default Retirement;
