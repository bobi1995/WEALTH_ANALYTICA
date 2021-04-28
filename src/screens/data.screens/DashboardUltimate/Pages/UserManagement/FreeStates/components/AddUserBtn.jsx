import React, { useState } from "react";
import {
  Button,
  makeStyles,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import UsersPaypal from "../components/UsersPaypal";

const useStyles = makeStyles({
  buttonStyle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "70%",
  },
});
const AddUserBtn = (props) => {
  const [open, setOpen] = useState(false);
  const [usersNumber, setUsersNumber] = useState();
  const maxWidth = "sm";
  const [nextScreen, setNextScreen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUsersNumber("");
    setNextScreen(false);
  };

  const nextBtnHandler = () => {
    setNextScreen(true);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.buttonStyle}
      >
        Add User
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={maxWidth}
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "center" }}>
            {nextScreen
              ? `Price for ${usersNumber} users`
              : "Add Users to use this subscription."}
          </DialogContentText>
          {nextScreen ? (
            <UsersPaypal data={props} accounts={usersNumber} />
          ) : (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Number of Users"
              type="number"
              fullWidth
              onChange={(num) => {
                setUsersNumber(num.target.value);
              }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {!nextScreen ? (
            <Button
              onClick={nextBtnHandler}
              color="primary"
              disabled={usersNumber ? false : true}
            >
              Next
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddUserBtn;
