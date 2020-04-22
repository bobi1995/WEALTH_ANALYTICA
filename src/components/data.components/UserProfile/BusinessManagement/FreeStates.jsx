import React, { useState, useEffect } from "react";
import axios from "axios";
import AssignSubscription from "./AssignSubscription";

const FreeStates = (props) => {
  const [freeStates, setFreeStates] = useState([]);
  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/Users/GetRemainingAccounts`;

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
    <div className="onepager-chart-content responsive-table-div">
      <h1 className="purchase-totalAmount">Free states</h1>

      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th>State</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Assign to User</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {freeStates.map((state, index) => (
            <tr key={index}>
              <td>{state.State}</td>
              <td>{state.Type === 1 ? "Basic" : "Advanced"}</td>
              <td>{state.Accounts}</td>
              <td>
                <AssignSubscription
                  state={state.State}
                  type={state.Type}
                  subUsers={props.subUsers}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FreeStates;
