import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import PlaneProfileBusinessInfo from "./planProfileFunctions/PlanProfileBusinessInfo";
import PlanProfilePensionBenefitCodes from "./planProfileFunctions/PlanProfilePensionBenefitCodes";
import PlanProfileTables from "./planProfileFunctions/PlanProfileTables";
import "../../styles/dataPages/planProfile.scss";
import Loader from "./dashboardFunctions/loader";
import PlanProfilePension from "./planProfileFunctions/PlanProfilePension";

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
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Client Ready Plan Analytic</h1>
      </section>
      {results.City ? (
        <div>
          <PlaneProfileBusinessInfo data={results.BusinessInformation} />
          {results.PensionBenefitCodes && (
            <PlanProfilePensionBenefitCodes
              data={results.PensionBenefitCodes}
            />
          )}
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
