import React from "react";

export default () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">
              We provide high-profile services with big amount of data.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Information</h4>
            <p className="text-muted">
              We provide information for every pension plan in the United
              States. You can filter, select, compare and contact all companies
              from all states.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Analyses</h4>
            <p className="text-muted">
              If you want to learn more about every plan you can easily generate
              individual sheets with all the details regarding the plan.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Security</h4>
            <p className="text-muted">
              Our information is strongly protected and it is visible only for
              our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
