import React, { useState } from "react";
import allStates from "../../../global/variables";
import numeral from "numeral";
import PayPal from "./PayPal";

const PurchaseState = () => {
  const [purchaseStates, setPurchaseStates] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addPurchase = (e) => {
    e.preventDefault();
    const stateName = document.getElementById("purchaseState-name").value;
    const parts = stateName.split(" - ");
    if (allStates.filter((el) => el.name == parts[0]).length > 0) {
      const type = document.getElementById("purchase-type").value;
      const value = type === "Basic" ? 1 : 2;
      const quantity = document.getElementById("purchaseNumber")
        ? document.getElementById("purchaseNumber").value
        : 1;

      const duplicate = purchaseStates.some(
        (el) => el.State == stateName && el.Type == type
      );

      if (duplicate) {
        document.getElementById("purchase-smallText").innerHTML =
          "State already purchased with same type";
      } else {
        switch (sessionStorage.getItem("isBusiness")) {
          case "true":
            {
              document.getElementById("purchase-smallText").innerHTML =
                "Add the state to cart";

              setPurchaseStates([
                ...purchaseStates,
                {
                  State: stateName,
                  Type: type,
                  value: value,
                  Accounts: quantity,
                },
              ]);
              setTotalAmount(totalAmount + value * quantity);
              document.getElementById("purchaseState-name").value = "";
              if (document.getElementById("purchaseNumber")) {
                document.getElementById("purchaseNumber").value = "1";
              }
            }
            break;
          case "false": {
            const temp = JSON.parse(sessionStorage.getItem("States"));
            const parts = stateName.split(" - ");

            if (temp.filter((e) => e.State === parts[1]).length === 0) {
              document.getElementById("purchase-smallText").innerHTML =
                "Add the state to cart";

              setPurchaseStates([
                ...purchaseStates,
                {
                  State: stateName,
                  Type: type,
                  value: value,
                  Accounts: quantity,
                },
              ]);
              setTotalAmount(totalAmount + value * quantity);
              document.getElementById("purchaseState-name").value = "";
              if (document.getElementById("purchaseNumber")) {
                document.getElementById("purchaseNumber").value = "1";
              }
            } else {
              alert(
                "State Already Exist. If you want to go from Basic to Premium please consider Upgrade."
              );
            }
          }
        }
      }
    } else {
      alert("Pick valid state");
    }
  };

  const removePurchasedState = async (e) => {
    document.getElementById("purchase-smallText").innerHTML =
      "Add the state to cart";
    const target = e.target;
    const removedState = target.parentNode.getAttribute("value");
    const removedType = target.parentNode.getAttribute("type");
    const removedQuantity = target.parentNode.getAttribute("quantity");
    const toBeRemoved = purchaseStates.filter((state) => {
      if (state.State == removedState && state.Type == removedType) {
        return state;
      }
    });
    setPurchaseStates(
      purchaseStates.filter((state) => {
        if (state.State != removedState || state.Type != removedType) {
          return state;
        }
      })
    );

    setTotalAmount(totalAmount - toBeRemoved[0].value * removedQuantity);
  };

  const renderPurchasedTable = () => {
    return purchaseStates.map((pur, index) => {
      return (
        <tr key={index}>
          <td>{pur.State}</td>
          <td>{pur.Type}</td>
          <td>${numeral(pur.value).format("0,0")}</td>
          <td>{pur.Accounts}</td>
          <td>${numeral(pur.Accounts * pur.value).format("0,0")}</td>
          <td
            value={pur.State}
            id="individual-city"
            type={pur.Type}
            quantity={pur.Accounts}
          >
            <i className="fa fa-trash fa" onClick={removePurchasedState}></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="plan-businessInfo purchase-main-div">
      <h1 className="onepager-bottomtables-h1">Purchase States</h1>
      <form onSubmit={addPurchase}>
        <div className="purchase-div">
          <div className="purchase-controls-div ">
            <label>State:</label>
            <input
              type="text"
              className="purchase-controls"
              placeholder="Choose state"
              id="purchaseState-name"
              list="purchase-dataList"
              autoComplete="off"
              required
            ></input>
            <datalist id="purchase-dataList">
              {allStates.map((state, index) => {
                return (
                  <option key={state.name}>
                    {state.name} - {state.abbriviation}
                  </option>
                );
              })}
            </datalist>
          </div>
          <div className="purchase-controls-div">
            <label>Type:</label>
            <select
              type="text"
              className="purchase-controls"
              id="purchase-type"
              list="code-dataList"
              autoComplete="off"
            >
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          {sessionStorage.getItem("isBusiness") === "true" ? (
            <div className="purchase-controls-div">
              <label>Quantity:</label>
              <input
                type="number"
                className="purchase-controls"
                placeholder="How many?"
                id="purchaseNumber"
                autoComplete="off"
                min="1"
                defaultValue="1"
                required
              ></input>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary purchase-add-btn"
          id="state-btn"
        >
          Add
        </button>
        <small className="form-text text-muted" id="purchase-smallText">
          Add the state to cart
        </small>
      </form>
      {/******* LIST FOR ADDING */}
      {/* <div className="purchase-list-holder">
        <div className="addState-innerDiv filter-addState">
          <ul id="notes-city" className="notes-list">
            {renderPurchased()}
          </ul>
        </div>
      </div> */}
      {/******* TABLE FOR ADDING */}
      {purchaseStates.length > 0 ? (
        <div>
          <div className="purchase-adding-table">
            <table className="table table-striped table-bordered table-sm table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>State</th>
                  <th>Type</th>
                  <th>Single Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="table-hover">{renderPurchasedTable()}</tbody>
            </table>
          </div>
          <h1 className="purchase-totalAmount">
            Total: ${numeral(totalAmount).format(0, 0)}
          </h1>
          <PayPal amount={totalAmount} states={purchaseStates} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PurchaseState;
