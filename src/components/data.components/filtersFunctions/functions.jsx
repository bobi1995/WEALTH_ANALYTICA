import axios from "axios";
const cityFunction = async state => {
  const res = await axios
    .get(
      `http://pensionswebapi.azurewebsites.net/api/Cities/Get?state=${state}`,
      {
        headers: {
          Authorization: "Basic " + localStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
    .then(result => {
      return result;
    })
    .catch(e => {
      console.log(e);
    });
  if (res) {
    return res.data;
  }
};

const cityReducer = async (state, array) => {
  const index = array.indexOf(state);
  array.splice(index, 1);
  let url = `http://pensionswebapi.azurewebsites.net/api/Cities/Get?`;
  array.forEach((element, index) => {
    const parts = element.split(" - ");
    url = url.concat(`state=${parts[1]}&`);
  });
  const res = await axios
    .get(url, {
      headers: {
        Authorization: "Basic " + localStorage.getItem("Token"),
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(result => {
      return result;
    })
    .catch(e => {
      console.log(e);
    });
  if (res) {
    return res.data;
  }
};

export default { cityFunction, cityReducer };
