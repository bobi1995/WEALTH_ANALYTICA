import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Benchmark from "../Benchmark";
import Heatmap from "../Heatmap";
import Diagnostic from "../Diagnostic";
import ArchiveIcon from "@material-ui/icons/Archive";
import MapIcon from "@material-ui/icons/Map";
import TimelineIcon from "@material-ui/icons/Timeline";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //backgroundColor: "orange",
  },
  appBarStyle: {
    backgroundColor: "#7095da",
  },
  tabpanelRoot: {
    padding: 0,
    //height: `calc(100vh - 52px)`,
    width: "100%",
  },
}));
const Analytics = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box className={classes.root}>
        <TabContext value={value}>
          <AppBar position="static" className={classes.appBarStyle}>
            <TabList
              variant="scrollable"
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Heatmap" value="1" icon={<MapIcon />} />
              <Tab label="Diagnostic" value="2" icon={<TimelineIcon />} />
              <Tab label="Benchmark" value="3" icon={<ArchiveIcon />} />
            </TabList>
          </AppBar>
          <Box>
            <TabPanel value="1" className={classes.tabpanelRoot}>
              <Heatmap companyID={props.companyID} />
            </TabPanel>
            <TabPanel value="2">
              <Diagnostic companyID={props.companyID} />
            </TabPanel>
            <TabPanel value="3">
              <Benchmark companyID={props.companyID} />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};

export default Analytics;
