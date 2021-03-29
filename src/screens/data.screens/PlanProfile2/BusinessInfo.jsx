import React from "react";
import { Box, makeStyles, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationAndBusiness from "./BusinessInfo/LocationAndBusiness";
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
  linkedInBox: {
    textAlign: "center",
    marginTop: "3%",
    fontSize: 20,
  },
});

const BusinessInfo = (props) => {
  const classes = useStyles();
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

  return (
    <Box>
      <Box className={classes.tables}>
        <LocationAndBusiness data={businessData} title="Business data" />

        <LocationAndBusiness data={locationData} title="Location" />
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
              sorting: false,
            }}
          />
          {/** LINKEDIN FRAME */}
          <Box className={classes.linkedInBox}>
            <LinkedInIcon fontSize="large" />
            <Link href={props.data.LinkedInPage} target="_blank">
              Visit {props.data.SponsorName} LinkedIn Profile
            </Link>
          </Box>
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
