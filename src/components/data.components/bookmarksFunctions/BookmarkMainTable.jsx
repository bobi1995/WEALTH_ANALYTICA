import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import commonFunctions from "../commonFunctions/common";
import numeral from "numeral";

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
                <td>
                  {element.Name && commonFunctions.formatString(element.Name)}
                </td>
                <td>
                  {element.Address1 &&
                    commonFunctions.formatString(element.Address1)}
                </td>
                <td>
                  {element.Address2 &&
                    commonFunctions.formatString(element.Address2)}
                </td>
                <td>
                  {element.City && commonFunctions.formatString(element.City)}
                </td>
                <td>{element.State}</td>
                <td>{element.ZipCode}</td>
                <td>{element.BusinessCode}</td>
                <td>
                  {element.AdministratorName &&
                    commonFunctions.formatString(element.AdministratorName)}
                </td>
                <td>
                  {element.Phone && commonFunctions.phoneFormat(element.Phone)}
                </td>
                <td>${numeral(element.NetAssets).format("0,0")}</td>
                <td>{numeral(element.Participants).format("0,0")}</td>
                <td>${numeral(element.NetIncome).format("0,0")}</td>
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
