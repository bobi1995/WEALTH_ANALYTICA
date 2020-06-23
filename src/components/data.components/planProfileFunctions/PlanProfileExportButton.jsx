import React, { useState } from "react";
import axios from "axios";
import apiAddress from "../../../global/endpointAddress";
import fileDownload from "js-file-download";

export default (props) => {
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
    <div className="plan-businessInfo" id="myMm" data-html2canvas-ignore>
      <button
        onClick={onExportClick}
        className="btn btn-success btn-lg onepagertopbuttons"
        id="export_button_pp"
      >
        Export Plan
      </button>
    </div>
  );
};
