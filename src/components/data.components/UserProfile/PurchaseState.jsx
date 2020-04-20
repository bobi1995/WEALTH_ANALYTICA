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
    if (stateName) {
      setPurchaseStates([
        ...purchaseStates,
        { name: stateName, type: type, value: value },
      ]);
      setTotalAmount(totalAmount + value);
      document.getElementById("purchaseState-name").value = "";
    }
  };

  const removePurchasedState = async (e) => {
    const target = e.target;
    const removedState = target.parentNode.getAttribute("value");
    const toBeRemoved = purchaseStates.filter(
      (state) => state.name === removedState
    );
    setPurchaseStates(
      purchaseStates.filter((state) => state.name !== removedState)
    );
    setTotalAmount(totalAmount - toBeRemoved[0].value);
  };

  const renderPurchased = () => {
    return purchaseStates.map((pur, index) => {
      return (
        <li value={pur.name} id="individual-city" key={index}>
          {pur.name} - {pur.type} Plan - $
          {`${numeral(pur.value).format("0,0")}`}
          <i className="fa fa-trash fa" onClick={removePurchasedState}></i>
        </li>
      );
    });
  };

  return (
    <div className="plan-businessInfo purchase-main-div">
      <h1 className="onepager-bottomtables-h1">Purchase States</h1>
      <form>
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
            ></input>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary purchase-add-btn"
          id="state-btn"
          onClick={addPurchase}
        >
          Add
        </button>
      </form>
      <div className="purchase-list-holder">
        <div className="addState-innerDiv filter-addState">
          <ul id="notes-city" className="notes-list">
            {renderPurchased()}
          </ul>
        </div>
      </div>
      <h1 className="purchase-totalAmount">
        Total: ${numeral(totalAmount).format(0, 0)}
      </h1>
    </div>
  );
};

export default PurchaseState;
