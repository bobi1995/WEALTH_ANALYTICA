import React from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, Typography, Box } from "@material-ui/core";
import numeral from "numeral";
import { primaryBlue } from "../../../../../../../global/Colors";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "5%",
    marginBottom: "5%",
  },
  basicInfo: {
    color: primaryBlue,
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 20,
  },
}));
export default ({ states, type }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.basicInfo}>
        States: {states.map((el) => `${el}, `)}
      </Typography>

      <Typography className={classes.basicInfo}>
        Type of Subscription: {type === 1 ? "Basic" : "Premium"}
      </Typography>
      <Typography className={classes.basicInfo}>
        Total Price: {type === 1 ? "$1,399" : "$1,999"}
      </Typography>
    </Box>
  );
};
