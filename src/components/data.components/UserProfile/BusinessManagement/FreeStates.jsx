import React, { useState, useEffect } from "react";
import axios from "axios";
import AssignSubscription from "./AssignSubscription";
import apiAddress from "../../../../global/endpointAddress";
import functions from "../../dashboardFunctions/functions";
import Moment from "react-moment";
import "moment-timezone";

const FreeStates = (props) => {
  const [freeStates, setFreeStates] = useState([]);
  useEffect(() => {
    const url = `${apiAddress}/api/Users/GetRemainingAccounts`;

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setFreeStates(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="freestates-div-content responsive-table-div">
      <h1 className="purchase-totalAmount">Unassigned states</h1>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>State</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Expire Date</th>
            <th>Assign to User</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {freeStates.map((state, index) =>
            state.Details.map((el, ind) => (
              <tr key={ind}>
                <td>{functions.fullNameByAbbr(state.State)}</td>

                <td>{el.Type === 1 ? "Basic" : "Advanced"}</td>
                <td>{el.Count}</td>
                <td>
                  <Moment format="Do of MMMM YYYY">{el.ExpireDate}</Moment>
                </td>

                <td>
                  {el.Count > 0 ? (
                    <AssignSubscription
                      state={state.State}
                      type={el.Type}
                      expire={el.ExpireDate}
                      paymentID={el.PaymentID}
                      subUsers={props.subUsers}
                    />
                  ) : (
                    "No Available"
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FreeStates;
