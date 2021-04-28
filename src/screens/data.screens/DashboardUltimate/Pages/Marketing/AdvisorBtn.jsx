import React, { useState } from "react";
import PropTypes from "prop-types";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import GetAppIcon from "@material-ui/icons/GetApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography, Box, makeStyles } from "@material-ui/core";
import AdvisorList from "../../../../../global/AdvisorAdvantage";
import { primaryBlue } from "../../../../../global/Colors";
import commonFunction from "../../../../../components/commonFunctions";
import apiAddress from "../../../../../global/endpointAddress";
import AlertBox from "../../../../../components/alertBox";
import Loader from "../../../../../components/plainCicularLoader";
import axios from "axios";
import fileDownload from "js-file-download";

const useStyles = makeStyles({
  dialogContent: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  itemBox: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    flexWrap: "wrap",
  },
  stateName: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Baskervville",
    color: primaryBlue,
    textAlign: "center",
  },
});
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const classes = useStyles();
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleExport = (state, code) => {
    const url = `${apiAddress}/api/SmallCompanies/GetAdvisorAdvantageMarketingFile?state=${state}&businessCategory=${code}`;
    setLoading(true);
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "AdvisorAdvantage.pdf");
        setLoading(false);
      })
      .catch((err) => {
        setAlertMessage("For some reason we could not export the document");
        setLoading(false);
      });
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      style={{ marginTop: "5%" }}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth={"lg"}
    >
      <DialogTitle id="simple-dialog-title" style={{ textAlign: "center" }}>
        Advisor Advantage Reports
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        {loading ? (
          <Loader />
        ) : (
          <Box className={classes.itemBox}>
            {localStorage.getItem("States").length > 0
              ? JSON.parse(localStorage.getItem("States")).map((el) =>
                  AdvisorList.filter((report) => report.state === el.State)
                    .length > 0 ? (
                    <Box key={el.State}>
                      <Typography className={classes.stateName}>
                        {commonFunction.fullNameReturn(el.State)[0].name}
                      </Typography>
                      <List>
                        {AdvisorList.filter(
                          (report) => report.state === el.State
                        )
                          ? AdvisorList.filter(
                              (report) => report.state === el.State
                            )[0].industries.map((industry) => (
                              <ListItem key={industry.BusinessCode}>
                                <ListItemIcon
                                  onClick={() =>
                                    handleExport(
                                      el.State,
                                      industry.BusinessCode
                                    )
                                  }
                                >
                                  <GetAppIcon />
                                </ListItemIcon>
                                <ListItemText primary={industry.IndustryName} />
                              </ListItem>
                            ))
                          : null}
                      </List>
                    </Box>
                  ) : null
                )
              : null}
          </Box>
        )}
      </DialogContent>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : null}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ open, setOpen }) {
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog selectedValue="none" open={open} onClose={handleClose} />
    </div>
  );
}
