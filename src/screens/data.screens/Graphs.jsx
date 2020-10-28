import React from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Main from "./DashboardUltimate/Main";
import GraphField from "./Graphs/GraphField";
import { backgroundGrey } from "../../global/Colors";
const Graphs = () => {
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Advisor Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <div style={{ display: "flex", backgroundColor: backgroundGrey }}>
        <Main opened="graphs" />
        <GraphField />
      </div>
    </div>
  );
};

export default Graphs;
