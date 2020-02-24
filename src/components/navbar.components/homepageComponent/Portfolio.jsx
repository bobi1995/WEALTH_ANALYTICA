import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import FinancialDashboard from "./PortolioContents/FinancialDashboard";
import Heatmap from "./PortolioContents/Heatmap";
import OnePager from "./PortolioContents/LeadGenerator";

export default () => {
  window.onclick = function(event) {
    if (
      event.target == document.getElementById("heatmap-popupid") ||
      event.target == document.getElementById("portfolio-popupid")
    ) {
      document.getElementById("heatmap-popupid").style.display = "none";
      document.getElementById("portfolio-popupid").style.display = "none";
    }
  };
  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="home-portfolio-h1 ">
              Our Focus Serves to Differentiate Your Business
            </h1>

            <h3 className="section-subheading text-muted">
              Check our features.
            </h3>
          </div>
        </div>
        <div className="row">
          {/****************DASHBOARD************* */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio"
              className="portfolio-link"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                // document.getElementById("portfolio2").style.display = "none";
                // document.getElementById("portfolio1").style.display = "block";

                document.getElementById("portfolio-popupid").style.display =
                  "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/data.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Financial Dashboard</h4>
              <p className="text-muted">
                Wealth Analytica leading edge technology enables you to develop
                your desired Total Addressable Market (T.A.M.) and subsequently
                cultivate new leads through Wealth Analytica Lead Generator
              </p>
            </div>
          </div>

          {/****************HEATMAP************* */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio"
              className="portfolio-link"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                // document.getElementById("portfolio2").style.display = "none";
                // document.getElementById("portfolio1").style.display = "block";

                document.getElementById("heatmap-popupid").style.display =
                  "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/heatmap.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Heatmap</h4>
              <p className="text-muted">
                The Wealth Analytica Algorithms analyze hundreds of data points
                and highlights deteriorating pension metrics
              </p>
            </div>
          </div>

          {/****************LEAD GENERATOR************* */}
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio"
              className="portfolio-link"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => {
                // document.getElementById("portfolio2").style.display = "none";
                // document.getElementById("portfolio1").style.display = "block";

                document.getElementById("lead-popupid").style.display = "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/lead-generator.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Lead Generator</h4>
              <p className="text-muted">
                Wall Street Caliber Lead Generator engineered to capture and
                communicate your differentiating message while encompassing the
                Wealth Analytica Pension Analytics
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio1"
              className="portfolio-link"
              onClick={() => {
                // document.getElementById("portfolio2").style.display = "none";
                // document.getElementById("portfolio1").style.display = "block";

                document.getElementById("portfolio-popupid").style.display =
                  "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/search-engine.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Search engine</h4>
              <p className="text-muted">
                The Wealth Analytica proprietary technology search engines
                facilitate Financial Advisors to access, analyze and retain and
                evaluate qualified plan information
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="portfolio-link"
              data-toggle="modal"
              onClick={() => {
                document.getElementById("portfolio1").style.display = "none";
                document.getElementById("portfolio2").style.display = "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/pension-analytics.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Pension Analytics</h4>
              <p className="text-muted">
                Wealth Analytica new approach democratizes Qualified Plan
                information that was once exclusively available to Bulge Bracket
                Financial Institutions
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio2"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="portfolio-link"
              data-toggle="modal"
              onClick={() => {
                document.getElementById("portfolio2").style.display = "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/connection.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Wealth Analytica Connect</h4>
              <p className="text-muted">
                Leverage the Wealth Analytica proprietary software to deliver
                recurring Pension Statements and Analytical information to your
                clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <FinancialDashboard />
      <Heatmap />
      <OnePager />
    </section>
  );
};
