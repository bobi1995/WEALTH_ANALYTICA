import React, { useState } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import commonFunctions from "../commonFunctions/common";

const SmallCompanies = props => {
  const [isBookmarked, setIsBookmarked] = useState(
    props.singleCompany.IsBookmarked
  );

  let convertedIncome = 0;
  let planID;
  let isLarge;
  if (props.singleCompany.NetIncome) {
    convertedIncome = numeral(props.singleCompany.NetIncome).format("0,0");
  }
  if (props.singleCompany.SmallCompanyPlanID) {
    planID = props.singleCompany.SmallCompanyPlanID;
    isLarge = false;
  } else {
    planID = props.singleCompany.LargeCompanyPlanID;
    isLarge = true;
  }
  const removeBookmark = e => {
    const data = {
      userGuid: sessionStorage.getItem("Guid"),

      smallPlanID: props.singleCompany.SmallCompanyPlanID,

      largePlanID: props.singleCompany.LargeCompanyPlanID
    };

    axios
      .post(
        `http://pensionswebapi.azurewebsites.net/api/Bookmarks/Remove`,
        data,
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token")
          }
        }
      )
      .then(res => {})
      .catch(e => {
        console.log(e);
      });
    setIsBookmarked(!isBookmarked);
  };

  const addBookmark = e => {
    const data = {
      userGuid: sessionStorage.getItem("Guid"),

      smallPlanID: props.singleCompany.SmallCompanyPlanID,

      largePlanID: props.singleCompany.LargeCompanyPlanID
    };

    axios
      .post(`http://pensionswebapi.azurewebsites.net/api/Bookmarks/Add`, data, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token")
        }
      })
      .then(res => {})
      .catch(e => {
        console.log(e);
      });
    setIsBookmarked(!isBookmarked);
  };

  return (
    <tr>
      <td>
        {props.singleCompany.Name &&
          commonFunctions.formatString(props.singleCompany.Name)}
      </td>
      <td>
        {props.singleCompany.Address1 &&
          commonFunctions.formatString(props.singleCompany.Address1)}
      </td>
      <td>
        {props.singleCompany.City &&
          commonFunctions.formatString(props.singleCompany.City)}
      </td>

      <td>
        {props.singleCompany.AdministratorName &&
          commonFunctions.formatString(props.singleCompany.AdministratorName)}
      </td>

      <td>
        {props.singleCompany.Phone &&
          commonFunctions.phoneFormat(props.singleCompany.Phone)}
      </td>

      <td>{numeral(props.singleCompany.Participants).format("0,0")}</td>
      {props.singleCompany.NetIncome > 0 ? (
        <td className="filter-td-income">
          ${commonFunctions.reducer(props.singleCompany.NetIncome)}
        </td>
      ) : (
        <td className="filter-td-income negative-numbers">
          ${commonFunctions.reducer(props.singleCompany.NetIncome)}
        </td>
      )}
      <td>
        <Link
          to={{
            pathname: `/onepager/${planID}/${isLarge}`
          }}
          target="_blank"
        >
          Details
        </Link>
      </td>
      <td>
        <div>
          <span
            className={isBookmarked ? "fa fa-star bookmarked" : "fa fa-star"}
            onClick={isBookmarked ? removeBookmark : addBookmark}
            data-tip={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          ></span>
          <ReactTooltip />
        </div>
      </td>
    </tr>
  );
};

export default SmallCompanies;
