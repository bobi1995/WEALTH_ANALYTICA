import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
import { orangeColor } from "../../../../../global/Colors";
import AlertBox from "../../../../../components/alertBox";
const useStyles = makeStyles(() => ({
  root: {},
  fieldsStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    margin: "0 auto",
    width: "50%",
  },
}));

const AccountDetails = (props) => {
  const { className } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstname: sessionStorage.getItem("FirstName"),
    lastname: sessionStorage.getItem("LastName"),
    address: sessionStorage.getItem("Address"),
    email: sessionStorage.getItem("Email"),
    companyphone: sessionStorage.getItem("CompanyPhone"),
    companyname: sessionStorage.getItem("CompanyName"),
  });
  const [open, setOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const updateUser = () => {
    axios
      .put(`${apiAddress}/api/Users/UpdateUser`, values, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        alert("Details are updated");
        sessionStorage.setItem("FirstName", values.firstname);
        sessionStorage.setItem("LastName", values.lastname);
        sessionStorage.setItem("CompanyName", values.companyname);
        sessionStorage.setItem("CompanyPhone", values.companyphone);
        sessionStorage.setItem("Address", values.address);
        window.location.reload();
      })
      .catch((error) => {
        setAlertMessage("We couldn't update the results.");
      });
  };

  const handleOpenPassChange = () => {
    setOpen(true);
  };

  const handleClosePassChange = () => {
    setOpen(false);
  };
  const handleChangePass = () => {
    if (newPassword !== repeatedPassword) {
      setAlertMessage("Password does not match");
    } else if (newPassword.length < 7) {
      setAlertMessage("password must be at least 7 symbols");
    } else {
      axios
        .post(
          `${apiAddress}/api/Users/ChangePassword`,
          {
            oldpassword: oldPassword,
            newpassword: newPassword,
          },
          {
            headers: {
              Authorization: "Basic " + sessionStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setAlertMessage("Password is changed");
          handleClosePassChange();
        })
        .catch((error) => {
          setAlertMessage(error.response.data);
        });
    }
  };

  return (
    <Card className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid>
            <div className={classes.fieldsStyle}>
              <Grid>
                <TextField
                  label="First name"
                  margin="dense"
                  name="firstname"
                  onChange={handleChange}
                  required
                  value={values.firstname}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  label="Last name"
                  margin="dense"
                  name="lastname"
                  onChange={handleChange}
                  required
                  value={values.lastname}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className={classes.fieldsStyle}>
              <Grid>
                <TextField
                  label="Address"
                  margin="dense"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  disabled
                  label="Email Address"
                  margin="dense"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className={classes.fieldsStyle}>
              <Grid>
                <TextField
                  label="Phone Number"
                  margin="dense"
                  name="companyphone"
                  onChange={handleChange}
                  value={values.companyphone}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  label="Company"
                  margin="dense"
                  name="companyname"
                  onChange={handleChange}
                  required
                  value={values.companyname}
                  variant="outlined"
                />
              </Grid>
            </div>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            className={classes.buttonStyle}
            onClick={updateUser}
          >
            Save details
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.buttonStyle}
            style={{ backgroundColor: orangeColor }}
            onClick={handleOpenPassChange}
          >
            Change password
          </Button>
        </CardActions>
      </form>

      {/************PASS CHANGE */}
      <Dialog
        open={open}
        onClose={handleClosePassChange}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Passowrd</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change your password for login in Wealth Analytica.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="currentpass"
            label="Current password"
            type="password"
            fullWidth
            value={oldPassword}
            onChange={(current) => {
              setOldPassword(current.target.value);
            }}
          />
          <TextField
            margin="dense"
            id="changepass1"
            label="New password"
            type="password"
            fullWidth
            value={newPassword}
            onChange={(newPass) => {
              setNewPassword(newPass.target.value);
            }}
          />

          <TextField
            margin="dense"
            id="changepass2"
            label="Re-enter it"
            type="password"
            fullWidth
            value={repeatedPassword}
            onChange={(newPass) => {
              setRepeatedPassword(newPass.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePassChange} color="primary">
            Cancel
          </Button>
          <Button onClick={handleChangePass} color="primary">
            Change
          </Button>
        </DialogActions>
      </Dialog>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
