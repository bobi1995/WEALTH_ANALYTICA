import React from "react";

export default () => {
  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Check our activities.
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a
              className="portfolio-link"
              data-toggle="modal"
              href="#portfolioModal1"
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
            </a>
            <div className="portfolio-caption">
              <h4>Providing data</h4>
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
              href="#portfolioModal3"
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
    </section>
  );
};
