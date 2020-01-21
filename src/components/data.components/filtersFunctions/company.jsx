import React from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import axios from "axios";

const SmallCompanies = props => {
  console.log(props.singleCompany.IsBookmarked);
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

  const addBookmark = e => {
    const data = {
      userGuid: sessionStorage.getItem("Guid"),

      smallPlanID: props.singleCompany.SmallCompanyPlanID,

      largePlanID: props.singleCompany.LargeCompanyPlanID
    };
    e.target.classList.add("bookmarked");
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
        {props.singleCompany.IsBookmarked ? (
          <span className="fa fa-star bookmarked"></span>
        ) : (
          <span className="fa fa-star" onClick={addBookmark}></span>
        )}
      </td>
    </tr>
  );
};

export default SmallCompanies;
