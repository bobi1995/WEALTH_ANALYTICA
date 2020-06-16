import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import commonFunctions from "../../commonFunctions/common";
import {
  ArrowUpward,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default (props) => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MaterialTable
      title="Basic Filtering Preview"
      icons={{
        Filter: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        Search: React.forwardRef((props, ref) => <SearchIcon ref={ref} />),
        ResetSearch: React.forwardRef((props, ref) => (
          <RotateLeftIcon ref={ref} />
        )),
        SortArrow: ArrowUpward,
        FirstPage: FirstPage,
        LastPage: LastPage,
        NextPage: ChevronRight,
        PreviousPage: ChevronLeft,
      }}
      columns={[
        {
          field: "Name",
          title: "Name",
          filterPlaceholder: "Search plan",
          render: (rowData) => (
            <Link
              to={{
                pathname: `/onepager/${rowData.CompanyID}`,
              }}
              target="_blank"
            >
              {rowData.Name}
            </Link>
          ),
          cellStyle: {
            fontStyle: "bold",
            whiteSpace: "nowrap",
          },
        },
        // {
        //   field: "Address1",
        //   title: "Address",
        //   cellStyle: {
        //     whiteSpace: "nowrap",
        //   },
        //   filterPlaceholder: "Search address",
        // },
        { field: "City", title: "City", sorting: false, filtering: false },
        {
          field: "AdministratorName",
          title: "Administrator",
          filterPlaceholder: "Search admin",
        },
        {
          field: "Phone",
          title: "Phone",
          sorting: false,
          render: (rowData) => commonFunctions.phoneFormat(rowData.Phone),
          cellStyle: {
            whiteSpace: "nowrap",
          },
          filterPlaceholder: "Search phone",
        },
        {
          field: "Participants",
          title: "Participants",
          type: "numeric",
          filterPlaceholder: "Minimum",
          customFilterAndSearch: (term, rowData) => term < rowData.Participants,

          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "NetIncome",
          title: "Net Income",
          emptyValue: "N/A",
          filterPlaceholder: "Minimum",
          customFilterAndSearch: (term, rowData) => term < rowData.NetIncome,

          render: (rowData) => `$${commonFunctions.reducer(rowData.NetIncome)}`,
          cellStyle: (rowData) => {
            if (rowData) {
              return {
                color: rowData < 0 ? "red" : "black",
                textAlign: "center",
              };
            } else {
              return {
                textAlign: "center",
              };
            }
          },
        },

        {
          field: "bookmark",
          title: "Bookmark",
          sorting: false,
          filtering: false,
        },
      ]}
      data={props.data}
      onRowClick={(evt, selectedRow) =>
        setSelectedRow(selectedRow.tableData.id)
      }
      options={{
        filtering: true,
        sorting: true,

        headerStyle: {
          backgroundColor: "#378FC3",
          color: "#FFF",
          fontSize: "17px",
          textAlign: "center",
        },

        rowStyle: (rowData) => {
          return {
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          };
        },
      }}
    />
  );
};
