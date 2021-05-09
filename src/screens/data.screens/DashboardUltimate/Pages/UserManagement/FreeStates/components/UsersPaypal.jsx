import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import apiAddress from "../../../../../../../global/endpointAddress";
import { primaryBlue } from "../../../../../../../global/Colors";
import AsyncAlertBox from "../../../../../../../components/asyncAlertBox";
import Loader from "../../../../../../../components/plainCicularLoader";

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    color: primaryBlue,
    fontFamily: "Baskervville",
    textAlign: "center",
  },
}));

const calculateTotal = (regionType, type, accounts) => {
  switch (regionType) {
    case 1:
      if (type === 1) {
        return accounts * 830;
      } else return accounts * 1000;
    case 2:
      if (type === 1) {
        return accounts * 825;
      } else return accounts * 1025;
    default:
      return 0;
  }
};

export default (props) => {
  const classes = useStyles();
  const [asyncMessage, setAsyncMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let total = calculateTotal(
    props.data.regionType,
    props.data.type,
    props.accounts
  );

  const paypal_ids = {
    sandbox:
      "ASFagTGTUJ79HlIsU_agQiClLj1nA0oFpLFAzDAQUICReFXr-SLieQstyfa5MaGy69vUjOvfvYZ7HC_C",
    businessId:
      "Ad60VuRwoGdOCouR9WmrzKYsWxUSHOpjomEOrh7A-m4cQaY0VZbo1lB10Eyc4NLW1FoWWa4R-xVdsnWQ",
  };

  const onSuccess = (details, data) => {
    setLoading(true);
    const requestBody = [
      {
        State: props.data.states.join(","),
        Type: props.data.type,
        Accounts: parseInt(props.accounts),
        TotalPrice: total,
        IsNational: false,
        IsAddUser: true,
        AddUserToPaymentID: props.data.payId,
      },
    ];

    axios
      .post(`${apiAddress}/api/Users/ConfirmPayment`, requestBody, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setLoading(false);
        setAsyncMessage(
          "Congratulations! Your purchase is successful, states will be added to your account."
        );
      })
      .catch((e) => {
        setLoading(false);
        setAsyncMessage(
          "Someting went wrong. Do not worry, your account is NOT charged. Please try again."
        );
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

      {loading ? (
        <Loader />
      ) : (
        <PayPalButton
          PayPalButton
          amount={total}
          currency={"USD"}
          onSuccess={(details, data) => onSuccess(details, data)}
          options={{
            clientId: paypal_ids.businessId,
          }}
        />
      )}
      {asyncMessage ? (
        <AsyncAlertBox text={asyncMessage} display={setAsyncMessage} />
      ) : (
        ""
      )}
    </div>
  );
};
