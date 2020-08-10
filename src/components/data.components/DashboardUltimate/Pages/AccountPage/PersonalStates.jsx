import React, { useState } from "react";
import MaterialTable from "material-table";
import common from "../../../commonFunctions/commonExtracts";

export default (props) => {
  return (
    <MaterialTable
      title="Active Subscriptions"
      columns={[
        {
          title: "Name",
          field: "name",
          cellStyle: {
            backgroundColor: "#95C0E0",
            color: "#FFF",
          },
          headerStyle: {
            backgroundColor: "#378FC3",
          },
        },
        {
          title: "Abbriviation",
          field: "abbriviation",
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          title: "Subscription",
          field: "type",
          cellStyle: {
            textAlign: "center",
          },
        },
        { title: "Expires", field: "expires", type: "date" },
      ]}
      data={common.extractPaidFullName()}
      options={{
        headerStyle: {
          backgroundColor: "#01579b",
          color: "#FFF",
        },
        paging: false,
        search: false,
      }}
    />
  );
};
