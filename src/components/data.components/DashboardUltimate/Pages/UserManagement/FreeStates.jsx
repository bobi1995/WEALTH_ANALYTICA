import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import common from "../../../commonFunctions/commonExtracts";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
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
  saveButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#008000",
    color: "white",
  },
}));

const FreeStates = () => {
  const classes = useStyles();

  const [results, setResults] = useState("");
  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetRemainingAccounts`;

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
        Free States Available
      </Typography>

      <div className={classes.statesStyle}>
        {results
          ? results.map((el) => (
              <div key={el.State} className={classes.singleState}>
                <Typography
                  variant="h4"
                  component="h4"
                  className={classes.headerStyle}
                  gutterBottom
                >
                  {common.fullNameByAbbr(el.State)} - {el.State}
                </Typography>
                <MaterialTable
                  style={{ margin: "3%" }}
                  title="Free States"
                  icons={{
                    Filter: React.forwardRef((props, ref) => (
                      <SearchIcon ref={ref} />
                    )),
                    Search: React.forwardRef((props, ref) => (
                      <SearchIcon ref={ref} />
                    )),
                    ResetSearch: React.forwardRef((props, ref) => (
                      <RotateLeftIcon ref={ref} />
                    )),
                    SortArrow: ArrowUpward,
                    DetailPanel: ChevronRight,
                  }}
                  columns={[
                    {
                      field: "Type",
                      title: "Type",
                      render: (rowData) =>
                        rowData.Type === 1 ? "Basic" : "Premium",
                      cellStyle: {
                        textAlign: "center",
                      },
                    },
                    {
                      field: "Count",
                      title: "Quantity",
                      cellStyle: {
                        textAlign: "center",
                      },
                    },
                    {
                      field: "ExpireDate",
                      title: "Expires",
                      render: (rowData) => (
                        <Moment format="MMM/DD/YYYY">
                          {rowData.ExpireDate}
                        </Moment>
                      ),
                      cellStyle: {
                        textAlign: "center",
                      },
                    },
                    {
                      field: "Assign",
                      title: "Assign",
                      render: (rowData) => (
                        <Button
                          variant="contained"
                          id="right-filter-btn"
                          className={classes.saveButton}
                          //startIcon={<SaveIcon />}
                          //onClick={handleClickOpen}
                        >
                          Assign
                        </Button>
                      ),
                    },
                  ]}
                  data={el.Details}
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
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default FreeStates;
