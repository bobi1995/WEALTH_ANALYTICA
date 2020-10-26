import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import {
  characteristicBenefit,
  characteristics,
  invenstmentFeatures,
  equatyInterest,
  fiduciaryFeatures,
  healthcareBenefits,
} from "../../../../global/benefitTypes";
import SmallTable from "./SmallTable";
import { primaryBlue } from "../../../../global/Colors";
const useStyles = makeStyles({
  table: {
    width: "100%",
    maxHeight: 440,
  },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  title: {
    flex: "1 1 100%",
  },
  fieldCell: {
    fontWeight: "bold",
  },
  smallTablesContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: "5%",
  },
});

const ComplianceTable = ({ data }) => {
  const classes = useStyles();

  const usedData = data.filter((el) => el.business === false);
  const industryData = data.filter((el) => el.business === true)[0];

  return (
    <Box className={classes.table}>
      <Box className={classes.smallTablesContainer}>
        <SmallTable
          descriptionData={characteristicBenefit}
          usedData={usedData}
          industryData={industryData}
        />
        <SmallTable
          descriptionData={characteristics}
          usedData={usedData}
          industryData={industryData}
        />
      </Box>
      <Box className={classes.smallTablesContainer}>
        <SmallTable
          descriptionData={fiduciaryFeatures}
          usedData={usedData}
          industryData={industryData}
        />
        <SmallTable
          descriptionData={equatyInterest}
          usedData={usedData}
          industryData={industryData}
        />
      </Box>
      <Box className={classes.smallTablesContainer}>
        <SmallTable
          descriptionData={invenstmentFeatures}
          usedData={usedData}
          industryData={industryData}
        />
        <SmallTable
          descriptionData={healthcareBenefits}
          usedData={usedData}
          industryData={industryData}
        />
      </Box>
    </Box>
  );
};

export default ComplianceTable;
