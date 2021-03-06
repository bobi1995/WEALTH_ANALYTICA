import axios from "axios";
import apiAddress from "../../../global/endpointAddress";

const fetching = async (url) => {
  const res = await axios({
    method: "get",
    url: url,
    timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
    headers: {
      Authorization: "Basic " + sessionStorage.getItem("Token"),
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((result) => {
      return result;
    })
    .catch((e) => {
      console.log(e);
      alert("For some reason we could not find the desired results.");
      window.location.reload();
    });
  return res.data;
};

const SearchFunction = (
  year,
  states,
  cities,
  maxIncome,
  minIncome,
  minParticipants,
  maxParticipants,
  businessCode,
  benefitType,
  benefitSymbol,
  planEntity,
  dfeoption
) => {
  let url;
  let result;
  if (cities.length < 1) {
    url = `${apiAddress}/api/SmallCompanies/GetCompaniesByState?year=${year}&`;

    states.forEach((state, index) => {
      url = url.concat(`state=${state}&`);
    });
    if (maxIncome) {
      const maxInc = parseFloat(maxIncome.replace(/,/g, ""));
      url = url.concat(`maxAssets=${maxInc}&`);
    }
    if (minIncome) {
      const minInc = parseFloat(minIncome.replace(/,/g, ""));
      url = url.concat(`minAssets=${minInc}&`);
    }

    if (maxParticipants) {
      const maxPart = parseFloat(maxParticipants.replace(/,/g, ""));
      url = url.concat(`maxPart=${maxPart}&`);
    }
    if (minParticipants) {
      const minPart = parseFloat(minParticipants.replace(/,/g, ""));
      url = url.concat(`minPart=${minPart}&`);
    }
    if (businessCode) {
      url = url.concat(`businessCode=${businessCode}&`);
    }
    if (benefitType !== "All" && benefitSymbol === "All") {
      url = url.concat(`benefitType=${benefitType}&`);
    } else if (benefitSymbol !== "All") {
      url = url.concat(`benefitType=${benefitSymbol}&`);
    }
    if (planEntity !== "All") {
      url = url.concat(`planEntity=${planEntity}&`);
    }
    if (dfeoption) {
      url = url.concat(`planEntity=${dfeoption}&`);
    }
  } else {
    url = `${apiAddress}/api/SmallCompanies/GetCompaniesByCity?year=${year}&`;
    states.forEach((state, index) => {
      url = url.concat(`state=${state}&`);
    });
    cities.forEach((city, index) => {
      url = url.concat(`city=${city}&`);
    });
    if (maxIncome) {
      const maxInc = parseFloat(maxIncome.replace(/,/g, ""));
      url = url.concat(`maxAssets=${maxInc}&`);
    }
    if (minIncome) {
      const minInc = parseFloat(minIncome.replace(/,/g, ""));
      url = url.concat(`minAssets=${minInc}&`);
    }
    if (maxParticipants) {
      const maxPart = parseFloat(maxParticipants.replace(/,/g, ""));
      url = url.concat(`maxPart=${maxPart}&`);
    }
    if (minParticipants) {
      const minPart = parseFloat(minParticipants.replace(/,/g, ""));
      url = url.concat(`minPart=${minPart}&`);
    }
    if (businessCode) {
      url = url.concat(`businessCode=${businessCode}&`);
    }
    if (benefitType !== "All" && benefitSymbol === "All") {
      url = url.concat(`benefitType=${benefitType}&`);
    } else if (benefitSymbol !== "All") {
      url = url.concat(`benefitType=${benefitSymbol}&`);
    }
    if (planEntity !== "All") {
      url = url.concat(`planEntity=${planEntity}&`);
    }
    if (dfeoption) {
      url = url.concat(`planEntity=${dfeoption}&`);
    }
  }
  result = fetching(url);

  return result;
};

export default SearchFunction;
