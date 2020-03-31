import React from "react";
import axios from "axios";
import { doc } from "prettier";
export default props => {
  const urlCreator = (
    year,
    states,
    cities,
    maxIncome,
    minIncome,
    minParticipants,
    maxParticipants,
    companyType,
    businessCode,
    benefitType,
    benefitSymbol,
    planEntity,
    dfeoption
  ) => {
    let url;
    if (cities.length < 1) {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesByState?year=${year}&`;

      states.forEach((state, index) => {
        url = url.concat(`state=${state}&`);
      });
      if (maxIncome) {
        const maxInc = parseFloat(maxIncome.replace(/,/g, ""));
        url = url.concat(`maxAssets=${maxInc}&`);
      }
      if (minIncome) {
        const minInc = parseFloat(minIncome.replace(/,/g, ""));
        url = url.concat(`minAssets=${minInc}&`);
      }

      if (maxParticipants) {
        const maxPart = parseFloat(maxParticipants.replace(/,/g, ""));
        url = url.concat(`maxPart=${maxPart}&`);
      }
      if (minParticipants) {
        const minPart = parseFloat(minParticipants.replace(/,/g, ""));
        url = url.concat(`minPart=${minPart}&`);
      }
      if (companyType !== "All") {
        url = url.concat(`isSmall=${companyType}&`);
      }
      if (businessCode) {
        url = url.concat(`businessCode=${businessCode}&`);
      }
      if (benefitType !== "All" && benefitSymbol === "All") {
        url = url.concat(`benefitType=${benefitType}&`);
      } else if (benefitSymbol !== "All") {
        url = url.concat(`benefitType=${benefitSymbol}&`);
      }
      if (planEntity !== "All") {
        url = url.concat(`planEntity=${planEntity}&`);
      }
      if (dfeoption) {
        url = url.concat(`planEntity=${dfeoption}&`);
      }
      return url;
    } else {
      url = `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesByCity?year=${year}&`;
      states.forEach((state, index) => {
        url = url.concat(`state=${state}&`);
      });
      cities.forEach((city, index) => {
        url = url.concat(`city=${city}&`);
      });
      if (maxIncome) {
        const maxInc = parseFloat(maxIncome.replace(/,/g, ""));
        url = url.concat(`maxAssets=${maxInc}&`);
      }
      if (minIncome) {
        const minInc = parseFloat(minIncome.replace(/,/g, ""));
        url = url.concat(`minAssets=${minInc}&`);
      }
      if (maxParticipants) {
        const maxPart = parseFloat(maxParticipants.replace(/,/g, ""));
        url = url.concat(`maxPart=${maxPart}&`);
      }
      if (minParticipants) {
        const minPart = parseFloat(minParticipants.replace(/,/g, ""));
        url = url.concat(`minPart=${minPart}&`);
      }
      if (companyType !== "All") {
        url = url.concat(`isSmall=${companyType}&`);
      }
      if (businessCode) {
        url = url.concat(`businessCode=${businessCode}&`);
      }
      if (benefitType !== "All" && benefitSymbol === "All") {
        url = url.concat(`benefitType=${benefitType}&`);
      } else if (benefitSymbol !== "All") {
        url = url.concat(`benefitType=${benefitSymbol}&`);
      }
      if (planEntity !== "All") {
        url = url.concat(`planEntity=${planEntity}&`);
      }
      if (dfeoption) {
        url = url.concat(`planEntity=${dfeoption}&`);
      }
      return url;
    }
  };
  const saveFilterFunction = e => {
    e.preventDefault();
    const data = {
      FilterName: document.getElementById("filterName").value,
      FilterParameters: urlCreator(
        props.urlparams.selectedYear,
        props.urlparams.stateAbbriviation,
        props.urlparams.inputedCities,
        props.urlparams.maxIncome,
        props.urlparams.minIncome,
        props.urlparams.minParticipants,
        props.urlparams.maxParticipants,
        props.urlparams.companyType,
        props.urlparams.businessCode,
        props.urlparams.benefitType,
        props.urlparams.benefitSymbol,
        props.urlparams.planEntity,
        props.urlparams.dfeoption
      )
    };

    axios
      .post(
        `http://pensionswebapi.azurewebsites.net/api/Users/AddUserFilter`,
        data,
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token")
          }
        }
      )
      .then(res => {
        document.getElementById("filterSave-close").click();
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="filter-main-saveFilter-btn">
        <p>
          <a className="savedFilterBtn" href="#popupFilterSaved">
            Save Filter
          </a>
        </p>
      </div>
      <div id="popupFilterSaved" className="popupFilter">
        <div className="popup-filter-content">
          <h2>Save filter</h2>
          <a className="close" href="#" id="filterSave-close">
            &times;
          </a>
          <form onSubmit={saveFilterFunction}>
            <div className="onepager-top-fromto-inner">
              <label className="filter-name-label">Name: </label>
              <input
                className="form-control"
                type="text"
                id="filterName"
                placeholder="Enter Filter's name"
                autoComplete="on"
                required
              />
            </div>
            <div className="filter-main-search-btn">
              <button
                className="filter-name-btn"
                id="submit-save-btn"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
