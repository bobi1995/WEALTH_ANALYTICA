import React, { useEffect, useState } from "react";
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
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [openAuto, setOpenAuto] = useState(false);
  const loading = openAuto && users.length === 0;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AssignState = () => {
    axios
      .post(
        `${apiAddress}/api/Users/AddSubscription?userGuid=${selectedUser.Guid}&state=${props.state}&type=${props.data.Type}&paymentID=${props.data.PaymentID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (selectedUser.IsBusinessAccount) {
          const temp = JSON.parse(sessionStorage.getItem("States"));
          temp.push(res.data);
          sessionStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        alert("State is already assigned to this User.");
      });
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    (async function fetchData() {
      const response = await axios
        .get(`${apiAddress}/api/Users/GetCompanyUsers`, {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((result) => {
          setUsers(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  const onUserPick = (e, v) => {
    setSelectedUser(v);
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

          <Autocomplete
            open={openAuto}
            onOpen={() => {
              setOpenAuto(true);
            }}
            onClose={() => {
              setOpenAuto(false);
            }}
            loading={loading}
            options={users}
            disableCloseOnSelect
            onChange={onUserPick}
            getOptionLabel={(option) =>
              `${option.FirstName} ${option.LastName}`
            }
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.FirstName} {option.LastName}
              </React.Fragment>
            )}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Users"
                placeholder="Enter user"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
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
