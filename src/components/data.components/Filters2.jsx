import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Table from "./filtersFunctions/FilterFields/Table";
import RightFilter from "./filtersFunctions/FilterFields/RightFilter";
import LeftSide from "./filtersFunctions/FilterFields/LeftSide";

const Filter2 = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Filters</h1>
      </section>
      <Magellan activeStep={1} active={"filters"} />
      <div>
        <div style={{ display: "flex", width: "100%", marginBottom: "5%" }}>
          <div style={{ width: "100%" }}>
            <RightFilter
              getResults={(res) => {
                setResults(res);
              }}
            />
          </div>

          <div style={{ width: "100%" }}>
            <LeftSide
              NetAssetBegin={results.NetAssetBeginOfYear}
              NetAssetEnd={results.NetAssetEndOfYear}
              Distribution={results.Distributions}
              CorrectivrDistribution={results.CorrectivrDistribution}
              ServiceProviderExpenses={results.ServiceProviderExpenses}
              OtherExpenses={results.OtherExpenses}
              TotalParticipants={results.TotalParticipants}
              RetiredParticipants={results.RetiredParticipants}
              TotalParticipantsBal={results.TotalParticipantsBal}
              ParticipantContribution={results.ParticipantContribution}
              EmployerContribution={results.EmployerContribution}
            />
          </div>
        </div>

        <Table data={results.Companies} />
      </div>
    </div>
  );
};

export default Filter2;
