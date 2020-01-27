import React from "react";

export default () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Our Story</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={require("../../../styles/pages/homepage/images/about/1.jpg")}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2018</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Our CEO, Joseph Saldana, have been thinking about the idea
                      in the past few years. So in this year he has decided to
                      give it a chance and has started searching for best
                      partners who can help him achieve the GOAL.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={require("../../../styles/pages/homepage/images/about/2.jpg")}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>January 2019</h4>
                    <h4 className="subheading">The Team has been formed</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Joseph has managed to find the missing parts of the puzzle
                      and has built the team including 2 developers - Borislav
                      Stefanov and Plamen Penev. Each of them is part of the
                      Wealth Analytica family since then.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={require("../../../styles/pages/homepage/images/about/3.jpg")}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2019</h4>
                    <h4 className="subheading">The development</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      After the team has been formed the construction of Wealth
                      Analytica has taken over the attention. All the data
                      analysis, design, coding and creating have been performed
                      by the team.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={require("../../../styles/images/blacklogo.png")}
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>February 2020</h4>
                    <h4 className="subheading">Completion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Wealth Analytica has been completed and started gaining a
                      lot of clients all over the USA. The team is still working
                      on every single detail to make it better and better.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
