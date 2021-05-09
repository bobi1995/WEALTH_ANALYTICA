import React from "react";
import { Box, Typography, makeStyles, Paper } from "@material-ui/core";
import Moment from "react-moment";
import User from "./components/User";
import AddUserBtn from "./components/AddUserBtn";
import { primaryBlue } from "../../../../../../global/Colors";
import SeeMore from "./components/SeeMore";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: "1%",
    marginRight: "1%",
  },
  detailsContainer: {
    backgroundImage: `linear-gradient(to bottom right, ${primaryBlue}, #e8f4f8)`,
    width: "15%",
    margin: "1%",
    borderRadius: 15,
  },
  usersContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "75%",
    margin: "1%",
    borderRadius: 15,
  },
  buttonContainer: {
    width: "10%",
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
          Type: {subscription.type === 1 ? "Basic" : "Premium"}
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
        {subscription.Users.length < 5 ? (
          subscription.Users.map((el, ind) => (
            <User
              key={ind}
              data={el}
              states={subscription.States}
              type={subscription.Type}
              payId={subscription.PaymentID}
            />
          ))
        ) : (
          <Box style={{ width: "100%" }}>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {subscription.Users.slice(0, 4).map((el, ind) => (
                <User
                  key={ind}
                  data={el}
                  states={subscription.States}
                  type={subscription.Type}
                  payId={subscription.PaymentID}
                />
              ))}
            </Box>
            <SeeMore
              users={subscription.Users}
              states={subscription.States}
              type={subscription.Type}
              payId={subscription.PaymentID}
              count={subscription.Users.length}
            />
          </Box>
        )}
      </Box>
      <Box className={classes.buttonContainer}>
        <AddUserBtn
          states={subscription.States}
          type={subscription.Type}
          regionType={subscription.RegionType}
          payId={subscription.PaymentID}
        />
      </Box>
    </Paper>
  );
};

export default SingleState;
