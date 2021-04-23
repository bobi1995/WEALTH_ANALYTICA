import React, { useState } from "react";
import {
  Box,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Checkbox,
  Avatar,
} from "@material-ui/core";
import Moment from "react-moment";
import axios from "axios";
import apiAddress from "../../../../../../../global/endpointAddress";
import SelectUserDialog from "./SelectUserDialog";
import AlertBox from "../../../../../../../components/alertBox";

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

const User = ({ data, states, type, payId }) => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [alertMessage, setAlertMessage] = useState("");

  const handleStateSet = (value, included) => {
    console.log(value, included);
    if (included) {
      removeState(value);
    } else {
      AssignState(value);
    }
  };
  //   console.log(user);
  //   console.log(data);
  //console.log(states);

  const AssignState = (state) => {
    let url = "";
    if (data.UserGuid) {
      url = `${apiAddress}/api/Users/AddSubscription?userGuid=${data.UserGuid}&state=${state}&type=${type}&paymentID=${payId}`;
    } else
      url = `${apiAddress}/api/Users/AddSubscription?userGuid=${user.Guid}&state=${state}&type=${type}&paymentID=${payId}`;

    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (localStorage.getItem("isBusiness")) {
          const temp = JSON.parse(localStorage.getItem("States"));
          temp.push(res.data);
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage("State is already assigned to this User.");
      });
  };

  const removeState = (state) => {
    let temp = JSON.parse(localStorage.getItem("States"));

    let url = "";
    if (data.UserGuid) {
      url = `${apiAddress}/api/Users/RemoveSubscription?userGuid=${data.UserGuid}&state=${state}&type=${type}&paymentID=${payId}`;
    } else
      url = `${apiAddress}/api/Users/RemoveSubscription?userGuid=${user.Guid}&state=${state}&type=${type}&paymentID=${payId}`;

    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        console.log(data);
        if (localStorage.getItem("isBusiness")) {
          temp = temp.filter((el) => el.State !== state || el.Type !== type);
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage(
          "Subscription removed unsuccessfully. Please try again"
        );
      });
  };

  return (
    <Box className={classes.root}>
      <Typography className={classes.heading1}>
        {data.IsAdditionalUser ? "Additional User" : "Subscription User"}
      </Typography>

      {data.UserGuid ? (
        <Box className={classes.usersContainer}>
          <Typography>{data.Name}</Typography>
          <List>
            {states.map((el) => (
              <ListItem key={el} style={{ height: 5, marginTop: "5%" }}>
                <ListItemText primary={`${el}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge="end"
                    onChange={() =>
                      handleStateSet(el, data.States.includes(el))
                    }
                    checked={data.States.includes(el)}
                    //inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Box className={classes.noUserContainer}>
          {user.Guid ? (
            <Box>
              <Typography>
                {user.FirstName} {user.LastName}
              </Typography>
              <List style={{}}>
                {states.map((el) => (
                  <ListItem key={el} style={{ height: 5, marginTop: "5%" }}>
                    <ListItemText primary={`${el}`} />
                    <ListItemSecondaryAction>
                      <Checkbox
                        edge="end"
                        onChange={() =>
                          handleStateSet(el, user.States.includes(el))
                        }
                        checked={user.States.includes(el)}
                        //inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : (
            <SelectUserDialog setUser={setUser} />
          )}
        </Box>
      )}
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default User;
