import React from "react";
import MaterialTable from "material-table";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import numeral from "numeral";
import { primaryBlue } from "../../../../../../../global/Colors";
const useStyles = makeStyles((theme) => ({
  iconStyle: {
    "&:hover": {
      color: "grey",
      cursor: "pointer",
    },
  },
}));
export default (props) => {
  const classes = useStyles();

  const handleDelete = (timestamp) => {
    props.setData(props.data.filter((el) => !(el.timestamp === timestamp)));
  };
  return (
    <MaterialTable
      title="States To Purchase"
      columns={[
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
                handleDelete(rowData.timestamp);
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
          backgroundColor: primaryBlue,
          color: "#FFF",
          fontSize: "17px",
          textAlign: "center",
          fontWeight: "bold",
        },
      }}
    />
  );
};
