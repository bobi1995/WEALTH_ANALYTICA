import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import UserStates from "./Users/UserStates";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
    paddingBottom: "1%",
  },
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
  },
  statesStyle: {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(40%, 1fr))",
  },
  singleState: {
    textAlign: "center",
    border: "1px solid grey",
    borderRadius: "20px",
  },
  viewButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "orange",
    color: "white",
  },
}));

const FreeStates = () => {
  const classes = useStyles();

  const [results, setResults] = useState("");
  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetCompanyUsers`;

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.mainDiv}>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        Users
      </Typography>

      {results ? (
        <MaterialTable
          style={{ margin: "3%" }}
          title="All Users"
          icons={{
            Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
            Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
            ResetSearch: React.forwardRef((props, ref) => (
              <RotateLeftIcon ref={ref} />
            )),
            SortArrow: ArrowUpward,
            DetailPanel: ChevronRight,
          }}
          columns={[
            {
              field: "FirstName",
              title: "First Name",
              cellStyle: {
                textAlign: "center",
              },
            },
            {
              field: "LastName",
              title: "Last Name",
              cellStyle: {
                textAlign: "center",
              },
            },
            {
              field: "Email",
              title: "Email",
              cellStyle: {
                textAlign: "center",
              },
            },
            {
              field: "View",
              title: "View",
              sorting: false,
              render: (rowData) => <UserStates data={rowData} />,
            },
          ]}
          data={results}
          options={{
            paging: false,
            headerStyle: {
              backgroundColor: "#378FC3",
              color: "#FFF",
              fontSize: "17px",
              textAlign: "center",
              fontWeight: "bold",
            },
          }}
        />
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "15%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading....Please wait
          </p>
        </div>
      )}
    </div>
  );
};

export default FreeStates;
