import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import TotalAssetsTable from "./Finance/BalanceTables/TotalAssetsTable";
import ExpensesTable from "./Finance/IncomeTables/ExpensesTable";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import FindInPageIcon from "@material-ui/icons/FindInPage";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  tabStyle: {
    backgroundColor: "#9999ff",
  },
});
const Financial = ({ data }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(data);
  return (
    <Box className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList
            onChange={handleChange}
            aria-label="simple tabs example"
            className={classes.tabStyle}
          >
            <Tab label="Expenses" value="1" icon={<MoneyOffIcon />} />

            <Tab label="Income" value="2" icon={<AttachMoneyIcon />} />
            <Tab label="Liabilities" value="3" icon={<CreditCardIcon />} />
            <Tab label="Nets" value="4" icon={<AccountBalanceWalletIcon />} />

            <Tab label="Total Assets" value="5" icon={<AccountBalanceIcon />} />
            <Tab label="Others" value="6" icon={<FindInPageIcon />} />
          </TabList>
        </AppBar>
        <Box>
          <TabPanel value="1">
            <ExpensesTable data={data} />
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
          <TabPanel value="5">
            <TotalAssetsTable data={data} />
          </TabPanel>
          <TabPanel value="6"></TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Financial;
