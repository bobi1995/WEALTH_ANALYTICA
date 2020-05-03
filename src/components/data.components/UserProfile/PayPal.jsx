import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import apiAddress from "../../../global/endpointAddress";

const PayPaylBtn = (props) => {
  const paypal_ids = {
    sandbox:
      "ASFagTGTUJ79HlIsU_agQiClLj1nA0oFpLFAzDAQUICReFXr-SLieQstyfa5MaGy69vUjOvfvYZ7HC_C",
    production:
      "AVC4JRhxccFuPpNX6eop5w7BkBz84OxouXhmwm4EzUFe5X0skwLZC-33-fdUJofbVMNKiqFrN1vrXc3s",
  };

  const onSuccess = (details, data) => {
    const requestBody = props.states.map((el, index) => {
      const n = el.State.split(" - ");
      el.State = n[1];

      el.Type === "Basic" ? (el.Type = 1) : (el.Type = 2);

      return el;
    });
    axios
      .post(`${apiAddress}/api/Users/ConfirmPayment`, requestBody, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
        if (sessionStorage.getItem("isBusiness") === "true") {
          alert(
            "Congratulations! Your purchase is successfull, states will be added to your account."
          );
          window.location.reload();
        } else {
          const temp = JSON.parse(sessionStorage.getItem("States"));
          props.states.map((el) => {
            temp.push(el);
          });
          alert(
            "Congratulations! Your purchase is successfull, states will be added to your account."
          );

          sessionStorage.setItem("States", JSON.stringify(temp));
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="plan-businessInfo">
      <PayPalButton
        PayPalButton
        amount={props.amount}
        currency={"USD"}
        onSuccess={(details, data) => onSuccess(details, data)}
        options={{
          clientId: paypal_ids.sandbox,
        }}
      />
    </div>
  );
};
export default PayPaylBtn;
