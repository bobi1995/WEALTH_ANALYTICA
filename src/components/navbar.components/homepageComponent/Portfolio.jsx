import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import WealthAnalytica from "./PortolioContents/WealthAnalytica";
import FinancialPlanning from "./PortolioContents/FinancialPlanning";

export default () => {
  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="home-portfolio-h1 section-heading text-uppercase">
              Portfolio
            </h1>

            <h3 className="section-subheading text-muted">
              Check our features.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <Link
              to="portfolio1"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="portfolio-link"
              data-toggle="modal"
              onClick={() => {
                document.getElementById("portfolio2").style.display = "none";
                document.getElementById("portfolio1").style.display = "block";
              }}
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/wealth_analytica.png")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Wealth Analytica</h4>
              <p className="text-muted">
                Enhanced Qualified Plan Analytics Service offering designed to
                differentiate and diversify your lines of business
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
                src={require("../../../styles/pages/homepage/images/portfolio/data.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Financial Planning</h4>
              <p className="text-muted">
                Delivering Wall Street Quality Qualified Plan Analytics to the
                Financial Planning Professional
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
              <h4>Connection</h4>
              <p className="text-muted">Quick connection to all companies</p>
            </div>
          </div>
        </div>
      </div>
      <WealthAnalytica />
      <FinancialPlanning />
    </section>
  );
};
