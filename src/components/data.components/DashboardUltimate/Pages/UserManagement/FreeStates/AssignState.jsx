import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import apiAddress from "../../../../../../global/endpointAddress";

const useStyles = makeStyles((theme) => ({
  removeButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#cc0000",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#ff7f7f",
    },
  },

  saveButton: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "#008000",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#75c275",
    },
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AssignState = () => {
    console.log(props);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.saveButton}
      >
        Assign
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Choose User"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Assigning state to User means that he will be able to use it in his
            profile. You will no longer see this State Subscription available
            until you remove it from User's Subscriptions
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => AssignState()} color="primary" autoFocus>
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
