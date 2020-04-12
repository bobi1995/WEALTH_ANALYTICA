import React from "react";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";

export default () => {
  const onExportClick = e => {
    e.preventDefault();
    html2canvas(document.body).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, "JPEG", 20, 20);
      doc.save("test.pdf");
    });
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
