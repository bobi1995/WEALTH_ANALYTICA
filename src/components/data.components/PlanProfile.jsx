import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import PlaneProfileBusinessInfo from "./planProfileFunctions/Tables/PlanProfileBusinessInfo";
import PlanProfileTables from "./planProfileFunctions/PlanProfileTables";
import PlanProfileExportButton from "./planProfileFunctions/PlanProfileExportButton";
import "../../styles/dataPages/planProfile.scss";
import Loader from "./dashboardFunctions/loader";
import PlanProfilePension from "./planProfileFunctions/Tables/PlanProfilePension";
import PlanProfileExportHeading from "./planProfileFunctions/PlanProfileExportHeading";
const PlaneProfile = props => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetPlanProfile?&CompanyID=${props.match.params.CompanyID}&minYear=2015&maxYear=2018`;
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        setResults(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img" data-html2canvas-ignore>
        <h1 className="clientDash-header1">Client Ready Plan Analytic</h1>
      </section>
      {results.City ? (
        <div id="allplanprofile">
          <PlanProfileExportHeading data={results.BusinessInformation} />
          <PlanProfileExportButton types={results.PlanSummary} />

          <PlaneProfileBusinessInfo
            data={results.BusinessInformation}
            erisa={results.ERISATestCompanyStock}
          />

          <PlanProfileTables
            data={[results.Statistics, results.City, results.BusinessCode]}
          />
          <PlanProfilePension types={results.PlanSummary} />
        </div>
      ) : (
        <div className="onepager-loader-style">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PlaneProfile;
