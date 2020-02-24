import React from "react";

export default () => {
  return (
    <div id="heatmap-popupid" className="portfolio-popup">
      <div className="portfolio-popup-content">
        <span
          className="portfolio-close"
          onClick={() => {
            document.getElementById("heatmap-popupid").style.display = "none";
          }}
        >
          &times;
        </span>
        <h1 className="home-portfolio-h1 text-muted">
          Wealth Analytica Heatmap
        </h1>

        {/*************DASHBOARD***************** */}
        <div className="portfolio-WA-section text-center">
          <img
            className="img-fluid portfolio-WA-img"
            alt="missing_img"
            src={require("../../../../styles/pages/homepage/images/portfolio/contents/alerts.png")}
          />
          <p className="text-muted portfolio-paragraphs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit sed necessitatibus consectetur error voluptates quo,
            ducimus dolorem vero dolor totam ipsa nemo, enim repellendus
            possimus magni saepe facere quidem voluptatibus?
          </p>
        </div>
      </div>
    </div>
  );
};
