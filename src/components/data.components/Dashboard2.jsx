import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import StateInput from "./dashboardFunctions/StateInput";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import DashSummary from "./dashboardFunctions/DashSummary";
import CircularProgress from "@material-ui/core/CircularProgress";

//CHARTS IMPORT
import NetAssets from "./dashboardFunctions/Charts/NetAssets";
import NetIncome from "./dashboardFunctions/Charts/NetIncome";
import ContributionByEmployee from "./dashboardFunctions/Charts/ContributionByEmployee";
import ParticipantBalance from "./dashboardFunctions/Charts/ParticipantBalance";
import TotalExpenses from "./dashboardFunctions/Charts/TotalExpenses";
import TotalIncome from "./dashboardFunctions/Charts/TotalIncome";
const styles = makeStyles(() => ({
  chartsStyle: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: "5%",
    marginTop: "5%",
  },
  dashStyle: {
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    background:
      "linear-gradient(#fff, #afd4ec) top,linear-gradient(#afd4ec, #fff) bottom, #afd4ec",
    backgroundSize: "100% 50px",
    backgroundOrigin: "border-box",
    backgroundRepeat: "no-repeat",
  },
}));
const Dashboard = (props) => {
  const classes = styles();
  const [state, setState] = useState([]);
  const [year, setYear] = useState(2018);
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(0);
  useEffect(() => {
    if (state.length > 0) {
      setFlag(1);
      axios
        .get(
          `${apiAddress}/api/SmallCompanies/GetCompaniesTotals?summaryYear=${year}&minYear=2015&maxYear=2018&state=${state}`,
          {
            headers: {
              Authorization: "Basic " + sessionStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setData(res.data);
          setFlag(0);
        })
        .catch((error) => {
          console.log(error);
          alert("For some reason we could not find the desired results.");
          window.location.reload();
        });
    }
  }, [state, year]);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <StateInput setState={(state) => setState(state)} />
      {state.length > 0 ? (
        <DashSummary
          result={data.FilterProfile}
          onYearChange={(yearChange) => {
            setYear(yearChange);
          }}
        />
      ) : (
        ""
      )}
      {flag == 0 ? (
        data.Statistics && state.length > 0 ? (
          <div>
            <div className={classes.dashStyle}>
              <div className={classes.chartsStyle}>
                <NetAssets statistics={data.Statistics} />
                <NetIncome statistics={data.Statistics} />
              </div>
              <div className={classes.chartsStyle}>
                <ContributionByEmployee statistics={data.Statistics} />
                <ParticipantBalance statistics={data.Statistics} />
              </div>
              <div className={classes.chartsStyle}>
                <TotalExpenses statistics={data.Statistics} />
                <TotalIncome statistics={data.Statistics} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "15%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading....Please wait
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
