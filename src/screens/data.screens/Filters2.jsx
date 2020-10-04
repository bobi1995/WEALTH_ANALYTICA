import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Table from "./filtersFunctions/FilterFields/Table";
import RightFilter from "./filtersFunctions/FilterFields/RightFilter";
import LeftSide from "./filtersFunctions/FilterFields/LeftSide";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from "@material-ui/core/CircularProgress";
import SummaryTable from "./filtersFunctions/FilterFields/SummaryTable";
const Filter2 = () => {
  const [results, setResults] = useState();
  const [loader, setLoader] = useState(false);
  const setData = (newArr) => {
    setResults((prev) => {
      let newResults = { ...prev, Companies: newArr.slice(0) };
      return newResults;
    });
  };
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Filters</h1>
      </section>
      <Magellan activeStep={1} active={"filters"} />
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            marginBottom: "5%",
            justifyContent: "space-around",
            marginTop: "3%",
          }}
        >
          <div style={{ width: "40%" }}>
            <RightFilter
              setLoader={(loader) => {
                setLoader(loader);
              }}
              loader={loader}
              getResults={(res) => {
                setResults(res);
              }}
              results={results}
            />
          </div>

          <div style={{ width: "100%", textAlign: "center" }}>
            {loader ? (
              <div>
                <CircularProgress
                  size={150}
                  style={{ textAlign: "center", marginTop: "15%" }}
                />
                <p style={{ textAlign: "center", marginTop: "3%" }}>
                  Loading....Please wait
                </p>
              </div>
            ) : results ? (
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
                style={{ width: "70%", margin: "0 auto" }}
                component="img"
                image={require("../../styles/images/Wealth_Analytica.png")}
                title="Wealth Analytica"
              />
            )}
          </div>
        </div>
        {results ? (
          <SummaryTable data={results ? results.FilterProfile : []} />
        ) : (
          ""
        )}
        <Table data={results ? results.Companies : []} setData={setData} />
      </div>
    </div>
  );
};

export default Filter2;