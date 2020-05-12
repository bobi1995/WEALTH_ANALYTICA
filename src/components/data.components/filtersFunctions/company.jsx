import React, { useState } from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import commonFunctions from "../commonFunctions/common";
import apiAddress from "../../../global/endpointAddress";

const SmallCompanies = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(
    props.singleCompany.IsBookmarked
  );

  let convertedIncome = 0;
  if (props.singleCompany.NetIncome) {
    convertedIncome = numeral(props.singleCompany.NetIncome).format("0,0");
  }
  const removeBookmark = (e) => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/Remove?CompanyID=${props.singleCompany.CompanyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        setIsBookmarked(!isBookmarked);
      })
      .catch((err) => {});
  };

  const addBookmark = (e) => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/add?CompanyID=${props.singleCompany.CompanyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
          },
        }
      )
      .then((res) => {
        setIsBookmarked(!isBookmarked);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          alert(
            "You have reached your maximum of 30 bookmarks for the Basic States. To add more you should upgrade to Premium version."
          );
        }
      });
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
            pathname: `/onepager/${props.singleCompany.CompanyID}`,
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
