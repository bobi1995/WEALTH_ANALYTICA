import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SaveIcon from "@material-ui/icons/Save";
import AlerBox from "../../../../../components/alertBox";

const useStyles = makeStyles(() => ({
  saveButton: {
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
    "&:hover": {
      backgroundColor: "#ff726f",
    },
  },
}));

export default (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveFilterFunction = (e) => {
    e.preventDefault();
    const data = {
      FilterName: document.getElementById("save-filter-name").value,
      FilterParameters: props.url,
    };

    axios
      .post(`${apiAddress}/api/Users/AddUserFilter`, data, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
        },
      })
      .then((res) => {
        handleClose();
        setAlertMessage("Filter saved.");
      })
      .catch((e) => {
        setAlertMessage("Filter not saved. Please try again.");
      });
  };

  return (
    <div style={{ marginLeft: "1%" }}>
      <Button
        variant="contained"
        id="right-filter-btn"
        className={classes.saveButton}
        startIcon={<SaveIcon />}
        onClick={handleClickOpen}
      >
        Save Filter
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Want to save your Search?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give name to your Search and save current results from the Filter.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="save-filter-name"
            label="Name:"
            type="text"
            fullWidth
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
          <Button onClick={saveFilterFunction} className={classes.saveButton2}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {alertMessage ? (
        <AlerBox text={alertMessage} display={setAlertMessage} success={true} />
      ) : (
        ""
      )}
    </div>
  );
};
