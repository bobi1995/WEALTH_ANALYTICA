import React, { useState, useEffect } from "react";
import commonFunctions from "../../commonFunctions/common";
import Contact from "../../OnePagerFunctions/OnePagerContact";
import { Pie } from "react-chartjs-2";

const PlaneProfileBusinessInfo = (props) => {
  const [contribution, setContribution] = useState(0);
  const [benefit, setBenefit] = useState(0);
  const [welfare, setWelfare] = useState(0);
  const data = {
    labels: ["Contribution", "Benefit", "Welfare"],
    datasets: [
      {
        data: [contribution, benefit, welfare],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  useEffect(() => {
    props.types.map((el) => {
      switch (el.Type) {
        case "DefinedContributionPension":
          return setContribution((contribution) => contribution + 1);

        case "DefinedBenefitPension":
          return setBenefit((benefit) => benefit + 1);

        case "Welfare":
          return setWelfare((welfare) => welfare + 1);

        default:
          return;
      }
    });
  }, []);

  return (
    <div className="plan-businessInfo-2">
      <h1 className="plan-h1">
        {props.data.SponsorName &&
          commonFunctions.formatString(props.data.SponsorName)}
      </h1>
      <div className="business-main-tables">
        <div className="plan-table-section-BusinessInfo">
          <div className="inside-business-div">
            <h3 className="planProfile-header-h1">Location</h3>
            <table className="dashboard-table table">
              <tbody>
                <tr>
                  <th>State</th>
                  <td>{props.data.State}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>
                    {props.data.City &&
                      commonFunctions.formatString(props.data.City)}
                  </td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    {props.data.Address1 &&
                      commonFunctions.formatString(props.data.Address1)}
                  </td>
                </tr>
                <tr>
                  <th>Zip Code</th>
                  <td>{props.data.Zip}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="inside-business-div">
            <h3 className="planProfile-header-h1">Business Information</h3>
            <table className="dashboard-table table">
              <tbody>
                <tr>
                  <th>Business Code</th>
                  <td>{props.data.BusinessCode}</td>
                </tr>
                <tr>
                  <th>Industry</th>
                  <td>{props.data.Industry}</td>
                </tr>
                <tr>
                  <th className="onepager-pesion-description">
                    Company Stock
                    <span className="onepager-tooltip">
                      Plan invests in the Sponsor's Company Stock Indicator
                    </span>
                  </th>
                  {props.erisa ? (
                    <td key="company_stock">Includes Company Stock</td>
                  ) : (
                    <td key="company_stock">No Company Stock</td>
                  )}
                </tr>
                <tr>
                  <th>Insurance Cap</th>
                  {props.erisa ? (
                    <td key="cap">1.0 M</td>
                  ) : (
                    <td key="cap">500.0 K</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="plan-table-section-BusinessInfo">
          <div style={{ display: "flex" }}>
            <Contact
              contact={{
                Name: props.data.AdministratorName,
                Title: "Administrator",
                Phone: props.data.PhoneNumber,
              }}
              headWidth="35"
            />
            {Object.values(props.contact).some((x) => x !== null) ? (
              <Contact contact={props.contact} headWidth="35" />
            ) : (
              ""
            )}
          </div>
          <div className="businessplan-smallDiv">
            <div>
              <small className="form-text text-muted">
                Benefit Pension: {benefit}
              </small>
              <small className="form-text text-muted">
                Contribution Pension: {contribution}
              </small>
              <small className="form-text text-muted">Welfare: {welfare}</small>
            </div>
            <div>
              <Pie data={data} width={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaneProfileBusinessInfo;
