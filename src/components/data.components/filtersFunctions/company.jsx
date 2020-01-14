import React from "react";
import numeral from "numeral";
import { Link } from "react-router-dom";

const SmallCompanies = props => {
  let convertedIncome = 0;
  let planID;
  let isLarge;
  if (props.singleCompany.NetIncome) {
    convertedIncome = numeral(props.singleCompany.NetIncome).format("0,0");
  }
  if (props.singleCompany.SmallCompanyPlanID) {
    planID = props.singleCompany.SmallCompanyPlanID;
    isLarge = false;
  } else {
    planID = props.singleCompany.LargeCompanyPlanID;
    isLarge = true;
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
        <Link
          to={{
            pathname: `/onepager/${planID}/${isLarge}`
          }}
          target="_blank"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default SmallCompanies;
