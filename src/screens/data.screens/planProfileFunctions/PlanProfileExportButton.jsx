import React from "react";
import axios from "axios";
import apiAddress from "../../../global/endpointAddress";
import fileDownload from "js-file-download";
import { Button, makeStyles, Box, Tooltip, Link } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginBottom: "1%",
    marginTop: "3%",
    justifyContent: "center",
    display: "flex",
  },
  exportBtn: {
    backgroundColor: "#008000",
    "&:hover": {
      backgroundColor: "#A8DD8A",
    },

    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
    color: "white",
    width: "10%",
  },
  heatmapBtn: {
    backgroundColor: "#c46c00",
    "&:hover": {
      backgroundColor: "#ff9e27",
    },
    color: "white",
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    paddingTop: "0.3%",
    marginLeft: "1%",
    width: "10%",
  },
});

export default (props) => {
  const classes = useStyles();
  const onExportClick = async (e) => {
    e.preventDefault();
    const exportUrl = `${apiAddress}/api/SmallCompanies/GetPlanProfilePdf?companyId=${props.companyID}`;

    document.getElementById("export_button_pp").innerHTML = "Exporting...";
    //HEADING APPEAR

    axios
      .get(exportUrl, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      })
      .then((res) => {
        document.getElementById("export_button_pp").innerHTML = "Export Plan";
        fileDownload(res.data, "report.pdf");
      })
      .catch((err) => {
        document.getElementById("export_button_pp").innerHTML = "Export Plan";

        console.log(err);
      });
  };

  return (
    <Box className={classes.container} id="myMm" data-html2canvas-ignore>
      <Button
        onClick={onExportClick}
        className={classes.exportBtn}
        id="export_button_pp"
      >
        Export Plan
      </Button>

      <Tooltip title="Go to Heatmap" className={classes.heatmapBtn}>
        <Box>
          <Link
            href={`/heatmap/${props.companyID}`}
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            HEATMAP
          </Link>
        </Box>
      </Tooltip>
    </Box>
  );
};
