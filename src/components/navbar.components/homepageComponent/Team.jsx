import React from "react";

export default () => {
  return (
    <section className="bg-light page-section" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Meet the team.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={require("../../../styles/pages/homepage/images/team/0.jfif")}
                alt=""
              />
              <h4>Joseph Saldana</h4>
              <p className="text-muted">CEO and Founder</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/thegeminicompanies/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={require("../../../styles/pages/homepage/images/team/1.jfif")}
                alt=""
              />
              <h4>Plamen Penev</h4>
              <p className="text-muted">Back-end and Database developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/plamen-penev-72b5a683/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={require("../../../styles/pages/homepage/images/team/2.jfif")}
                alt=""
              />
              <h4>Borislav Stefanov</h4>
              <p className="text-muted">Designer and Frond-end developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/borislav-stefanov-b34b34166/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Feel free to contact each of us if you have any questions or
              suggestions. We always welcome feedback from our current or future
              clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
