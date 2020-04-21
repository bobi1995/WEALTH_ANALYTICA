import React, { useState } from "react";
import allStates from "../../../global/variables";
import numeral from "numeral";
const PurchaseState = () => {
  const [purchaseStates, setPurchaseStates] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addPurchase = (e) => {
    e.preventDefault();
    const stateName = document.getElementById("purchaseState-name").value;
    const type = document.getElementById("purchase-type").value;
    const value = type === "Basic" ? 199 : 899;
    const quantity = document.getElementById("purchaseNumber")
      ? document.getElementById("purchaseNumber").value
      : 1;

    const duplicate = purchaseStates.some(
      (el) => el.name == stateName && el.type == type
    );

    if (duplicate) {
      console.log("exist");
      document.getElementById("purchase-smallText").innerHTML =
        "State already purchased with same type";
    } else {
      document.getElementById("purchase-smallText").innerHTML =
        "Add the state to basket";
      setPurchaseStates([
        ...purchaseStates,
        { name: stateName, type: type, value: value, quantity: quantity },
      ]);
      setTotalAmount(totalAmount + value * quantity);
      document.getElementById("purchaseState-name").value = "";
      if (document.getElementById("purchaseNumber")) {
        document.getElementById("purchaseNumber").value = "1";
      }
    }
  };

  const removePurchasedState = async (e) => {
    document.getElementById("purchase-smallText").innerHTML =
      "Add the state to basket";
    const target = e.target;
    const removedState = target.parentNode.getAttribute("value");
    const removedType = target.parentNode.getAttribute("type");
    const removedQuantity = target.parentNode.getAttribute("quantity");
    const toBeRemoved = purchaseStates.filter((state) => {
      if (state.name == removedState && state.type == removedType) {
        return state;
      }
    });
    setPurchaseStates(
      purchaseStates.filter((state) => {
        if (state.name != removedState || state.type != removedType) {
          return state;
        }
      })
    );

    setTotalAmount(totalAmount - toBeRemoved[0].value * removedQuantity);
  };

  // const renderPurchased = () => {
  //   return purchaseStates.map((pur, index) => {
  //     return (
  //       <li
  //         value={pur.name}
  //         id="individual-city"
  //         key={index}
  //         type={pur.type}
  //         quantity={pur.quantity}
  //       >
  //         {pur.name} - {pur.type} Plan - $
  //         {`${numeral(pur.value).format("0,0")}`} - Quantity:{pur.quantity}
  //         <i className="fa fa-trash fa" onClick={removePurchasedState}></i>
  //       </li>
  //     );
  //   });
  // };
  const renderPurchasedTable = () => {
    return purchaseStates.map((pur, index) => {
      return (
        <tr key={index}>
          <td>{pur.name}</td>
          <td>{pur.type}</td>
          <td>${numeral(pur.value).format("0,0")}</td>
          <td>{pur.quantity}</td>
          <td>${numeral(pur.quantity * pur.value).format("0,0")}</td>
          <td
            value={pur.name}
            id="individual-city"
            type={pur.type}
            quantity={pur.quantity}
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
                return <option key={state}>{state}</option>;
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
              <option value="Advanced">Advanced</option>
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
          Add the state to basket
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PurchaseState;
