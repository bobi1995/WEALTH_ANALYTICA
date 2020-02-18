import axios from "axios";

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
      .get(
        `http://pensionswebapi.azurewebsites.net/api/BenefitTypes/Get?type=${selectedType}`,
        {
          headers: {
            Authorization: "Basic " + sessionStorage.getItem("Token"),
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(result => {
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
      .catch(e => {
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

const companySelected = () => {
  document.getElementById("dfe-options").style.display = "none";
  document.getElementById("dfeoptions").value = "All";

  const planEntities = document.getElementById("planEntity");
  planEntities.options.length = 0;

  const datalist = [
    { text: "All", value: "All" },
    { text: "One-participant plan", value: "2" },
    { text: "Foreign plan", value: "4" },
    { text: "Single-employer", value: "1" },
    { text: "Multi-employer plan", value: "3" },
    { text: "Multiemployer", value: "3" },
    { text: "DFE", value: "4" }
  ];

  const companyType = document.getElementById("companyType").options[
    document.getElementById("companyType").selectedIndex
  ].value;
  if (companyType === "All") {
    datalist.map(element => {
      const option = document.createElement("option");
      option.text = element.text;
      option.value = element.value;
      planEntities.add(option, null);
    });
  } else if (companyType == "true") {
    const small = datalist.slice(0, 5);
    small.map(element => {
      const option = document.createElement("option");
      option.text = element.text;
      option.value = element.value;
      planEntities.add(option, null);
    });
  } else if (companyType == "false") {
    const small = datalist.slice(3);
    small.unshift({ text: "All", value: "All" });
    small.map(element => {
      const option = document.createElement("option");
      option.text = element.text;
      option.value = element.value;
      planEntities.add(option, null);
    });
  }
};

const planEntitySelected = () => {
  document.getElementById("dfe-options").style.display = "none";
  document.getElementById("dfeoptions").value = "All";
  const selectedEntity = document.getElementById("planEntity").options[
    document.getElementById("planEntity").selectedIndex
  ].text;
  const entityValue = document.getElementById("planEntity").options[
    document.getElementById("planEntity").selectedIndex
  ].value;

  // LARGE COMPANIES
  if (selectedEntity == "Multiemployer") {
    document.getElementById("companyType").value = false;
    companySelected();
    document.getElementById("planEntity").value = entityValue;
  } else if (selectedEntity == "DFE") {
    document.getElementById("companyType").value = false;
    companySelected();
    document.getElementById("planEntity").value = entityValue;
    document.getElementById("dfe-options").style.display = "flex";
  }

  // SMALL COMPANIES
  else if (selectedEntity == "One-participant plan") {
    document.getElementById("companyType").value = true;
    companySelected();
    document.getElementById("planEntity").value = entityValue;
  } else if (selectedEntity == "Foreign plan") {
    document.getElementById("companyType").value = true;
    companySelected();
    document.getElementById("planEntity").value = entityValue;
  }

  // ALL COMPANIES
  else if (selectedEntity == "All") {
    document.getElementById("companyType").value = "All";
    companySelected();
    document.getElementById("planEntity").value = entityValue;
  }
};

export default { benefitTypeSelected, companySelected, planEntitySelected };
