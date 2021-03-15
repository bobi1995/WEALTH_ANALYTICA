import apiAddress from "../../../../../global/endpointAddress";
import axios from "axios";
const addBookmark = (companyID, data, setData) => {
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
      const arr = data.map((el) => {
        if (el.CompanyID === companyID) {
          el.IsBookmarked = true;
        }
        return el;
      });
      setData(arr);
    })
    .catch((err) => {
      if (err.response && err.response.status === 400) {
        alert(
          "You have reached your maximum of 30 bookmarks for the Basic States. To add more you should upgrade to Premium version."
        );
      }
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
      const arr = data.map((el) => {
        if (el.CompanyID === companyID) {
          el.IsBookmarked = false;
        }
        return el;
      });
      setData(arr);
    })
    .catch((err) => console.log(err));
};

export { addBookmark, removeBookmark };
