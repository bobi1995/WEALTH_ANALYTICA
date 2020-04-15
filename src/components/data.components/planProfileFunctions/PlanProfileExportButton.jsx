import React from "react";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";

export default props => {
  const onExportClick = e => {
    e.preventDefault();
    //HEADING APPEAR
    document.getElementById("clientLogo-PlanProfile").style.display = "block";

    // SHOWING TABLE ON TOP OF GRAPHS WITH CLASS CHANGA
    document.getElementById("planProfileStatistics-table").style.display =
      "none";
    document
      .getElementById("planProfileStatistics-table-invisible")
      .classList.remove("invisible-table");
    document
      .getElementById("planProfileStatistics-table-invisible")
      .classList.add("plan-table-section");

    //*****************CANVAS CONVERT **************************/
    html2canvas(document.body).then(canvas => {
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
    });
    // HIDING LOGO AND DISPLAYING TABLE NEXT TO GRAPHS
    document.getElementById("clientLogo-PlanProfile").style.display = "none";
    document.getElementById("planProfileStatistics-table").style.display =
      "block";

    // HIDING TABLE ON TOP OF GRAPHS WITH CLASS CHANGE
    document
      .getElementById("planProfileStatistics-table-invisible")
      .classList.remove("plan-table-section");

    document
      .getElementById("planProfileStatistics-table-invisible")
      .classList.add("invisible-table");
  };
  return (
    <div className="plan-businessInfo" id="myMm" data-html2canvas-ignore>
      <button
        onClick={onExportClick}
        className="btn btn-success btn-lg onepagertopbuttons"
      >
        Export Plan
      </button>
    </div>
  );
};
