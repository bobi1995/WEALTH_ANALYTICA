import React from "react";
import numeral from "numeral";
const SmallCompanies = props => {
  let convertedIncome = 0;
  if (props.singleCompany.NetIncome) {
    convertedIncome = numeral(props.singleCompany.NetIncome).format("0,0");
  }

  return (
    <tr>
      <td>{props.singleCompany.Name}</td>
      <td>{props.singleCompany.Address1}</td>
      <td>{props.singleCompany.City}</td>

      <td>{props.singleCompany.AdministratorName}</td>

      <td>{props.singleCompany.Phone}</td>

      <td>{props.singleCompany.Participants}</td>

      <td>${convertedIncome}</td>
      <td>
        <a href="https://www.w3schools.com" target="_blank">
          Details
        </a>
      </td>
    </tr>
  );
};

export default SmallCompanies;
