import React from "react";
import Popup from "reactjs-popup";
import axios from "axios";
const SingleUser = (props) => {
  const removeState = (state, type) => {
    console.log(props.user.Guid);
    console.log(state);
    console.log(type);
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
        console.log(res);
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
            {props.user.BasicStates.length > 0 ||
            props.user.States.length > 0 ? (
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
                    {props.user.BasicStates.length > 0
                      ? props.user.BasicStates.map((state, index) => {
                          return (
                            <tr key={index}>
                              <td>{state.State}</td>
                              <td>Basic</td>
                              <td>
                                <button
                                  className="bookmark-remove-button"
                                  onClick={() => {
                                    removeState(state.State, 1);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                    {props.user.States.length > 0
                      ? props.user.States.map((state, index) => {
                          return (
                            <tr key={index}>
                              <td>{state.State}</td>
                              <td>Advanced</td>
                              <td>
                                <button
                                  className="bookmark-remove-button"
                                  onClick={() => {
                                    removeState(state.State, 2);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
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
