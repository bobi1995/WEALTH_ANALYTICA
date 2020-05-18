import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/bookmarks.scss";
import BookmarkMainTable from "./bookmarksFunctions/BookmarkMainTable";
import Magellan from "./Magellan";
import apiAddress from "../../global/endpointAddress";

const Bookmarks = () => {
  const [results, setResults] = useState([]);
  const [tempRes, SetTempRes] = useState([]);

  useEffect(() => {
    const url = `${apiAddress}/api/Bookmarks/List`;

    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        setResults(res.data);
        SetTempRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allReturn = () => {
    SetTempRes(results);
  };

  const clientsReturn = () => {
    const newArr = results.filter((element) => {
      if (element.IsClient === true) {
        return element;
      }
    });
    SetTempRes(newArr);
  };

  const nonclientsReturn = () => {
    const newArr = results.filter((element) => {
      if (element.IsClient === false) {
        return element;
      }
    });
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
      <div>
        <BookmarkMainTable data={tempRes} />
      </div>
    </div>
  );
};

export default Bookmarks;
