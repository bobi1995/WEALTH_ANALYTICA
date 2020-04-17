import React from "react";
import html2canvas from "html2canvas";
import Loader from "../dashboardFunctions/loader";
import * as jsPDF from "jspdf";

export default (props) => {
  const onExportClick = (e) => {
    e.preventDefault();
    document.getElementById("export_button_pp").innerHTML = "Exporting...";
    //HEADING APPEAR
    document.getElementById("clientLogo-PlanProfile").style.display = "block";

    //*****************CANVAS CONVERT **************************/
    html2canvas(document.body).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("file.pdf");
      document.getElementById("export_button_pp").innerHTML = "Export Plan";
    });
    // HIDING LOGO
    document.getElementById("clientLogo-PlanProfile").style.display = "none";
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
