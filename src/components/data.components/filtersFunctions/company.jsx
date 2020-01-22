import React, { useState } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTooltip from "react-tooltip";

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
    console.log(e.target);
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
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    setIsBookmarked(!isBookmarked);
  };

  const addBookmark = e => {
    console.log(e.target);

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
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    setIsBookmarked(!isBookmarked);
  };

  return (
    <tr>
      <td>{props.singleCompany.Name}</td>
      <td>{props.singleCompany.Address1}</td>
      <td>{props.singleCompany.City}</td>

      <td>{props.singleCompany.AdministratorName}</td>

      <td>{props.singleCompany.Phone}</td>

      <td>{props.singleCompany.Participants}</td>

      <td>${convertedIncome}</td>
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
