import React, { useState, useEffect } from "react";
import axios from "axios";
import Datanavbar from "./DataNavbar";
import "../../styles/dataPages/bookmarks.scss";
import BookmarkMainTable from "./bookmarksFunctions/BookmarkMainTable";

const Bookmarks = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = `http://pensionswebapi.azurewebsites.net/api/Bookmarks/List?userGuid=${sessionStorage.getItem(
      "Guid"
    )}`;

    console.log(url);
    axios
      .get(url, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => {
        setResults(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Bookmarks</h1>
      </section>
      <div>
        <BookmarkMainTable data={results} />
      </div>
    </div>
  );
};

export default Bookmarks;
