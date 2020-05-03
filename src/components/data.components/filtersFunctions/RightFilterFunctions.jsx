import React from "react";
import axios from "axios";
import businessCodes from "../../../global/businessCode";
import apiAddress from "../../../global/endpointAddress";

const benefitTypeSelected = async () => {
  const selectedType = document.getElementById("benefitType").options[
    document.getElementById("benefitType").selectedIndex
  ].value;
  const symbols = document.getElementById("benefit-symbol");
  const symbolsLabel = document.getElementById("filters-symbol-label");
  symbols.options.length = 0;
  if (selectedType !== "All") {
    symbols.disabled = false;
    symbolsLabel.style.textDecoration = "none";

    await axios
      .get(`${apiAddress}/api/BenefitTypes/Get?type=${selectedType}`, {
        headers: {
          Authorization: "Basic " + sessionStorage.getItem("Token"),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        if (result.data) {
          const defaultOption = document.createElement("option");
          defaultOption.value = "All";
          defaultOption.text = "All";
          symbols.add(defaultOption, null);
          result.data.map((element, index) => {
            const option = document.createElement("option");
            option.value = element.Symbol;
            option.text = element.Description;
            symbols.add(option, null);
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    const defaultOption = document.createElement("option");
    defaultOption.value = "All";
    defaultOption.text = "All";
    symbols.add(defaultOption, null);
    symbols.disabled = true;
    symbolsLabel.style.textDecoration = "line-through";
  }
};

// BUSINESS CODE
const codesList = () => {
  return businessCodes.map((code, index) => {
    return (
      <option key={code.BusinessCode} value={code.businessCodesss}>
        {code.IndustryName}
      </option>
    );
  });
};

//FIND CODE
const findCode = (industry) => {
  let obj = businessCodes.find((o) => o.IndustryName === industry);
  return obj;
};
export default {
  benefitTypeSelected,
  codesList,
  findCode,
};
