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
                      <a href="https://wealthanalytica.com/">Home</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="https://wealthanalytica.com/about/">About us</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="https://wealthanalytica.com/services/">
                        Services
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="https://wealthanalytica.com/differences/">
                        Why Us?
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="https://wealthanalytica.com/contact/">Contact</a>
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
                {sessionStorage.getItem("logged") === "true" ? (
                  ""
                ) : (
                  <a className="footer-btn" href="/login">
                    Log In/Register
                  </a>
                )}
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">
                  Contact Us<span></span>
                </h5>

                <p>
                  <a
                    href="mailto:info@domain.com"
                    title="glorythemes"
                    className="footer-sitelink"
                  >
                    info@wealthanalytica.com
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
              <p>Copyright Wealth Analytica ©2020. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
