import React from "react";
import { Box, Typography, makeStyles, Button } from "@material-ui/core";
import Moment from "react-moment";
import axios from "axios";
import apiAddress from "../../../../../../../global/endpointAddress";
import SelectUserDialog from "./SelectUserDialog";

const useStyles = makeStyles({
  root: { border: "1px solid grey", borderRadius: 15, padding: "1%" },
  usersContainer: {},
  noUserContainer: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  heading1: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

const User = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.heading1}>
        {data.IsAdditionalUser ? "Additional User" : "Subscription User"}
      </Typography>

      {data.UserGuid ? (
        <Box className={classes.usersContainer}>
          <Typography>{data.name}</Typography>
        </Box>
      ) : (
        <Box className={classes.noUserContainer}>
          <SelectUserDialog />
        </Box>
      )}
    </Box>
  );
};

export default User;
