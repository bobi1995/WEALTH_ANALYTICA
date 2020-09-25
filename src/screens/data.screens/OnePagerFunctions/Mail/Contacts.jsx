import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import MaterialTable from "material-table";
import EmailIcon from "@material-ui/icons/Email";
import Administrator from "./Administrator";

const Contacts = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
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
              backgroundColor: "#378FC3",
              color: "#FFF",
              fontSize: 18,
            },
            actionsCellStyle: {
              color: "#378FC3",
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
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
    backgroundColor: "#F3F4F8",
    display: "flex",
    justifyContent: "space-around",
    padding: "1%",
  },
  adminContainer: {
    backgroundColor: "black",
  },
});

export default Contacts;
