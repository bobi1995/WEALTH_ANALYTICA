import React, { useState, useEffect } from "react";
import commonFunctions from "../../commonFunctions/common";
import Administrator from "../../OnePagerFunctions/Mail/Administrator";
import MaterialTable from "material-table";
import { primaryBlue } from "../../../../global/Colors";
import Chart from "./BusinessInfo/Chart";
import LocationAndBusiness from "./BusinessInfo/LocationAndBusiness";
const PlaneProfileBusinessInfo = (props) => {
  const [contribution, setContribution] = useState(0);
  const [benefit, setBenefit] = useState(0);
  const [welfare, setWelfare] = useState(0);
  console.log(props);
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
  const locationData = [
    {
      Field: "State",
      Info: props.data.State,
    },
    {
      Field: "City",
      Info: props.data.City,
    },
    {
      Field: "Address",
      Info: props.data.Address1,
    },
    {
      Field: "Zip Code",
      Info: props.data.Zip,
    },
  ];
  const businessData = [
    {
      Field: "Business Code",
      Info: props.data.BusinessCode,
    },
    {
      Field: "Industry",
      Info: props.data.Industry,
    },
    {
      Field: "Company Stock",
      Info: props.erisa ? "Includes Company Stock" : "No Company Stock",
    },
    {
      Field: "Insurance Cap",
      Info: props.erisa ? "1.0 M" : "500.0 K",
    },
  ];

  useEffect(() => {
    props.types.forEach((el) => {
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
  }, [props.types]);

  return (
    <div className="plan-businessInfo-2">
      <h1 className="plan-h1">
        {props.data.SponsorName &&
          commonFunctions.formatString(props.data.SponsorName)}
      </h1>
      <div className="chart-plan-section">
        <div style={{ width: "45%", margin: " 0, auto " }}>
          <LocationAndBusiness data={locationData} title="Location" />
          <LocationAndBusiness data={businessData} title="Business data" />
        </div>
        <div style={{ width: "45%", margin: " 0, auto " }}>
          <div>
            {props.contact.length > 0 ? (
              <MaterialTable
                title="Executive Contacts"
                columns={[
                  {
                    title: "Name",
                    field: "Name",
                    render: (rowData) => (rowData.Name ? rowData.Name : "N/A"),
                  },
                  {
                    title: "Title",
                    field: "Title",
                    render: (rowData) =>
                      rowData.Title ? rowData.Title : "N/A",
                  },
                  {
                    title: "Email",
                    field: "Email",
                    render: (rowData) =>
                      rowData.Email ? rowData.Email : "N/A",
                  },
                ]}
                data={props.contact}
                options={{
                  headerStyle: {
                    backgroundColor: primaryBlue,
                    color: "#FFF",
                    fontSize: 18,
                  },
                  paging: false,
                  search: false,
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Chart
        data={data}
        contribution={contribution}
        welfare={welfare}
        benefit={benefit}
      />
      <Administrator
        administrator={{
          admin: props.data.AdministratorName,
          phone: props.data.PhoneNumber,
        }}
      />
    </div>
  );
};

export default PlaneProfileBusinessInfo;
