import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Contacts from "./EmailSection/Contacts";
import Score from "./EmailSection/Score";

const useStyles = makeStyles((theme) => ({
  container: { width: "94%", margin: "0 auto" },
  topBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  contactBox: {
    width: "60%",
  },
  scoreBox: {
    width: "30%",
  },
}));

const EmailSection = ({ data }) => {
  const classes = useStyles();
  const scoreData = [
    {
      name: "Enterprise Exposure Rating",
      value: data.EnterpriseExposureRating,
    },
    {
      name: "Retirement Enhancement",
      value: data.RetirementEnhancement,
    },
    {
      name: "Enhanced Tax Deferral And Employee Retirement",
      value: data.EnhancedTaxDeferralAndEmployeeRetirement,
    },
    {
      name: "Overall Rating",
      value: data.OverallRating,
    },
    {
      name: "Touches",
      value: data.Touches,
    },
  ];
  return (
    <Box className={classes.container}>
      <Box className={classes.topBox}>
        <Box className={classes.contactBox}>
          <Contacts contacts={data.Contacts} />
        </Box>
        <Box className={classes.scoreBox}>
          <Score scoreData={scoreData} year={data.Year} />
        </Box>
      </Box>
    </Box>
  );
};

export default EmailSection;
