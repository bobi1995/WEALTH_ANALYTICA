import React from "react";
import { Box, Typography, makeStyles, Button, Paper } from "@material-ui/core";
import Moment from "react-moment";
import User from "./components/User";
import AddUserBtn from "./components/AddUserBtn";
import { primaryBlue } from "../../../../../../global/Colors";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "1%",
    marginRight: "1%",
  },
  detailsContainer: {
    backgroundImage: `linear-gradient(to bottom right, ${primaryBlue}, #e8f4f8)`,
    width: "20%",
    margin: "1%",
    borderRadius: 15,
  },
  usersContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "60%",
    // backgroundImage: `linear-gradient(to bottom left, ${primaryBlue}, #e8f4f8)`,
    margin: "1%",
    borderRadius: 15,
  },
  buttonContainer: {
    width: "20%",
    // backgroundImage: `linear-gradient(to bottom right, ${primaryBlue}, #e8f4f8)`,
    margin: "1%",
    borderRadius: 15,
    justifyContent: "center",
    display: "flex",
  },
  heading1: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Baskervville",
    color: "white",
  },
  heading2: {
    fontSize: 20,
    fontFamily: "Baskervville",
    color: "white",
  },
});

const SingleState = ({ subscription }) => {
  const classes = useStyles();
  //console.log(subscription);
  return (
    <Paper className={classes.root} elevation={21}>
      <Box className={classes.detailsContainer}>
        <Typography className={classes.heading1}>
          {subscription.RegionType === 1
            ? "Single"
            : subscription.RegionType === 2
            ? "Regional"
            : "National"}
        </Typography>
        <Typography className={classes.heading2}>
          Type: {subscription.type === 2 ? "Premium" : "Basic"}
        </Typography>
        <Typography className={classes.heading2}>
          Valid to:{" "}
          <Moment format="MMM/DD/YYYY">{subscription.ExpireDate}</Moment>
        </Typography>
        <Box>
          <Typography className={classes.heading2}>States:</Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            {subscription.States.map((el, ind) => {
              return (
                <Typography key={el} className={classes.heading2}>
                  {ind + 1 === subscription.States.length ? `${el}` : `${el} /`}
                  &nbsp;
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box className={classes.usersContainer}>
        {subscription.Users.map((el, ind) => (
          <User
            key={ind}
            data={el}
            states={subscription.States}
            type={subscription.Type}
            payId={subscription.PaymentID}
          />
        ))}
      </Box>
      <Box className={classes.buttonContainer}>
        <AddUserBtn />
      </Box>
    </Paper>
  );
};

export default SingleState;
