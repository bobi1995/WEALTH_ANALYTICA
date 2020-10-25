import React from "react";
import MaterialTable from "material-table";
import numeral from "numeral";
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
          backgroundColor: "#378FC3",
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
