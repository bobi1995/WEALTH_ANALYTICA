import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
const PayPaylBtn = () => {
  return (
    <div className="plan-businessInfo">
      <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID,
            }),
          });
        }}
      />
    </div>
  );
};

export default PayPaylBtn;
