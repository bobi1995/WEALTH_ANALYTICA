import React from "react";
import "../styles/pages/footer.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">
                  Wealth Analytica<span></span>
                </h5>
                <p>
                  We can help you achieve your goals by serving you big amount
                  of data
                </p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Quick Links<span></span>
                </h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="/">Home</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="/about">About us</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">Last stories</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#.">News</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="/contact">Contact</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Get Started<span></span>
                </h5>
                <p>Get your full or partial access to our Business database.</p>
                <a className="btn" href="#." target="_blank">
                  Register Now
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>

                <p>
                  <a href="mailto:info@domain.com" title="glorythemes">
                    info@domain.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#popup1" id="popmeup"></a>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright Wealth Analytica ©2019. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
