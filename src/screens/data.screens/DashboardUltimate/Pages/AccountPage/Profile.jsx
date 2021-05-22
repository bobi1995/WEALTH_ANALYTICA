import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  Tooltip,
  Select,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
import { softRed, primaryBlue } from "../../../../../global/Colors";
import AlerBox from "../../../../../components/alertBox";
import labelingColors from "../../../../../global/labelingColors";
import AsyncAlertBox from "../../../../../components/asyncAlertBox";
import numeral from "numeral";

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
    border: `1px solid ${primaryBlue}`,
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  uploadButton: {
    marginRight: theme.spacing(2),
  },
  colorPicker: {
    margin: "3% auto",
    textAlign: "center",
  },
}));

const AccountProfile = (props) => {
  const canUpdate = localStorage.getItem("CanUpdateLogo");
  const [fileUrl, setFileUrl] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [labelColor, setLabelColor] = useState(
    localStorage.getItem("Color") ? localStorage.getItem("Color") : ""
  );
  const [asyncMessage, setAsyncMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const classes = useStyles();
  const user = {
    firstName: localStorage.getItem("FirstName"),
    lastName: localStorage.getItem("LastName"),
    city: localStorage.getItem("Address"),
    country: "USA",
    company: localStorage.getItem("CompanyName"),
    avatar: localStorage.getItem("LogoData"),
    email: localStorage.getItem("Email"),
    phone: localStorage.getItem("CompanyPhone"),
    color: localStorage.getItem("Color"),
  };

  const completeness = () => {
    const arr = Object.values(user);
    return (arr.filter((el) => el !== "" && el !== "null").length / 9) * 100;
  };

  //CHOOSING PICTURE
  const choosePicture = async (e) => {
    const file = await toBase64(e.target.files[0]);
    const parts = file.split(",");
    setFileUrl(parts[1]);
  };

  //CHOOSING COLOR
  const handleColorPicked = async (event) => {
    setLabelColor(event.target.value);

    await axios
      .put(
        `${apiAddress}/api/Users/UpdateUser`,
        {
          Color: event.target.value,

          FirstName: localStorage.getItem("FirstName"),
          LastName: localStorage.getItem("LastName"),
          CompanyName: localStorage.getItem("CompanyName"),
          CompanyPhone: localStorage.getItem("CompanyPhone"),
          Address: localStorage.getItem("Address"),
        },
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setAsyncMessage("Details are updated");
        localStorage.setItem("Color", event.target.value);
      })
      .catch((error) => {
        setSuccess(false);
        setAlertMessage("We couldn't update the results.");
      });
  };

  //FILE TO BASE64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  //UPLOADING PICTURE
  const uploadPicture = () => {
    axios
      .put(
        `${apiAddress}/api/Users/UpdateUserLogo`,
        {
          logofilename: "logo.jpg",

          logodata: fileUrl,
        },
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setAlertMessage("The logo is updated");
        localStorage.setItem("LogoData", fileUrl);
        window.location.reload();
      })
      .catch((error) => {
        setAlertMessage("We couldn't upload the logo.");
      });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {user.firstName} {""}
              {user.lastName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {user.company}
            </Typography>
          </div>
          <Tooltip
            title="Upload your logo"
            open={user.avatar !== "null" && user.avatar !== "" ? false : true}
            arrow
            placement="right-end"
          >
            <Avatar
              className={classes.avatar}
              src={`data:image/png;base64,${user.avatar}`}
            />
          </Tooltip>
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">
            Profile Completeness: {numeral(completeness()).format("0,0")}%
          </Typography>
          <LinearProgress value={completeness()} variant="determinate" />
        </div>
        <div className={classes.colorPicker}>
          Pick your company color:{" "}
          <Select
            value={labelColor}
            onChange={handleColorPicked}
            style={{ width: "20%" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {labelingColors.map((el) => (
              <MenuItem key={el.id} value={el.id}>
                {el.name}
              </MenuItem>
            ))}
          </Select>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <input
          type="file"
          disabled={canUpdate === "true" ? false : true}
          onChange={choosePicture}
        />
        <Button
          variant="contained"
          onClick={uploadPicture}
          disabled={canUpdate === "true" ? false : true}
          style={
            fileUrl
              ? { backgroundColor: "#008000", color: "white" }
              : { backgroundColor: softRed, color: "white" }
          }
        >
          {fileUrl ? "Upload Logo" : "Remove Logo"}
        </Button>
      </CardActions>
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
      {asyncMessage ? (
        <AsyncAlertBox
          text={asyncMessage}
          display={setAsyncMessage}
          success={success}
        />
      ) : (
        ""
      )}
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string,
};

export default AccountProfile;
