import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-slideshow-image";
import night from "../../../styles/pages/homepage/images/headerImages/night.jpg";
import sky from "../../../styles/pages/homepage/images/headerImages/sky.jpg";
import red from "../../../styles/pages/homepage/images/headerImages/red.jpg";
import green from "../../../styles/pages/homepage/images/headerImages/green.jpg";

export default () => {
  const fadeImages = [
    "../../../styles/pages/homepage/images/headerImages/coins.jpg",
    "../../../styles/pages/homepage/images/headerImages/health.jpg",
    "../../../styles/pages/homepage/images/headerImages/house.jpg"
  ];
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true
  };
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div
            className="image-container"
            style={{ backgroundImage: `url(${green})` }}
          >
            <h1 className="each-fade-h1">WEALTH ANALYTICA</h1>
            <h2 className="each-fade-h2">
              Better Connects Advisors, Client Pension Plans and Data
            </h2>
            <Link
              className=" btn-primary text-uppercase js-scroll-trigger slider-btn"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tell Me More
            </Link>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${sky})`
            }}
          >
            <h1 className="each-fade-h1">WEALTH ANALYTICA</h1>
            <h2 className="each-fade-h2">
              Better Connects Advisors, Client Pension Plans and Data
            </h2>
            <Link
              className=" btn-primary btn-xl text-uppercase js-scroll-trigger slider-btn"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tell Me More
            </Link>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${night})`
            }}
          >
            <h1 className="each-fade-h1">WEALTH ANALYTICA</h1>
            <h2 className="each-fade-h2">
              Better Connects Advisors, Client Pension Plans and Data
            </h2>
            <Link
              className=" btn-primary btn-xl text-uppercase js-scroll-trigger slider-btn"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tell Me More
            </Link>
          </div>
        </div>
        <div className="each-fade">
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${red})`
            }}
          >
            <h1 className="each-fade-h1">WEALTH ANALYTICA</h1>
            <h2 className="each-fade-h2">
              Better Connects Advisors, Client Pension Plans and Data
            </h2>
            <Link
              className=" btn-primary btn-xl text-uppercase js-scroll-trigger slider-btn"
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Tell Me More
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};
