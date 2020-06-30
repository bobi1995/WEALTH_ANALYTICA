import React, { useEffect, useState } from "react";
import Datanavbar from "./DataNavbar";
import Footer from "../Footer";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import StateInput from "./dashboardFunctions/StateInput";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

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
  },
}));
const Dashboard = (props) => {
  const classes = styles();
  const [state, setState] = useState([]);
  const [year, setYear] = useState(2018);
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(state);
    if (state.length > 0) {
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
        })
        .catch((error) => {
          console.log(error);
          alert("For some reason we could not find the desired results.");
          window.location.reload();
        });
    }
  }, [state]);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Dashboard</h1>
      </section>
      <Magellan activeStep={0} />
      <StateInput setState={(state) => setState(state)} />

      {data.Statistics && state.length > 0 ? (
        <div>
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
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
