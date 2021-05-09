import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import axios from "axios";
import apiAddress from "../../../../../../../../global/endpointAddress";
import { blue } from "@material-ui/core/colors";
import AlertBox from "../../../../../../../../components/alertBox";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const {
    onClose,
    selectedValue,
    open,
    guid,
    paymentId,
    bookmarkCount,
    state,
    type,
  } = props;
  const [users, setUsers] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [checked, setChecked] = useState("");
  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetCompanyUsers`;
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const arr = res.data.filter((el) => el.Guid !== guid);
        setUsers(arr);
      })
      .catch((err) => {
        //setAlertMessage("Cannot get users. Please try again.");
      });
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleToggle = (value) => {
    if (checked === value) {
      setChecked("");
    } else setChecked(value);
  };
  //********************REMOVE AND REMOVE BOOKMARKS*******************/
  const removeWithBookmarkFunction = () => {
    const url = `${apiAddress}/api/Users/RemoveSubscription?userGuid=${guid}&state=${state}&type=${type}&paymentID=${paymentId}`;
    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (localStorage.getItem("isBusiness")) {
          let temp = JSON.parse(localStorage.getItem("States"));
          temp = temp.filter((el) => el.State !== state || el.Type !== type);
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage(
          "Subscription removed unsuccessfully. Please try again"
        );
      });
  };

  //********************REMOVE AND TRANSFER BOOKMARKS*******************/
  const removeAndTrasferBookmarks = () => {
    const url = `${apiAddress}/api/Users/TransferBookmarks?fromUserGuid=${guid}&toUserGuid=${checked}&state=${state}&paymentID=${paymentId}`;
    axios
      .post(
        url,
        {},
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (localStorage.getItem("isBusiness")) {
          let temp = JSON.parse(localStorage.getItem("States"));
          temp = temp.filter((el) => el.State !== state || el.Type !== type);
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage(
          "Subscription removed unsuccessfully. Please try again"
        );
      });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"sm"}
      fullWidth={true}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Do you want to Transfer all {bookmarkCount} Bookmarks to other User?
      </DialogTitle>
      <List>
        {users.map((el) =>
          el.Guid === localStorage.getItem("Guid") ? null : (
            <ListItem
              button
              key={el.Guid}
              style={{ textAlign: "center" }}
              onClick={() => handleToggle(el.Guid)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked === el.Guid ? true : false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": el.Guid }}
                />
              </ListItemIcon>
              <ListItemText primary={`${el.FirstName} ${el.LastName}`} />
            </ListItem>
          )
        )}
      </List>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button color="primary" autoFocus onClick={removeWithBookmarkFunction}>
          Remove with Bookmarks
        </Button>
        <Button
          color="primary"
          disabled={checked ? false : true}
          onClick={removeAndTrasferBookmarks}
        >
          Remove and Transfer
        </Button>
      </DialogActions>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({
  guid,
  paymentId,
  setOpen,
  open,
  count,
  state,
  type,
}) {
  const handleClose = (value) => {
    setOpen({
      open: false,
      bookmarkNum: 0,
    });
  };

  console.log(guid);
  return (
    <div style={{ marginTop: "25%" }}>
      <SimpleDialog
        selectedValue="none"
        open={open}
        onClose={handleClose}
        guid={guid}
        paymentId={paymentId}
        bookmarkCount={count}
        state={state}
        type={type}
      />
    </div>
  );
}
