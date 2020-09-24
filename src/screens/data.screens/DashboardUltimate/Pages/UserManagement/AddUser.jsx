import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    textAlign: "center",
  },
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
  },
  fieldsDiv: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "3%",
  },
  saveButton: {
    marginBottom: "1%",
    width: "15%",
    backgroundColor: "#008000",
    color: "white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#75c275",
    },
  },
}));

const AddUser = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstName,
      lastName,
      email,
      CompanyPhone: phone,
      password,
      Guid: sessionStorage.getItem("Guid"),
    };
    if (data.password !== confirmPassword) {
      setLoading(false);

      alert("Passwords don't match");
    } else if (data.password.length < 6) {
      setLoading(false);

      alert("Password must be at least 7 symbols");
    } else {
      axios
        .post(`${apiAddress}/api/Users/CreateCompanyUser`, data, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          alert("Еmail is already registered.");
        });
    }
  };

  return (
    <div className={classes.mainDiv}>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        Add User
      </Typography>
      <form onSubmit={submitNewUser}>
        <div className={classes.fieldsDiv}>
          <TextField
            name="firstName"
            value={firstName}
            label="First Name"
            onChange={handleFirstName}
          />
          <TextField
            name="lastName"
            value={lastName}
            label="Last Name"
            onChange={handleLastName}
          />
          <TextField
            name="email"
            value={email}
            label="Email"
            type="email"
            onChange={handleEmail}
          />
        </div>
        <div className={classes.fieldsDiv}>
          <TextField
            name="phone"
            value={phone}
            label="Phone"
            onChange={handlePhone}
          />
          <TextField
            name="password"
            value={password}
            label="Password"
            onChange={handlePassword}
          />
          <TextField
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Passowrd"
            onChange={handleConfirmPassword}
          />
        </div>
        <div></div>
        <button
          disabled={loading ? true : false}
          className={classes.saveButton}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
