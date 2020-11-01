import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import SelectFilter from "./SavedFilter/SelectFilter";
import Table from "./filtersFunctions/FilterFields/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Box } from "@material-ui/core";
import DeleteBtn from "./SavedFilter/ConformationDialog";
import AlertBox from "../../components/alertBox";

const useStyles = makeStyles({
  buttonBox: {
    textAlign: "center",
  },
});

const SavedFilters = (props) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState();
  const [flag, setFlag] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (filter) {
      setFlag(true);
      axios
        .get(filter.FilterParameters, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          setResults(result.data.Companies);
          setFlag(false);
        })
        .catch((e) => {
          console.log(e);
          setAlertMessage(
            "For some reason we could not find the desired results."
          );
        });
    }
  }, [filter]);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Saved Filters</h1>
      </section>
      <SelectFilter flag={flag} setFilter={(filter) => setFilter(filter)} />
      {results.length > 0 && !flag ? (
        <Box className={classes.buttonBox}>
          <DeleteBtn filter={filter} />
        </Box>
      ) : (
        ""
      )}
      {flag ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "5%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading....Please wait
          </p>
        </div>
      ) : (
        <Table data={results ? results : []} setData={setResults} />
      )}
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default SavedFilters;
