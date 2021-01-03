import React, { useState, useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import commonFunctions from "../commonFunctions/common";
import LocationAndBusiness from "./BusinessInfo/LocationAndBusiness";
import Chart from "./BusinessInfo/Chart";
import Administrator from "../OnePagerFunctions/Mail/Administrator";
import { primaryBlue } from "../../../global/Colors";
import MaterialTable from "material-table";
import GoogleMap from "../../../components/GoogleMap";

const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
  },
  tables: {
    display: "flex",
    justifyContent: "space-around",
  },
  adminAndContacts: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  contactsContainer: { width: "70%" },
  adminContainer: {
    width: "30%",
  },
});

const BusinessInfo = (props) => {
  const classes = useStyles();
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
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          {props.data.SponsorName &&
            commonFunctions.formatString(props.data.SponsorName)}
        </Typography>
      </Box>
      <Box className={classes.tables}>
        <LocationAndBusiness data={locationData} title="Location" />

        <LocationAndBusiness data={businessData} title="Business data" />
      </Box>

      <Box className={classes.adminAndContacts}>
        <Box className={classes.contactsContainer}>
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
                render: (rowData) => (rowData.Title ? rowData.Title : "N/A"),
              },
              {
                title: "Email",
                field: "Email",
                render: (rowData) => (rowData.Email ? rowData.Email : "N/A"),
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
        </Box>

        <Administrator
          className={classes.adminContainer}
          administrator={{
            admin: props.data.AdministratorName,
            phone: props.data.PhoneNumber,
          }}
        />
      </Box>
      <GoogleMap
        address={props.data.Address1}
        city={props.data.City}
        location={props.location}
        companyID={props.companyID}
      />
    </Box>
  );
};

export default BusinessInfo;
