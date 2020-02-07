import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import PlaneProfileBusinessInfo from "./planProfileFunctions/PlanProfileBusinessInfo";
import PlanProfilePensionBenefitCodes from "./planProfileFunctions/PlanProfilePensionBenefitCodes";
import ProfilePlanFinancial from "./planProfileFunctions/PlanProfileFinancial";
import "../../styles/dataPages/planProfile.scss";
import Loader from "./dashboardFunctions/loader";
import PlanProfilePension from "./planProfileFunctions/PlanProfilePension";

const PlaneProfile = props => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetPlanProfile?userGuid=${sessionStorage.getItem(
      "Guid"
    )}&planID=${props.match.params.planID}&isLarge=${
      props.match.params.isLarge
    }&minYear=2016&maxYear=2018`;
    console.log(url);
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
        <h1 className="clientDash-header1">Plan Profile</h1>
      </section>
      {results.City ? (
        <div>
          <PlaneProfileBusinessInfo data={results.BusinessInformation} />
          {results.PensionBenefitCodes && (
            <PlanProfilePensionBenefitCodes
              data={results.PensionBenefitCodes}
            />
          )}
          <ProfilePlanFinancial
            data={[results.Statistics, results.City, results.BusinessCode]}
          />
          <PlanProfilePension
            types={[results.PensionTypes, results.WelfareTypes]}
          />
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
