import React, { useState } from "react";
import MaterialTable from "material-table";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import commonFunctions from "../../commonFunctions/common";
import Tooltip from "@material-ui/core/Tooltip";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { addBookmark, removeBookmark } from "./Table/Bookmark";
import {
  ArrowUpward,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
} from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";

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
            <Tooltip title={rowData.Name}>
              <Link
                to={{
                  pathname: `/onepager/${rowData.CompanyID}`,
                }}
                target="_blank"
              >
                {rowData.Name}
              </Link>
            </Tooltip>
          ),
          cellStyle: {
            fontStyle: "bold",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: 400,
          },
        },
        {
          field: "Address1",
          title: "Address",
          render: (rowData) => (
            <Tooltip title={rowData.Address1}>
              <NavLink
                to={{
                  pathname: `https://www.google.com/maps/search/?api=1&query=${rowData.City},+${rowData.Address1}`,
                }}
                target="_blank"
                activeStyle={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                {rowData.Address1}
              </NavLink>
            </Tooltip>
          ),
          cellStyle: {
            whiteSpace: "nowrap",
            maxWidth: 300,
            textOverflow: "ellipsis",
            overflow: "hidden",
          },
          filterPlaceholder: "Search address",
        },
        {
          field: "City",
          title: "City",
          sorting: false,
          filtering: false,
        },
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
          filtering: false,
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "NetIncome",
          title: "Net Income",
          filterPlaceholder: "Minimum",
          customSort: (a = 0, b = 0) => a.NetIncome - b.NetIncome,
          filtering: false,
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
          render: (rowData) =>
            rowData.IsBookmarked ? (
              <StarIcon
                style={{ color: "#e6e600" }}
                onClick={() =>
                  removeBookmark(rowData.CompanyID, props.data, props.setData)
                }
              />
            ) : (
              <StarBorderIcon
                onClick={() =>
                  addBookmark(rowData.CompanyID, props.data, props.setData)
                }
              />
            ),
          cellStyle: {
            textAlign: "center",
          },
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
          fontWeight: "bold",
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
