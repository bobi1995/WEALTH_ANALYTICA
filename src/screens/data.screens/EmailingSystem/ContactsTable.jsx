import React from "react";
import MaterialTable from "material-table";
import EmailIcon from "@material-ui/icons/Email";
import { primaryBlue } from "../../../global/Colors";

const ContactsTable = ({ contacts }) => {
  console.log(contacts);
  return (
    <MaterialTable
      title="Executive Contacts"
      columns={[
        { title: "Name", field: "Name" },
        { title: "Email", field: "Email" },
      ]}
      data={contacts}
      actions={[
        {
          icon: () => <EmailIcon style={{ color: primaryBlue }} />,
          tooltip: "Send email to user",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
      ]}
      options={{
        paging: false,
        sorting: false,
        filtering: false,
        search: false,
        headerStyle: {
          backgroundColor: primaryBlue,
          color: "white",
        },
      }}
    />
  );
};

export default ContactsTable;
