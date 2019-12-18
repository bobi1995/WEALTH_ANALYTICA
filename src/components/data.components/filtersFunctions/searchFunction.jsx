import axios from "axios";

const SearchFunction = async (year, states) => {
  const res = await axios
    .get(
      `http://pensionswebapi.azurewebsites.net/api/SmallCompanies/GetCompaniesByState?year=${year}&state=${states[0]}`,
      {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
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

  return res.data;
};

export default SearchFunction;
