import axios from "axios";
import apiAddress from "../../../global/endpointAddress";

const fetching = async (url) => {
  const res = await axios({
    method: "get",
    url: url,
    timeout: 60 * 4 * 1000, // Let's say you want to wait at least 4 mins
    headers: {
      Authorization: "Basic " + localStorage.getItem("Token"),
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((result) => {
      return result;
    })
    .catch((e) => {
      alert("For some reason we could not find the desired results.");
      window.location.reload();
    });
  return res.data;
};

const SearchFunction = (
  year,
  states,
  cities = "",
  businessCode = "",
  planEntity = "",
  benefitType = "",
  minParticipants = "",
  maxParticipants = "",
  minIncome = "",
  maxIncome = "",
  maxTotalPart = "",
  minTotalPart = "",
  minTotalAssets = "",
  maxTotalAssets = "",
  sponsor = "",
  dfeoption = ""
) => {
  let url;
  let result;
  if (cities.length < 1) {
    url = `${apiAddress}/api/SmallCompanies/GetCompaniesByState?year=${year}&`;

    if (states) {
      url = url.concat(`state=${states}&`);
    }
    if (maxIncome) {
      const maxInc = parseFloat(maxIncome.replace(/,/g, ""));
      url = url.concat(`maxAssets=${maxInc}&`);
    }
    if (minIncome) {
      const minInc = parseFloat(minIncome.replace(/,/g, ""));
      url = url.concat(`minAssets=${minInc}&`);
    }

    if (maxParticipants) {
      url = url.concat(`maxPart=${maxParticipants}&`);
    }
    if (minParticipants) {
      url = url.concat(`minPart=${minParticipants}&`);
    }
    if (businessCode) {
      url = url.concat(`businessCode=${businessCode}&`);
    }
    if (benefitType) {
      url = url.concat(`benefitType=${benefitType}&`);
    }
    if (planEntity) {
      url = url.concat(`planEntity=${planEntity}&`);
    }
    if (dfeoption) {
      url = url.concat(`planEntity=${dfeoption}&`);
    }
    if (minTotalPart) {
      url = url.concat(`minTotalPart=${minTotalPart}&`);
    }
    if (maxTotalPart) {
      url = url.concat(`maxTotalPart=${maxTotalPart}&`);
    }
    if (minTotalAssets) {
      url = url.concat(`minTotalAssets=${minTotalAssets}&`);
    }
    if (maxTotalAssets) {
      url = url.concat(`maxTotalAssets=${maxTotalAssets}&`);
    }
    if (sponsor) {
      url = url.concat(`sponsNamе=${sponsor}`);
    }
  } else {
    url = `${apiAddress}/api/SmallCompanies/GetCompaniesByCity?year=${year}&`;
    if (states) {
      url = url.concat(`state=${states}&`);
    }
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
      url = url.concat(`maxPart=${maxParticipants}&`);
    }
    if (minParticipants) {
      url = url.concat(`minPart=${minParticipants}&`);
    }
    if (businessCode) {
      url = url.concat(`businessCode=${businessCode}&`);
    }
    if (benefitType) {
      url = url.concat(`benefitType=${benefitType}&`);
    }
    if (planEntity) {
      url = url.concat(`planEntity=${planEntity}&`);
    }
    if (dfeoption) {
      url = url.concat(`planEntity=${dfeoption}&`);
    }
    if (minTotalPart) {
      url = url.concat(`minTotalPart=${minTotalPart}&`);
    }
    if (maxTotalPart) {
      url = url.concat(`maxTotalPart=${maxTotalPart}&`);
    }
    if (minTotalAssets) {
      url = url.concat(`minTotalAssets=${minTotalAssets}&`);
    }
    if (maxTotalAssets) {
      url = url.concat(`maxTotalAssets=${maxTotalAssets}&`);
    }
    if (sponsor) {
      url = url.concat(`sponsName=${sponsor}`);
    }
  }

  result = fetching(url);

  return { result, url };
};

export default SearchFunction;
