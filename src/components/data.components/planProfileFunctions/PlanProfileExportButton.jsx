import React, { useState } from "react";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";

export default (props) => {
  const [imageData, setImageData] = useState("");
  const [imageData2, setImageData2] = useState("");
  const [flag, setFlag] = useState(0);

  const [height, setHeight] = useState(0);

  const onExportClick = async (e) => {
    e.preventDefault();
    document.getElementById("export_button_pp").innerHTML = "Exporting...";
    //HEADING APPEAR
    document.getElementById("clientLogo-PlanProfile").style.display = "block";

    //*****************CANVAS CONVERT **************************/
    await html2canvas(document.body).then((canvas) => {
      var imgData = canvas.toDataURL("image/png", 0.5);
      var imgWidth = 210;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      setImageData(imgData);
      setHeight(imgHeight);
      document
        .getElementById("firstpdf-page")
        .setAttribute("data-html2canvas-ignore", true);
      document
        .getElementById("planFinancial-main")
        .setAttribute("data-html2canvas-ignore", true);
      document
        .getElementById("planParticipants-main")
        .setAttribute("data-html2canvas-ignore", true);

      document
        .getElementById("planStatistics-main")
        .removeAttribute("data-html2canvas-ignore");
      document
        .getElementById("PlanHealth-main")
        .removeAttribute("data-html2canvas-ignore");
      document
        .getElementById("planService-main")
        .removeAttribute("data-html2canvas-ignore");
      document
        .getElementById("planAlerts-main")
        .removeAttribute("data-html2canvas-ignore");
    });

    //*****************CANVAS CONVERT 2**************************/
    await html2canvas(document.body).then((canvas) => {
      var imgData = canvas.toDataURL("image/png", 0.5);
      var imgWidth = 210;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      setImageData2(imgData);
      setHeight(imgHeight);
    });
    // HIDING LOGO
    document.getElementById("clientLogo-PlanProfile").style.display = "none";
  };

  if (imageData !== "" && imageData2 !== "" && flag === 0) {
    var imgWidth = 210;
    var doc = new jsPDF("p", "mm");
    var position = 0;

    doc.addImage(imageData, "PNG", 0, position, imgWidth, height);
    doc.addPage();
    doc.addImage(imageData2, "PNG", 0, position, imgWidth, height);

    doc.save("file.pdf");
    document.getElementById("export_button_pp").innerHTML = "Export Plan";

    setFlag(1);
  }

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
