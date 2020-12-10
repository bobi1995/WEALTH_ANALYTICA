import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { primaryBlue } from "../../../../../global/Colors";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import LocalPostOfficeIcon from "@material-ui/icons/LocalPostOffice";
import commonFunctions from "../../../commonFunctions/common";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import history from "../../../../../history/history";
import ErrorIcon from "@material-ui/icons/Error";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import numeral from "numeral";
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "3% auto",
    width: "70%",
    display: "flex",
  },
  gridStyle: {
    width: "100%",
  },
  header: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
  side1: {
    width: "40%",
    padding: "1%",
  },
  side2: {
    width: "60%",
    padding: "1%",
  },
  subPaper: {
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "0 auto",
  },
  infoBox: {
    width: "100%",
  },
  textField: {
    width: "90%",
    margin: "1%",
  },
  pagesBox: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginTop: "3%",
  },
}));
const Connection = ({ data }) => {
  const classes = useStyles();
  const avatarAbbr = data.Name.charAt(0);

  return (
    <Paper className={classes.paper}>
      <Box className={classes.side1}>
        <Paper elevation={5} className={classes.subPaper}>
          <Avatar className={classes.avatar}>{avatarAbbr}</Avatar>
          <Typography
            className={classes.header}
            variant="h6"
            component="h6"
            gutterBottom
          >
            {data.Name}
          </Typography>
          <Box className={classes.infoBox}>
            <TextField
              className={classes.textField}
              value={data.State}
              id="input-with-icon-textfield"
              label="State"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={data.City && commonFunctions.formatString(data.City)}
              id="input-with-icon-textfield"
              label="City"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={
                data.Address1 && commonFunctions.formatString(data.Address1)
              }
              id="input-with-icon-textfield"
              label="Address"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={data.Phone && commonFunctions.phoneFormat(data.Phone)}
              id="input-with-icon-textfield"
              label="Phone"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={data.ZipCode}
              id="input-with-icon-textfield"
              label="ZIP code"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPostOfficeIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
          </Box>
        </Paper>
      </Box>
      <Box className={classes.side2}>
        <Paper elevation={5} className={classes.subPaper}>
          <Typography
            className={classes.header}
            variant="h6"
            component="h6"
            gutterBottom
          >
            Tools
          </Typography>
          <Box className={classes.pagesBox}>
            <Box>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: primaryBlue }}
                onClick={() =>
                  history.push({
                    pathname: `/planprofile/${data.CompanyID}`,
                  })
                }
              >
                <TrendingUpIcon className={classes.avatar} />
              </Avatar>
              <Typography
                className={classes.header}
                variant="h6"
                component="h6"
                gutterBottom
              >
                Plan Profile
              </Typography>
            </Box>
            <Box>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: primaryBlue }}
                onClick={() =>
                  history.push({
                    pathname: `/heatmap/${data.CompanyID}`,
                  })
                }
              >
                <ErrorIcon className={classes.avatar} />
              </Avatar>
              <Typography
                className={classes.header}
                variant="h6"
                component="h6"
                gutterBottom
              >
                Heatmap
              </Typography>
            </Box>

            <Box>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: primaryBlue }}
                onClick={() =>
                  history.push({
                    pathname: `/diagnostic/${data.CompanyID}`,
                  })
                }
              >
                <DoneAllIcon className={classes.avatar} />
              </Avatar>
              <Typography
                className={classes.header}
                variant="h6"
                component="h6"
                gutterBottom
              >
                Diagnostic
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          className={classes.subPaper}
          style={{ marginTop: "4%" }}
        >
          <Typography
            className={classes.header}
            variant="h6"
            component="h6"
            gutterBottom
          >
            Summary
          </Typography>
          <Box className={classes.infoBox}>
            <TextField
              className={classes.textField}
              value={numeral(data.Participants).format(0, 0)}
              id="input-with-icon-textfield"
              label="Participants"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmojiPeopleIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={numeral(data.NetAssets).format(0, 0)}
              id="input-with-icon-textfield"
              label="Net Assets"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
            <TextField
              className={classes.textField}
              value={numeral(data.NetIncome).format(0, 0)}
              id="input-with-icon-textfield"
              label="Net Income"
              variant="outlined"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
              disabled
            />
          </Box>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Connection;
