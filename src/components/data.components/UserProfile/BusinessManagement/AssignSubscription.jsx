import React, { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
const AssignSubscription = (props) => {
  const [pickedUserToAssign, setPickedUserToAssign] = useState("");
  const [business, setBusiness] = useState("");
  const optionPicked = (e) => {
    e.preventDefault();
    const option = e.target.options[e.target.selectedIndex].getAttribute(
      "guid"
    );
    const businessCheck = e.target.options[e.target.selectedIndex].getAttribute(
      "business"
    );
    console.log(businessCheck);
    setBusiness(businessCheck);
    setPickedUserToAssign(option);
  };

  const assignToUser = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://pensionswebapi.azurewebsites.net/api/Users/AddSubscription?userGuid=${pickedUserToAssign}&state=${props.state}&type=${props.type}`,
        {},
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => {
        if (business === "true") {
        }
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
            Assign State {props.state} to User
          </h1>
          <form onSubmit={assignToUser}>
            <div className="assignState-div-popup">
              <label className="assignState-name-label">User: </label>
              <select
                type="text"
                className="assignState-controls"
                placeholder="Choose user"
                id="assignInput"
                list="subusers-list"
                autoComplete="off"
                onChange={optionPicked}
                required
                defaultValue={"default"}
              >
                <option value="default" disabled hidden>
                  Choose here
                </option>

                {props.subUsers.map((user, index) => {
                  return (
                    <option
                      key={index}
                      guid={user.Guid}
                      business={`${user.IsBusinessAccount}`}
                    >
                      {user.FirstName} {user.LastName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="filter-main-search-btn">
              <button
                className="filter-name-btn"
                id="submit-save-btn"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
};

export default AssignSubscription;
