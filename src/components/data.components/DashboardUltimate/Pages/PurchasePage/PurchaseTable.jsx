import React, { useState } from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
const useStyles = makeStyles((theme) => ({
  iconStyle: {
    "&:hover": {
      color: "grey",
      cursor: "pointer",
    },
  },
}));
export default (props) => {
  console.log(props.data);
  const classes = useStyles();
  const [selectedRow, setSelectedRow] = useState(null);
  const handleDelete = (state, type) => {
    props.setData(
      props.data.filter(
        (el) => !(el.state.name == state.name && el.type == type)
      )
    );
  };
  return (
    <MaterialTable
      title="States To Purchase"
      columns={[
        {
          field: "state",
          title: "State",
          render: (rowData) => rowData.state.name,
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "state",
          title: "Abbriviation",
          render: (rowData) => rowData.state.abbriviation,
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "type",
          title: "Type",
          render: (rowData) => (rowData.type === 1 ? "Basic" : "Premium"),
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "quantity",
          title: "Quantity",
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "totalPrice",
          title: "Price",
          render: (rowData) => `$${numeral(rowData.totalPrice).format(0, 0)}`,
          cellStyle: {
            textAlign: "center",
          },
        },
        {
          field: "delete",
          title: "Delete",
          render: (rowData) => (
            <DeleteIcon
              className={classes.iconStyle}
              onClick={() => {
                handleDelete(rowData.state, rowData.type);
              }}
            />
          ),
          cellStyle: {
            textAlign: "center",
          },
        },
      ]}
      data={props.data}
      options={{
        filtering: false,
        sorting: false,
        paging: false,
        search: false,
        headerStyle: {
          backgroundColor: "#378FC3",
          color: "#FFF",
          fontSize: "17px",
          textAlign: "center",
          fontWeight: "bold",
        },
      }}
    />
  );
};
