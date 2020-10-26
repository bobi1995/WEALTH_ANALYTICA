import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";
import apiAddress from "../../../global/endpointAddress";
import axios from "axios";
import { softRed } from "../../../global/Colors";

const useStyles = makeStyles({
  deleteBtn: {
    color: "#CC6666",
    border: `1px solid ${softRed}`,
    "&:hover": {
      color: "white",
      backgroundColor: softRed,
    },
  },
});

export default function ConformationDialog({ filter }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const deleteFilter = () => {
    axios
      .delete(`${apiAddress}/api/Users/DeleteUserFilter?id=${filter.ID}`, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        window.location.reload();
        alert("Filter was deleted.");
      })
      .catch((e) => {
        console.log(e);
        alert("Could not delete the filter. Try again.");
        window.location.reload();
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.deleteBtn} onClick={handleClickOpen}>
        Delete Filter
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {filter.FilterName} filter?
            Confirming deletion will remove permanently the created filter.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteFilter} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
