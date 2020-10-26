import React from "react";
import MaterialTable from "material-table";
import EmailIcon from "@material-ui/icons/Email";
import { primaryBlue } from "../../../../global/Colors";
const Contacts = ({ contacts }) => {
  return (
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
      data={contacts}
      actions={[
        {
          icon: EmailIcon,
          tooltip: "Send email ot selected Contact",
          onClick: (event, rowData) => alert("You saved "),
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
  );
};

export default Contacts;
