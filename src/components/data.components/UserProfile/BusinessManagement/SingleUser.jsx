import React, { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
const SingleUser = (props) => {
  const removeState = (state, type) => {
    let temp = JSON.parse(sessionStorage.getItem("States"));
    axios
      .post(
        `http://pensionswebapi.azurewebsites.net/api/Users/RemoveSubscription?userGuid=${props.user.Guid}&state=${state}&type=${type}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (props.user.IsBusinessAccount === true) {
          temp = temp.filter((el) => el.State !== state || el.Type !== type);
          console.log(temp);
          sessionStorage.setItem("States", JSON.stringify(temp));
        }
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Popup
      trigger={
        <button
          className="client-btn add-client"
          style={{ background: "orange" }}
        >
          Show
        </button>
      }
      modal
    >
      {(close) => (
        <div className="modal-group">
          <a className="close" onClick={close}>
            &times;
          </a>
          <h1 className="purchase-totalAmount">
            States for {props.user.FirstName} {props.user.LastName}
          </h1>
          <div className="plan-businessInfo" id="businessManagement-div">
            {props.user.States.length > 0 ? (
              <div className="onepager-charts-all">
                {/*******PERSONAL INFORMATION FOR USER */}
                <table className="table table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th>State</th>
                      <th>Type</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="table-hover">
                    {props.user.States.map((state, index) => {
                      return (
                        <tr key={index}>
                          <td>{state.State}</td>
                          <td>{state.Type === 1 ? "Basic" : "Advanced"}</td>
                          <td>
                            <button
                              className="bookmark-remove-button"
                              onClick={() => {
                                removeState(state.State, state.Type);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>No States assigned</div>
            )}
          </div>
        </div>
      )}
    </Popup>
  );
};

export default SingleUser;
