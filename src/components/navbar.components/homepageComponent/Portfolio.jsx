import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default () => {
  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
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
                console.log("WA");
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
                src={require("../../../styles/pages/homepage/images/portfolio/data.jpg")}
                alt=""
              />
            </Link>
            <div className="portfolio-caption">
              <h4>Wealth Analytica</h4>
              <p className="text-muted">We provide the data in nice format</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal2"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src={require("../../../styles/pages/homepage/images/portfolio/compete.jpg")}
                alt=""
              />
            </a>
            <div className="portfolio-caption">
              <h4>Compare</h4>
              <p className="text-muted">Compare all plans across the USA</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolio1"
              onClick={() => {
                console.log("WA");
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
            </a>
            <div className="portfolio-caption">
              <h4>Connection</h4>
              <p className="text-muted">Quick connection to all companies</p>
            </div>
          </div>
        </div>
      </div>
      {/****** PORTFOLIO HIDDEN - WEALTH ANALYTICA***** */}
      <div className=" text-center portfolio-hidden-text" id="portfolio1">
        <h1 className="home-portfolio-h1">Wealth Analytica</h1>
        <p className="text-muted portfolio-paragraphs">
          Enhanced Qualified Plan Analytics Service offering designed to
          differentiate and diversify your lines of business while deepening
          your client relationship
        </p>
        {/*************ONE PAGER***************** */}
        <div className="portfolio-WA-section text-center">
          <h2>One Pager</h2>
          <img
            className="img-fluid portfolio-WA-img"
            alt="missing_img"
            src={require("../../../styles/pages/homepage/images/portfolio/OnePager.png")}
          />
          <p className=" portfolio-paragraphs port-para-white">
            One Pager is powerfull tool that helps you visualise every sponsor
            data. It provides tables and graphs alongside with location and plan
            names
          </p>
          <hr className="portfolio-separator" />
        </div>

        {/*************PLAN PROFILE***************** */}
        <div className="portfolio-WA-section text-center">
          <h2>Plan Profile</h2>
          <img
            className="img-fluid portfolio-WA-img"
            alt="missing_img"
            src={require("../../../styles/pages/homepage/images/portfolio/PlanProfile.png")}
          />
          <p className="text-muted portfolio-paragraphs">
            Plan Profile is the extension of One Pager. It gives all information
            for the sponsor and has section with every single part
            characteristics. Also indicates if there is any failure for this
            sponsor
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
    </section>
  );
};
