import React from "react";
import { makeStyles, Box, Link, Typography } from "@material-ui/core";
import MaterialTable from "material-table";
import EmailIcon from "@material-ui/icons/Email";
import Administrator from "./Administrator";
import { backgroundGrey, primaryBlue } from "../../../../global/Colors";

const Contacts = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.contactContainer}>
        {props.contacts.length > 0 ? (
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
            data={props.contacts}
            actions={[
              {
                icon: EmailIcon,
                tooltip: "Send email ot selected Contact",
                onClick: (event, rowData) => alert("You saved " + rowData.name),
              },
            ]}
            options={{
              headerStyle: {
                backgroundColor: primaryBlue,
                color: "#FFF",
                fontSize: 18,
              },
              actionsCellStyle: {
                color: primaryBlue,
              },
              paging: false,
              search: false,
            }}
          />
        ) : (
          ""
        )}
        <Box className={classes.adminContainer}>
          {props.administrator.admin ? (
            <Administrator administrator={props.administrator} />
          ) : (
            ""
          )}
        </Box>
      </Box>
      {props.administrator.site ? (
        <Box className={classes.webisteContainer}>
          <Typography className={classes.heading} variant="h6" component="h6">
            Visit Client's website at:
          </Typography>
          <Typography variant="h6" component="h6">
            <Link href={"http://" + props.administrator.site} target="_blank">
              {props.administrator.site}
            </Link>
          </Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

const useStyles = makeStyles({
  container: { backgroundColor: backgroundGrey },
  contactContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    padding: "1%",
  },
  adminContainer: {
    backgroundColor: "black",
  },
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  webisteContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

export default Contacts;
