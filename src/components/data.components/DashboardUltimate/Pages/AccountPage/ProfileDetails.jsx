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
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: sessionStorage.getItem("FirstName"),
    lastName: sessionStorage.getItem("LastName"),
    address: sessionStorage.getItem("Address"),
    email: sessionStorage.getItem("Email"),
    phone: sessionStorage.getItem("CompanyPhone"),
    company: sessionStorage.getItem("CompanyName"),
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const states = [
    {
      value: "alabama",
      label: "Alabama",
    },
    {
      value: "new-york",
      label: "New York",
    },
    {
      value: "san-francisco",
      label: "San Francisco",
    },
  ];

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
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
            </div>
            <div className={classes.fieldsStyle}>
              <Grid>
                <TextField
                  label="Address"
                  margin="dense"
                  name="Address"
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
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid>
                <TextField
                  label="Company"
                  margin="dense"
                  name="company"
                  onChange={handleChange}
                  required
                  value={values.company}
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
