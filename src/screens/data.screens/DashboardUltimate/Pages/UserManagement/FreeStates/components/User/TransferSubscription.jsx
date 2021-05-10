import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import axios from "axios";
import apiAddress from "../../../../../../../../global/endpointAddress";
import { blue } from "@material-ui/core/colors";
import AlertBox from "../../../../../../../../components/alertBox";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, guid, paymentId } = props;
  const [users, setUsers] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

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
        setAlertMessage("Cannot get users. Please try again.");
      });
  }, [guid]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    let url = `${apiAddress}/api/Users/TransferSubscription?fromUserGuid=${guid}&toUserGuid=${value.Guid}&paymentID=${paymentId}`;
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
          const temp = JSON.parse(localStorage.getItem("States"));
          temp.push(res.data);
          localStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        setAlertMessage("One of the States is already assigned to this User.");
      });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Transfer
      </DialogTitle>
      <List>
        {users.map((el) => (
          <ListItem
            button
            onClick={() => handleListItemClick(el)}
            key={el.Guid}
            style={{ textAlign: "center" }}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${el.FirstName} ${el.LastName}`} />
          </ListItem>
        ))}
      </List>
      {alertMessage ? (
        <AlertBox
          text={alertMessage}
          display={setAlertMessage}
          success={false}
        />
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

export default function SimpleDialogDemo({ guid, paymentId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div style={{ marginTop: "25%" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Transfer
      </Button>
      <SimpleDialog
        selectedValue="none"
        open={open}
        onClose={handleClose}
        guid={guid}
        paymentId={paymentId}
      />
    </div>
  );
}
