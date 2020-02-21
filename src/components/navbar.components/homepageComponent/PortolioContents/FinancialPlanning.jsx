import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default () => {
  return (
    <div className=" text-center portfolio-hidden-text" id="portfolio2">
      <h1 className="home-portfolio-h1 text-muted">Financial Planning</h1>
      <p className="text-muted portfolio-paragraphs">
        Wealth Analytica leading edge technology enables you to develop your
        desired Total Addressable Market (T.A.M.) and subsequently cultivate new
        leads through Wealth Analytica Lead Generator
      </p>
      <Link
        className="btn btn-primary"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={25}
        duration={500}
        onClick={() => {
          document.getElementById("portfolio2").style.display = "none";
        }}
      >
        Hide
      </Link>
    </div>
  );
};
