import React from "react";
import { Link } from "react-scroll";

import "../../styles/pages/home.css";
import Portfolio from "./homepageComponent/Portfolio";
import Navigation from "./homepageComponent/Navigation";
import About from "./homepageComponent/About";
import Team from "./homepageComponent/Team";
import Contact from "./homepageComponent/Contact";
import Services from "./homepageComponent/Services";
import ImageSection from "./homepageComponent/ImageSection";
const Home = () => {
  return (
    <div className="home-content">
      <Navigation />
      <ImageSection />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Contact />

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">
                Copyright &copy; Wealth Analytica 2020
              </span>
            </div>
            <div className="col-md-4">
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
                  <a href="#">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
