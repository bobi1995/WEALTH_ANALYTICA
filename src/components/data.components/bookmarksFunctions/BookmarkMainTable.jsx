import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import commonFunctions from "../commonFunctions/common";

const BookmarkMainTable = props => {
  const removeBookmark = (small, large) => {
    const data = {
      userGuid: sessionStorage.getItem("Guid"),

      smallPlanID: small,

      largePlanID: large
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
        window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="bookmarks-table-main">
      <table className="table table-striped table-bordered table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Number</th>
            <th>Plan Name</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Business Code</th>
            <th>Administrator</th>
            <th>Phone</th>
            <th>Net Assets</th>
            <th>Participants</th>
            <th>Net Income</th>
            <th>One Pager</th>
            <th>Plan Profile</th>
            <th>Remove</th>
          </tr>
        </thead>

        {props.data.length > 0 ? (
          <tbody className="table-hover">
            {props.data.map((element, index) => (
              <tr key={index}>
                <td>{element.Number}</td>
                <td>{element.Name}</td>
                <td>{element.Address1}</td>
                <td>{element.Address2}</td>
                <td>{element.City}</td>
                <td>{element.State}</td>
                <td>{element.ZipCode}</td>
                <td>{element.BusinessCode}</td>
                <td>{element.AdministratorName}</td>
                <td>
                  {element.Phone && commonFunctions.phoneFormat(element.Phone)}
                </td>
                <td>{element.NetAssets}</td>
                <td>{element.Participants}</td>
                <td>{element.NetIncome}</td>
                <td>
                  <Link
                    to={{
                      pathname: `${
                        element.SmallCompanyPlanID
                          ? `/onepager/${element.SmallCompanyPlanID}/false`
                          : `/onepager/${element.LargeCompanyPlanID}/true`
                      }`
                    }}
                    target="_blank"
                  >
                    Details
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `${
                        element.SmallCompanyPlanID
                          ? `/planprofile/${element.SmallCompanyPlanID}/false`
                          : `/planprofile/${element.LargeCompanyPlanID}/true`
                      }`
                    }}
                    target="_blank"
                  >
                    Generate
                  </Link>
                </td>
                <td>
                  <button
                    className="bookmark-remove-button"
                    onClick={() => {
                      removeBookmark(
                        element.SmallCompanyPlanID,
                        element.LargeCompanyPlanID
                      );
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody></tbody>
        )}
      </table>
    </div>
  );
};

export default BookmarkMainTable;
