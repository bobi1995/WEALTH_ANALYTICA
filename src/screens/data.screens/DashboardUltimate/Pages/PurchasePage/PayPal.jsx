import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import apiAddress from "../../../../../global/endpointAddress";
const useStyles = makeStyles((theme) => ({
  headerStyle: {
    color: "#378FC3",
    fontFamily: "Baskervville",
  },
}));
export default (props) => {
  const total = props.data
    .map((el) => el.totalPrice)
    .reduce((a, b) => a + b, 0);

  const classes = useStyles();

  const paypal_ids = {
    sandbox:
      "ASFagTGTUJ79HlIsU_agQiClLj1nA0oFpLFAzDAQUICReFXr-SLieQstyfa5MaGy69vUjOvfvYZ7HC_C",
    production:
      "AVC4JRhxccFuPpNX6eop5w7BkBz84OxouXhmwm4EzUFe5X0skwLZC-33-fdUJofbVMNKiqFrN1vrXc3s",
  };

  const onSuccess = (details, data) => {
    const requestBody = props.data.map((el) => {
      return {
        State: el.state.abbriviation,
        Type: el.type,
        value: el.type === 1 ? 999 : 1899,
        Accounts: el.quantity,
        TotalPrice: el.totalPrice,
      };
    });
    axios
      .post(`${apiAddress}/api/Users/ConfirmPayment`, requestBody, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (sessionStorage.getItem("isBusiness") === "true") {
          alert(
            "Congratulations! Your purchase is successful, states will be added to your account."
          );
          window.location.reload();
        } else {
          const temp = JSON.parse(sessionStorage.getItem("States"));
          requestBody.map((el) => temp.push(el));
          alert(
            "Congratulations! Your purchase is successful, states will be added to your account."
          );

          sessionStorage.setItem("States", JSON.stringify(temp));
          //window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        className={classes.headerStyle}
        gutterBottom
      >
        ${numeral(total).format(0, 0)}
      </Typography>

      <PayPalButton
        PayPalButton
        amount={total}
        currency={"USD"}
        onSuccess={(details, data) => onSuccess(details, data)}
        options={{
          clientId: paypal_ids.sandbox,
        }}
      />
    </div>
  );
};
