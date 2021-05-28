import React, { useState, useEffect } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@material-ui/core/Box";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Financial from "./Financial";
import Participants from "./Participants";
import Statistics from "./Statistics";
import Alerts from "./Alerts";
import HealthCare from "./HealthCare";
import Plans from "./Plans";
import ServiceProviders from "./ServiceProviders";
import Utilization from "./Utilization";
import Compliance from "./Compliance";
import Accountant from "./Accountant";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  tabStyle: {
    backgroundColor: "#6666ff",
  },
  tabpanelRoot: {
    padding: 0,
    //height: `calc(100vh - 52px)`,
    width: "100%",
  },
}));

const MainMenu = ({ data }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //console.log(data);
  return (
    <Box className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            className={classes.tabStyle}
            variant="scrollable"
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Financial" value="1" icon={<MonetizationOnIcon />} />

            <Tab label="Participants" value="2" icon={<AccessibilityIcon />} />
            <Tab label="Statistics" value="3" icon={<EqualizerIcon />} />
            <Tab
              label="Service Providers"
              value="4"
              icon={<SettingsApplicationsIcon />}
            />

            <Tab label="Alerts" value="5" icon={<ReportProblemIcon />} />
            <Tab label="Health Care" value="6" icon={<FavoriteIcon />} />
            <Tab label="Plans" value="7" icon={<ListAltIcon />} />
            <Tab label="Utilization" value="8" icon={<HelpOutlineIcon />} />
            <Tab label="Compliance" value="9" icon={<HelpOutlineIcon />} />
            <Tab label="Accountants" value="10" icon={<HelpOutlineIcon />} />
          </TabList>
        </AppBar>
        <Box>
          <TabPanel value="1" className={classes.tabpanelRoot}>
            <Financial
              data={data.map((el) => {
                return {
                  name: el.CompanyName,
                  industry: el.Industry,
                  finance: el.FinancialInfo,
                };
              })}
            />
          </TabPanel>
          <TabPanel value="2">
            <Participants />
          </TabPanel>
          <TabPanel value="3">
            <Statistics />
          </TabPanel>
          <TabPanel value="4">
            <ServiceProviders />
          </TabPanel>
          <TabPanel value="5">
            <Alerts />
          </TabPanel>
          <TabPanel value="6">
            <HealthCare />
          </TabPanel>
          <TabPanel value="7">
            <Plans />
          </TabPanel>
          <TabPanel value="8">
            <Utilization />
          </TabPanel>
          <TabPanel value="9">
            <Compliance />
          </TabPanel>
          <TabPanel value="10">
            <Accountant />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default MainMenu;
