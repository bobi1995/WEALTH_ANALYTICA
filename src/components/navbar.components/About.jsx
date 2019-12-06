import React from "react";
import Navbar from "../Navbar";
import "../../styles/pages/about.scss";
const About = () => {
  return (
    <div>
      <Navbar />
      <section className="about-section jumbotron">
        <div className="about-container">
          <h1 className="about-jumbotron">The Wealth Analytica Story</h1>
        </div>
      </section>
    </div>
  );
};

export default About;
