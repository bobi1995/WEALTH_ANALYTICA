import React from "react";
import MaterialTable from "material-table";
<<<<<<< HEAD
import { primaryBlue } from "../../../../global/Colors";
import numeral from "numeral";

=======
import numeral from "numeral";
>>>>>>> e2cc8e321769fb7d2f99092f9b5cbdf52648d32d
const Contacts = ({ scoreData, year }) => {
  return (
    <MaterialTable
      title={`Wealth Analytica Score Card - ` + year}
      columns={[
        {
          title: "Field",
          field: "name",
          cellStyle: {
            width: "80%",
          },
          render: (rowData) => (rowData.name ? rowData.name : "N/A"),
        },
        {
          title: "Score",
          field: "value",
          render: (rowData) =>
            rowData.value ? `${numeral(rowData.value).format("0.0")}%` : "N/A",
          cellStyle: (rowData) => ({
            color: rowData < 50 ? "red" : rowData > 79 ? "green" : "orange",
            fontWeight: "bold",
          }),
        },
      ]}
      data={scoreData}
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
  );
};

export default Contacts;
