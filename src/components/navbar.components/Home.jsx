import React from "react";
import Navbar from "../Navbar";
const Home = () => {
  return (
    <div className="home-content">
      <Navbar />
      <section className="home">
        <h1 className="home-header1">
          Welcome<br></br> to Wealth Analytica
        </h1>
      </section>
      <div style={{ height: 1000 }}>
        <h2 className="myH2">Who are we?</h2>
        <p className="myP">
          We have combined the Wall Street financial engineering and
          professional expertise of over 25 years with industry leading computer
          programing engineers to deliver an array of pension plan metrics such
          as distributions, contributions, administrative expenses and an array
          of other metrics to further differentiate your business. Wealth
          Analytica provides insightful analytical information Qualified Plan
          which allows our clients to quickly and seamlessly enhance their
          client experience as well as deepen the depth of their client
          relationship. Wealth Analytica’s proprietary leading-edge technology
          that democratizes what was once only available to large financial
          organizations and delivers institutional quality information to the
          organizations transforming America. The Wealth Analytica metrics
          levels the playing field. Wealth Analytica allows our clients to
          quickly engage through social media with insightful client information
          designed to enhance your organic growth. Wealth Analytica strives to
          empowering the Wealth of your Business
        </p>
      </div>
    </div>
  );
};

export default Home;
