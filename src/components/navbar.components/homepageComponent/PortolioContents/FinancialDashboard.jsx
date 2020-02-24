import React from "react";

export default () => {
  return (
    <div id="portfolio-popupid" className="portfolio-popup">
      <div className="portfolio-popup-content">
        <span
          className="portfolio-close"
          onClick={() => {
            document.getElementById("portfolio-popupid").style.display = "none";
          }}
        >
          &times;
        </span>
        <h1 className="home-portfolio-h1 text-muted">
          Wealth Analytica Financial Adviosor Dashbaord
        </h1>

        {/*************DASHBOARD***************** */}
        <div className="portfolio-WA-section text-center">
          <img
            className="img-fluid portfolio-WA-img"
            alt="missing_img"
            src={require("../../../../styles/pages/homepage/images/portfolio/contents/Dashboard.png")}
          />
          <p className="text-muted portfolio-paragraphs">
            Dashboard is the point where you can see the whole picture for
            different states or to combine several states in one. The page is
            providing 6 graphs for significant areas - Net Assets EOY, Net
            Income, Income Contributed By Employee, Participant Account Balance,
            Total Expenses, Total Income
          </p>
        </div>
      </div>
    </div>
  );
};
