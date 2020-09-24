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
} from "@material-ui/core";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";

const useStyles = makeStyles(() => ({
  root: {},
  fieldsStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  buttonStyle: {
    margin: "0 auto",
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

  const handleChange = (event) => {
    console.log(event.target.name);
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
        console.log(error);
        alert("We couldn't update the results.");
      });
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
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default AccountDetails;
