import React from "react";
import MaterialTable from "material-table";
import EmailIcon from "@material-ui/icons/Email";
import { primaryBlue } from "../../../global/Colors";

const ContactsTable = ({ contacts, setReceivers, receivers }) => {
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
          onClick: (event, rowData) => {
            if (receivers.includes(rowData.Email) || !rowData.Email) {
              return receivers;
            } else {
              let newString = "";
              if (receivers) {
                newString = `${receivers},${rowData.Email}`;
              } else {
                newString = `${rowData.Email}`;
              }

              return setReceivers(newString);
            }
          },
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
