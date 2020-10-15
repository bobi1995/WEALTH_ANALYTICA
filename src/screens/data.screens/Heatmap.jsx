import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import { lastYear } from "../../global/Years";
import apiAddress from "../../global/endpointAddress";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@material-ui/core/Box";
import ScoreIcon from "@material-ui/icons/Score";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExtensionIcon from "@material-ui/icons/Extension";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import Utilization from "./Heatmap/Utilization";
import CircularProgress from "@material-ui/core/CircularProgress";
import Accountant from "./Heatmap/Accountant";
import Compliance from "./Heatmap/Compliance";
import BenefitTypes from "./Heatmap/BenefitTypes";
import Touches from "./Heatmap/Touches";
import {
  UtilizationExtract,
  ComplianceExtract,
  AccountantExtract,
  BenefitTypesExtract,
  TouchesExtract,
} from "./Heatmap/HeatmapDataExtract";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: "orange",
  },
  errorStyle: {
    color: "#388fc2",
    textAlign: "center",
    fontSize: 40,
    fontFamily: "Slabo,serif",
    marginTop: "5%",
  },
}));

const Heatmap = (props) => {
  const [results, setResults] = useState();
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [err, setErr] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetHeatmap?&CompanyID=${props.match.params.CompanyID}&minYear=2015&maxYear=${lastYear}`;
  }
  useEffect(() => {
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
      })
      .catch((err) => {
        setErr(err.response.data);
      });
  }, [url]);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img" data-html2canvas-ignore>
        <h1 className="clientDash-header1">Heatmap</h1>
      </section>
      <Box className={classes.root}>
        <TabContext value={value}>
          <AppBar position="static">
            <TabList onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Utilization" value="1" icon={<ScoreIcon />} />
              <Tab label="Compliance" value="2" icon={<EqualizerIcon />} />
              <Tab
                label="Accountant"
                value="3"
                icon={<SupervisorAccountIcon />}
              />
              <Tab label="Benefit Types" value="4" icon={<ExtensionIcon />} />
              <Tab label="Touches" value="5" icon={<TouchAppIcon />} />
            </TabList>
          </AppBar>
          {results ? (
            <Box>
              <TabPanel value="1">
                <Utilization data={UtilizationExtract(results.CompanyData)} />
              </TabPanel>
              <TabPanel value="2">
                <Compliance data={ComplianceExtract(results.CompanyData)} />
              </TabPanel>
              <TabPanel value="3">
                <Accountant data={AccountantExtract(results.CompanyData)} />
              </TabPanel>
              <TabPanel value="4">
                <BenefitTypes data={BenefitTypesExtract(results.CompanyData)} />
              </TabPanel>
              <TabPanel value="5">
                <Touches data={TouchesExtract(results.CompanyData)} />
              </TabPanel>
            </Box>
          ) : err ? (
            <Box className={classes.errorStyle}>{err}</Box>
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
        </TabContext>
      </Box>
    </div>
  );
};

export default Heatmap;
