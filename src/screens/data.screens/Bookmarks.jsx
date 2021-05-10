import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/bookmarks.scss";
import BookmarkMainTable from "./bookmarksFunctions/BookmarkMainTable";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";
import Loader from "../../components/plainCicularLoader";
import AlertBox from "../../components/alertBox";

const Bookmarks = () => {
  const [results, setResults] = useState([]);
  const [tempRes, SetTempRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const url = `${apiAddress}/api/Bookmarks/List?loadFinancialDetails=false&year=null`;
    setLoading(true);
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResults(res.data);
        SetTempRes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setAlertMessage("For some reason we could not load your bookmarks.");
        setLoading(false);
      });
  }, []);

  const allReturn = () => {
    SetTempRes(results);
  };

  const clientsReturn = () => {
    const newArr = results.filter((element) => element.IsClient === true);
    SetTempRes(newArr);
  };

  const nonclientsReturn = () => {
    const newArr = results.filter((element) => element.IsClient === false);
    SetTempRes(newArr);
  };

  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Bookmarks</h1>
      </section>
      <Magellan activeStep={2} />

      <div className="switch-field">
        <h1 className="onepager-h2" style={{ fontSize: "30px" }}>
          Wealth Analytica Connect
        </h1>
        <input
          type="radio"
          id="radio-three"
          name="switch-two"
          value="yes"
          onChange={allReturn}
          defaultChecked
        />
        <label htmlFor="radio-three">All </label>
        <input
          type="radio"
          id="radio-four"
          name="switch-two"
          value="maybe"
          onChange={clientsReturn}
        />
        <label htmlFor="radio-four">Connect</label>
        <input
          type="radio"
          id="radio-five"
          name="switch-two"
          value="no"
          onChange={nonclientsReturn}
        />
        <label htmlFor="radio-five">Potential Clients</label>
      </div>
      <div>{loading ? <Loader /> : <BookmarkMainTable data={tempRes} />}</div>
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
};

export default Bookmarks;
