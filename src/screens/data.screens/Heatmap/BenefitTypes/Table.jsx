import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import {
  characteristicBenefit,
  characteristics,
} from "../../../../global/benefitTypes";
import SmallTable from "./SmallTable";

const useStyles = makeStyles({
  table: {
    width: "100%",
    backgroundColor: "#E3F2FD",
    maxHeight: 440,
    border: "1px solid #378FC3",
  },
  tableHeader: { color: "#378FC3", fontWeight: "bold", fontSize: 16 },
  negativeNum: {
    color: "red",
  },
  title: {
    flex: "1 1 100%",
  },
  fieldCell: {
    fontWeight: "bold",
  },
});

const ComplianceTable = ({ data }) => {
  const classes = useStyles();
  let rowCount = Object.keys(data[1].benefit).length;
  console.log(data);

  const usedData = data.filter((el) => el.business === false);
  const industryData = data.filter((el) => el.business === true)[0];

  return (
    <Box>
      <SmallTable
        descriptionData={characteristicBenefit}
        usedData={usedData}
        industryData={industryData}
      />
      {/* <SmallTable
        descriptionData={characteristics}
        usedData={usedData}
        industryData={industryData}
      /> */}
    </Box>
  );
};

export default ComplianceTable;
