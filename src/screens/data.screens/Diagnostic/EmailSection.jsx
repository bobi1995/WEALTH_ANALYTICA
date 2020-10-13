import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
import Contacts from "./EmailSection/Contacts";
import Score from "./EmailSection/Score";
import Email from "./EmailSection/Email";
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
  emailBox: {
    backgroundColor: "green",
  },
}));

const contacts = [
  {
    Name: "Borislav Stefanov",
    Title: "Software Engineer",
    Email: "borislav.stefanov@abv.bg",
  },
  {
    Name: "Ray Colombo",
    Title: "Chief Executive Officer",
    Email: null,
  },
  {
    Name: "John Doe",
    Title: "Administrative Assistant",
    Email: "john.doe@test.bg",
  },
];

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
      name: "Touches",
      value: data.Touches,
    },
  ];
  return (
    <Box className={classes.container}>
      <Box className={classes.topBox}>
        <Box className={classes.contactBox}>
          <Contacts contacts={contacts} />
        </Box>
        <Box className={classes.scoreBox}>
          <Score scoreData={scoreData} year={data.Year} />
        </Box>
      </Box>
      <Box className={classes.emailBox}>
        <Email />
      </Box>
    </Box>
  );
};

export default EmailSection;
