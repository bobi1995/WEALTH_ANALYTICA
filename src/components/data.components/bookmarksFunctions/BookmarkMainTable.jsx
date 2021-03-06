import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import commonFunctions from "../commonFunctions/common";
import numeral from "numeral";
import dashboardFunctions from "../dashboardFunctions/functions";
import apiAddress from "../../../global/endpointAddress";

const BookmarkMainTable = (props) => {
  //ALL BASIC STATES
  const basicStates = [];
  dashboardFunctions.commonFunctionBasics().forEach((el) => {
    const n = el.split(" - ");
    basicStates.push(n[1]);
  });

  const removeBookmark = (CompanyID) => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/Remove?CompanyID=${CompanyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addClient = (CompanyID) => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/AddClient?companyID=${CompanyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removeClient = (CompanyID) => {
    axios
      .post(
        `${apiAddress}/api/Bookmarks/RemoveClient?companyID=${CompanyID}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="bookmarks-table-main">
      <table className="table table-striped table-bordered table-sm table-hover">
        <thead className="thead-dark">
          <tr>
            <th>&#8470;</th>
            <th>Plan Name</th>
            <th>Address 1</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Business Code</th>
            <th>Phone</th>
            <th>One Pager</th>
            <th>Plan Profile</th>
            <th>Connect</th>

            <th>Bookmark</th>
          </tr>
        </thead>

        {props.data.length > 0 ? (
          <tbody className="table-hover">
            {props.data.map((element, index) => (
              <tr key={index}>
                <td>{numeral(index + 1).format("0,0")}</td>
                <td>
                  {element.Name && commonFunctions.formatString(element.Name)}
                </td>
                <td>
                  {element.Address1 &&
                    commonFunctions.formatString(element.Address1)}
                </td>
                <td>
                  {element.City && commonFunctions.formatString(element.City)}
                </td>
                <td>{element.State}</td>
                <td>{element.ZipCode}</td>
                <td>{element.BusinessCode}</td>
                <td>
                  {element.Phone && commonFunctions.phoneFormat(element.Phone)}
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `${
                        element.CompanyID
                          ? `/onepager/${element.CompanyID}`
                          : `/onepager/${element.CompanyID}`
                      }`,
                    }}
                    target="_blank"
                  >
                    Details
                  </Link>
                </td>
                {basicStates.includes(element.State) ? (
                  <td>N/A</td>
                ) : (
                  <td>
                    <Link
                      to={{
                        pathname: `${
                          element.CompanyID
                            ? `/planprofile/${element.CompanyID}`
                            : `/planprofile/${element.CompanyID}`
                        }`,
                      }}
                      target="_blank"
                    >
                      Generate
                    </Link>
                  </td>
                )}
                <td>
                  {element.IsClient === false ? (
                    <button
                      className="client-btn add-client"
                      onClick={() => {
                        addClient(element.CompanyID);
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      className="client-btn remove-client "
                      onClick={() => {
                        removeClient(element.CompanyID);
                      }}
                    >
                      Remove
                    </button>
                  )}
                </td>

                <td>
                  <button
                    className="bookmark-remove-button"
                    onClick={() => {
                      removeBookmark(element.CompanyID);
                    }}
                  >
                    Delete
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
