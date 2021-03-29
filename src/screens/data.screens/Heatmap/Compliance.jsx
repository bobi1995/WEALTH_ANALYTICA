import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import ComplianceTable from "./Compliance/Table";
import NoDataComponent from "./Components/NoDataComponent";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
  },
  tablesContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "3%",
    marginBottom: "3%",
  },
  table: {
    width: "40%",
    minWidth: 650,
  },
});

const Compliance = (props) => {
  const classes = useStyles();

  const data = props.data.filter((el) => el.compliance !== null);
  return data.length > 0 ? (
    <Box>
      <Box className={classes.headingContainer}>
        {/* <Typography component="h4" variant="h4" className={classes.heading}>
          Compliance
        </Typography> */}
        <Box className={classes.tablesContainer}>
          <ComplianceTable data={data} />
        </Box>
      </Box>
    </Box>
  ) : (
    <NoDataComponent />
  );
};

export default Compliance;
