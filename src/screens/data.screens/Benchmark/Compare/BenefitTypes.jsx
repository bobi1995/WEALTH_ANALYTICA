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
import BenefitTable from "./Components/BenefitTable";
const useStyles = makeStyles({
  table: {
    width: "100%",
  },
});

const ComplianceTable = ({ data, companies }) => {
  const classes = useStyles();

  return (
    <Box className={classes.table}>
      <Box>
        <BenefitTable descriptionData={characteristicBenefit} usedData={data} />
      </Box>
      <Box>
        <BenefitTable descriptionData={characteristics} usedData={data} />
      </Box>

      <Box>
        <BenefitTable descriptionData={fiduciaryFeatures} usedData={data} />
      </Box>
      <Box>
        <BenefitTable descriptionData={equatyInterest} usedData={data} />
      </Box>

      <Box>
        <BenefitTable descriptionData={invenstmentFeatures} usedData={data} />
      </Box>
      <Box>
        <BenefitTable descriptionData={healthcareBenefits} usedData={data} />
      </Box>
    </Box>
  );
};

export default ComplianceTable;
