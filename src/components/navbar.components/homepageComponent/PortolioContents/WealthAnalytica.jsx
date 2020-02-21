import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default () => {
  return (
    <div className=" text-center portfolio-hidden-text" id="portfolio1">
      <h1 className="home-portfolio-h1 text-muted">Wealth Analytica</h1>
      <p className="text-muted portfolio-paragraphs">
        Leverage the Wealth Analytica proprietary software to deliver recurring
        Pension Characteristics and Analytical information to your clients
      </p>
      {/*************ONE PAGER***************** */}
      <div className="portfolio-WA-section text-center">
        <h2 className="text-muted">One Pager</h2>
        <img
          className="img-fluid portfolio-WA-img"
          alt="missing_img"
          src={require("../../../../styles/pages/homepage/images/portfolio/OnePager.png")}
        />
        <p className="portfolio-paragraphs port-para-white">
          One Pager is powerfull tool that helps you visualise every sponsor
          data. It provides tables and graphs alongside with location and plan
          names
        </p>
        <hr className="portfolio-separator" />
      </div>

      {/*************PLAN PROFILE***************** */}
      <div className="portfolio-WA-section text-center">
        <h2 className="port-para-white">Plan Profile</h2>
        <img
          className="img-fluid portfolio-WA-img"
          alt="missing_img"
          src={require("../../../../styles/pages/homepage/images/portfolio/PlanProfile.png")}
        />
        <p className=" portfolio-paragraphs port-para-white">
          Plan Profile is the extension of One Pager. It gives all information
          for the sponsor and has section with every single part
          characteristics. Also indicates if there is any failure for this
          sponsor
        </p>
        <hr className="portfolio-separator" />
      </div>

      {/*************DASHBOARD***************** */}
      <div className="portfolio-WA-section text-center">
        <h2 className="port-para-white">Dashboard</h2>
        <img
          className="img-fluid portfolio-WA-img"
          alt="missing_img"
          src={require("../../../../styles/pages/homepage/images/portfolio/Dashboard.png")}
        />
        <p className="text-muted portfolio-paragraphs">
          Dashboard is the point where you can see the whole picture for
          different states or to combine several states in one. The page is
          providing 6 graphs for significant areas - Net Assets EOY, Net Income,
          Income Contributed By Employee, Participant Account Balance, Total
          Expenses, Total Income
        </p>
        <hr className="portfolio-separator" />
      </div>
      <Link
        className="btn btn-primary"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={25}
        duration={500}
        onClick={() => {
          document.getElementById("portfolio1").style.display = "none";
        }}
      >
        Hide
      </Link>
    </div>
  );
};
