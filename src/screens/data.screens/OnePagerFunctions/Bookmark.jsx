import apiAddress from "../../../global/endpointAddress";
import axios from "axios";

const addBookmark = (companyID) => {
  axios
    .post(
      `${apiAddress}/api/Bookmarks/add?CompanyID=${companyID}`,
      {},
      {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
        },
      }
    )
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => {
      alert("Error.");
    });
};

const removeBookmark = (companyID, data, setData) => {
  axios
    .post(
      `${apiAddress}/api/Bookmarks/Remove?CompanyID=${companyID}`,
      {},
      {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

export { addBookmark, removeBookmark };
