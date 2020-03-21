import React from "react";

export default props => {
  return (
    <div className="one-pager-attachment-logo" id="clientLogo">
      <img
        src={`data:image/png;base64,${sessionStorage.getItem("LogoData")}`}
      />
    </div>
  );
};
