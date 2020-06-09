import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Table from "./filtersFunctions/FilterFields/Table";
const Filter2 = () => {
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Filters</h1>
      </section>
      <Magellan activeStep={1} active={"filters"} />
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Filter2;
