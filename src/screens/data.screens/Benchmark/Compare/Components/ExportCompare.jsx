import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import axios from "axios";
import apiAddress from "../../../../../global/endpointAddress";
import fileDownload from "js-file-download";
import { lastYear } from "../../../../../global/Years";
import AlertBox from "../../../../../components/alertBox";

const useStyles = makeStyles({
  contactSign: {
    fontSize: 15,
  },

  contactButton: {
    backgroundColor: "#6666ff",
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
    bottom: 45,
    right: "10px",
    fontWeight: 300,
    fontSize: 15,
    fontFamily: "Raleway , Arial, sans-serif",
    width: 179,
  },
});

const ExportCompare = ({ data }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onExportFullClick = async (e) => {
    e.preventDefault();
    let url = `${apiAddress}/api/SmallCompanies/GetBenchmarkCompareFile?year=${lastYear}`;

    data.map((el) => {
      url = url.concat(`&companyids=${el.CompanyID}`);
      return url;
    });

    setLoading(true);

    await axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, "compare.pdf");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setAlertMessage("For some reason we could not export this plan.");
      });
  };
  return (
    <Box className={classes.main}>
      <Box
        className={classes.contactButton}
        onClick={loading ? () => {} : onExportFullClick}
      >
        <GetAppIcon />
        <Typography component="h4" className={classes.contactSign}>
          {loading ? "Exporting..." : " Export Compare"}
        </Typography>
      </Box>
      {alertMessage ? (
        <AlertBox
          text={alertMessage}
          display={setAlertMessage}
          success={false}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default ExportCompare;
