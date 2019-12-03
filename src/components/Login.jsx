import React from "react";
import "../styles/pages/login.scss";

const Login = () => {
  const clicked = () => {
    document.querySelector(".cont").classList.toggle("s--signup");
  };

  return (
    <div className="cont2">
      <div expand="lg" className="container-fluid">
        <h1>logo</h1>
        <h1>Welcome to Wealth Analytica</h1>
        <h1>
          <a className="login-a" href="/">
            Back to site
          </a>
        </h1>
      </div>
      <div className="cont">
        <div className="form sign-in">
          <h2>Hello again,</h2>
          <div className="div-label">
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
          </div>
          <div className="div-label">
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
          </div>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="submit">
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div onClick={clicked} className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <div className="div-label">
              <label>
                <span>First Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Last Name</span>
                <input type="text" />
              </label>
            </div>
            <div className="div-label">
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
            </div>
            <div className="div-label">
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <label>
                <span>Confirm Password</span>
                <input type="password" />
              </label>
            </div>
            <div className="div-label">
              <label>
                <span>Company Name</span>
                <input type="text" />
              </label>
              <label>
                <span>Address</span>
                <input type="text" />
              </label>
            </div>
            <button type="button" className="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <footer id="footer" class="footer-1">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    Wealth Analytica<span></span>
                  </h5>
                  <p>
                    We can help you achieve your goals by serving you big amount
                    of data
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul class="thumbnail-widget">
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Home</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">About us</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Last stories</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">News</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Financial world</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>
                    Get your full or partial access to our Business database.
                  </p>
                  <a class="btn" href="#." target="_blank">
                    Register Now
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
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

        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>Copyright Wealth Analytica ©2019. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
