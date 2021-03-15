import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./Email/index.css";
import axios from "axios";
import apiAddress from "../global/endpointAddress";
import fileDownload from "js-file-download";
import AlertBox from "../components/alertBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { limegreen } from "../global/Colors";
import Loader from "./plainCicularLoader";
import SectionsPlanForm from "./ExportPlanProfile/SectionsPlanForm";

const useStyles = makeStyles({
  contactSign: {
    fontSize: 15,
  },
  exportBtn: {
    backgroundColor: limegreen,
    color: "white",
    "&:hover": {
      backgroundColor: "#68BA54",
    },
  },
  contactButton: {
    backgroundColor: "#3F51B5",
    borderRadius: "20px",
    padding: "8px 15px",
    cursor: "pointer",
    color: "white",
    maxWidth: "220px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
  },

  main: {
    position: "fixed",
    zIndex: 99999999999999999,
    bottom: 0,
    left: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
  },
  closeIcon: {
    position: "absolute",
    right: 8,
    top: 6,
    fontSize: 13,
    border: "1px solid #fff",
    borderRadius: "99px",
    padding: "2px 7px 2px 7px",
    color: "black",
    cursor: "pointer",
    fontWeight: 10,
  },
});
const ExportPlanProfile = ({ companyID }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = React.useState(false);
  const [selectedState, setSelectedState] = useState([]);
  const fullWidth = true;
  const maxWidth = "lg";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedState([]);
    setOpen(false);
  };

  const onExportFullClick = async (e) => {
    e.preventDefault();
    const exportUrl = `${apiAddress}/api/SmallCompanies/GetPlanProfilePdf?companyId=${companyID}`;
    setLoading(true);

    await axios
      .get(exportUrl, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "report.pdf");
        setLoading(false);
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        handleClose();
        setAlertMessage("For some reason we could not export this plan.");
      });
  };

  const onExportSectionClick = async (e) => {
    e.preventDefault();
    const exportUrl = `${apiAddress}/api/SmallCompanies/GetCompanyReportPdf`;
    setLoading(true);

    await axios
      .post(
        exportUrl,
        {
          CompanyID: companyID,
          Sections: selectedState,
        },
        {
          headers: {
            Authorization: "Basic " + localStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "blob",
        }
      )
      .then((res) => {
        fileDownload(res.data, "selected-report.pdf");
        setLoading(false);
        handleClose();
      })
      .catch((err) => {
        setLoading(false);
        handleClose();
        setAlertMessage("For some reason we could not export this plan.");
      });
  };
  return (
    <Box className={classes.main}>
      <Box className={classes.contactButton} onClick={handleClickOpen}>
        <GetAppIcon />
        <Typography component="h4" className={classes.contactSign}>
          Export Plan
        </Typography>
      </Box>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle
          id="max-width-dialog-title"
          style={{ textAlign: "center" }}
        >
          Export Plan Design
          <span onClick={handleClose} className={classes.closeIcon}>
            X
          </span>
        </DialogTitle>
        {loading ? (
          <Loader />
        ) : (
          <DialogContent
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Box
              style={{
                width: "50%",
                textAlign: "center",
              }}
            >
              <Button
                className={classes.exportBtn}
                style={{ top: "50%" }}
                onClick={onExportFullClick}
              >
                Export Full Plan
              </Button>
            </Box>
            <Box style={{ width: "50%", textAlign: "center" }}>
              <Button
                className={classes.exportBtn}
                onClick={onExportSectionClick}
              >
                Export Selected Sections
              </Button>
              <SectionsPlanForm
                setSelectedState={setSelectedState}
                state={selectedState}
              />
            </Box>
          </DialogContent>
        )}
      </Dialog>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </Box>
  );
};

export default ExportPlanProfile;
