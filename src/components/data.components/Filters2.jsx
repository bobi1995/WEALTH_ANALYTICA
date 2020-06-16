import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Table from "./filtersFunctions/FilterFields/Table";
import RightFilter from "./filtersFunctions/FilterFields/RightFilter";
import LeftSide from "./filtersFunctions/FilterFields/LeftSide";
import image from "../../styles/images/Wealth_Analytica.png";
import CardMedia from "@material-ui/core/CardMedia";

const Filter2 = () => {
  const [results, setResults] = useState();
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
            {results ? (
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
            ) : (
              <CardMedia
                style={{ width: "70%" }}
                component="img"
                image={require("../../styles/images/Wealth_Analytica.png")}
                title="Paella dish"
              />
            )}
          </div>
        </div>

        <Table data={results ? results.Companies : []} />
      </div>
    </div>
  );
};

export default Filter2;
