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
import { limegreen } from "../../global/Colors";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CircularProgress from "@material-ui/core/CircularProgress";
import BusinessInfo from "./PlanProfile2/BusinessInfo";
import Financial from "./PlanProfile2/Financial";
import Participants from "./PlanProfile2/Participants";
import Statistics from "./PlanProfile2/Statistics";
import Alerts from "./PlanProfile2/Alerts";
import HealthCare from "./PlanProfile2/HealthCare";
import Plans from "./PlanProfile2/Plans";
import Investment from "./PlanProfile2/Investment";
import Benchmark from "./Benchmark";
import Heatmap from "./Heatmap";
import Diagnostic from "./Diagnostic";

import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArchiveIcon from "@material-ui/icons/Archive";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";

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
  exportTab: {
    backgroundColor: limegreen,
  },
}));

const PlanProfile2 = (props) => {
  const [results, setResults] = useState();
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const [err, setErr] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let url = "";
  if (props.match) {
    url = `${apiAddress}/api/SmallCompanies/GetPlanProfile?&CompanyID=${props.match.params.CompanyID}&minYear=2015&maxYear=${lastYear}`;
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
        <h1 className="clientDash-header1">Plan Design</h1>
      </section>
      <Box className={classes.root}>
        <TabContext value={value}>
          <AppBar position="static">
            <TabList
              variant="scrollable"
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Business Info" value="1" icon={<ContactMailIcon />} />
              <Tab label="Financial" value="2" icon={<MonetizationOnIcon />} />
              <Tab
                label="Investment"
                value="11"
                icon={<AccountBalanceIcon />}
              />

              <Tab
                label="Participants"
                value="3"
                icon={<AccessibilityIcon />}
              />
              <Tab label="Statistics" value="4" icon={<EqualizerIcon />} />
              <Tab label="Alerts" value="5" icon={<ReportProblemIcon />} />
              <Tab label="Health Care" value="6" icon={<FavoriteIcon />} />
              <Tab label="Plans" value="7" icon={<ListAltIcon />} />
              <Tab
                className={classes.exportTab}
                label="Benchmark"
                value="8"
                icon={<ArchiveIcon />}
              />
              <Tab
                className={classes.exportTab}
                label="Heatmap"
                value="9"
                icon={<MapIcon />}
              />
              <Tab
                className={classes.exportTab}
                label="Diagnostic"
                value="10"
                icon={<TimelineIcon />}
              />
            </TabList>
          </AppBar>
          {results ? (
            <Box>
              <TabPanel value="1">
                <BusinessInfo
                  data={results.BusinessInformation}
                  erisa={results.ERISATestCompanyStock}
                  contact={results.Contacts}
                  types={results.PlanSummary}
                  site={results.Website}
                  location={results.Location}
                  companyID={props.match.params.CompanyID}
                />
              </TabPanel>
              <TabPanel value="2">
                <Financial
                  data={results.Statistics}
                  companyID={props.match.params.CompanyID}
                  accountantFirms={results.AccountantFirms}
                />
              </TabPanel>
              <TabPanel value="3">
                <Participants data={results.Statistics} />
              </TabPanel>
              <TabPanel value="4">
                <Statistics data={results.Statistics} />
              </TabPanel>
              <TabPanel value="5">
                <Alerts
                  data={results.Statistics}
                  companyID={props.match.params.CompanyID}
                />
              </TabPanel>
              <TabPanel value="6">
                <HealthCare
                  data={results.Statistics}
                  companyID={props.match.params.CompanyID}
                />
              </TabPanel>
              <TabPanel value="7">
                <Plans types={results.PlanSummary} />
              </TabPanel>
              <TabPanel value="8">
                <Benchmark companyID={props.match.params.CompanyID} />
              </TabPanel>
              <TabPanel value="9">
                <Heatmap companyID={props.match.params.CompanyID} />
              </TabPanel>
              <TabPanel value="10">
                <Diagnostic companyID={props.match.params.CompanyID} />
              </TabPanel>
              <TabPanel value="11">
                <Investment
                  data={results.Statistics}
                  companyID={props.match.params.CompanyID}
                />
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

export default PlanProfile2;
