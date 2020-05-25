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
import OnePagerAccountants from "./OnePagerFunctions/OnePagerAccountants";
import Magellan from "./Magellan";
import Contact from "./OnePagerFunctions/OnePagerContact";
import apiAddress from "../../global/endpointAddress";

const PlaneProfile = (props) => {
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(false);

  let url = "";
  useEffect(() => {
    if (props.match) {
      url = `${apiAddress}/api/SmallCompanies/GetPlanProfile?&CompanyID=${props.match.params.CompanyID}&minYear=2015&maxYear=2018`;
    }
    axios({
      method: "get",
      url: url,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + sessionStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          setLimit(true);
        } else {
          alert("For some reason we could not find the desired results.");
        }
      });
  }, []);

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img" data-html2canvas-ignore>
        <h1 className="clientDash-header1">Client Ready Plan Analytic</h1>
      </section>
      <Magellan activeStep={4} />

      {limit === true ? (
        <div>
          <h1
            className="onepager-bottomtables-h1"
            style={{ width: "70%", margin: "auto" }}
          >
            You do not have Premium subscription for this state and you are not
            allowed to use Plan Profile.
          </h1>
        </div>
      ) : results.City ? (
        <div id="allplanprofile" className="usermanagement">
          <PlanProfileExportButton types={results.PlanSummary} />
          <PlanProfileExportHeading data={results.BusinessInformation} />
          <div>
            <PlaneProfileBusinessInfo
              data={results.BusinessInformation}
              erisa={results.ERISATestCompanyStock}
              contact={results.Contact}
              types={results.PlanSummary}
            />
          </div>
          <PlanProfileTables
            data={[results.Statistics, results.City, results.BusinessCode]}
          />
          <div data-html2canvas-ignore>
            {results.AccountantFirmNames.length > 0 ||
            results.FiduciaryTrustNames.length > 0 ? (
              <OnePagerAccountants
                accountants={results.AccountantFirmNames}
                trusts={results.FiduciaryTrustNames}
              />
            ) : (
              ""
            )}
            <PlanProfilePension types={results.PlanSummary} />
          </div>
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
