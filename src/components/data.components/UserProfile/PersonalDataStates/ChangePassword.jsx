import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../global/endpointAddress";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(() => ({
  saveButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#008000",
    color: "white",
  },
  saveButton2: {
    backgroundColor: "#008000",
    color: "white",
    "&:hover": {
      backgroundColor: "#90ee90",
    },
  },
  cancelButton: {
    backgroundColor: "#CC0000",
    color: "white",
    color: "white",
    "&:hover": {
      backgroundColor: "#ff726f",
    },
  },
}));

export default () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const changePassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 7) {
      alert("New password must be at least 7 symbols");
    } else {
      const data = {
        oldpassword: oldPassword,
        newPassword: newPassword,
      };
      axios
        .post(`${apiAddress}/api/Users/ChangePassword`, data, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
          },
        })
        .then((res) => {
          sessionStorage.clear();

          window.location.reload();
        })
        .catch((e) => {
          alert("Something went wrong. Please enter valid current password");
        });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeOldPassword = (e) => {
    setOldPassword(e.target.value);
  };
  const onChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div>
      <Button
        variant="contained"
        id="right-filter-btn"
        className={classes.saveButton}
        startIcon={<LockOpenIcon />}
        onClick={handleClickOpen}
      >
        Change Password
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Change you password"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your old password and then your desired new one. Please keep
            in mind password must be at least 7 symbols.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="old-password-change"
            label="Old password:"
            type="text"
            fullWidth
            onChange={onChangeOldPassword}
          />
          <TextField
            margin="dense"
            id="new-password-change"
            label="New password:"
            type="text"
            fullWidth
            onChange={onChangeNewPassword}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.cancelButton}
          >
            Cancel
          </Button>
          <Button onClick={changePassword} className={classes.saveButton2}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
