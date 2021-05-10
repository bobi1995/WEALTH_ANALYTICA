import React, { useEffect, useState } from "react";
import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "./InvestmentDetails/Table";
import { lastYear } from "../../../../../global/Years";
import AlertBox from "../../../../../components/alertBox";

export default function FullScreenDialog(props) {
  const [results, setResults] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertFlag, setAlertFlag] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `${apiAddress}/api/SmallCompanies/GetInvestmentDetails?companyID=${props.companyID}&year=${lastYear}`,
      timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
      headers: {
        Authorization: "Basic " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        setResults(res.data);
      })
      .catch((error) => {
        setAlertMessage(
          "For some reason we could not find the desired results."
        );
        setAlertFlag(true);
      });
  }, [props.companyID]);

  return (
    <div>
      {results ? (
        <Table data={results} />
      ) : alertFlag ? (
        ""
      ) : (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress
            size={150}
            style={{ textAlign: "center", marginTop: "3%" }}
          />
          <p style={{ textAlign: "center", marginTop: "3%" }}>
            Loading Investment details....Please wait
          </p>
        </div>
      )}
      {alertMessage ? (
        <AlertBox
          text={alertMessage}
          display={setAlertMessage}
          success={false}
        />
      ) : (
        ""
      )}
    </div>
  );
}
