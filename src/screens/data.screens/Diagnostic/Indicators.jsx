import React from "react";
import { makeStyles, Box, Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import {
  tableData1,
  tableData2,
  tableData3,
} from "../../../global/diagnosticTables";
import numeral from "numeral";
const useStyles = makeStyles(() => ({
  tableBox: {
    display: "flex",
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
  },
  paperStyle: {
    width: "94%",
    display: "flex",
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "space-between",
    padding: "1%",
  },
}));

const Indicators = ({ info }) => {
  const classes = useStyles();
  return info.length > 0 ? (
    <Box className={classes.tableBox}>
      <Paper className={classes.paperStyle} elevation={21}>
        <MaterialTable
          title="Compliance Indicators"
          columns={[
            {
              title: "Field",
              field: "field",
              cellStyle: {
                width: "80%",
              },
            },
            {
              title: "Score",
              field: "code",
              render: (rowData) =>
                rowData.type
                  ? info.map((el) =>
                      el.Name === rowData.code
                        ? `$${numeral(el.Text).format("0,0")}`
                        : ""
                    )
                  : info.map((el) =>
                      el.Name === rowData.code ? (
                        el.Ind === 0 ? (
                          <CheckIcon key={el.Ind} style={{ color: "green" }} />
                        ) : (
                          <ClearIcon key={el.Ind} style={{ color: "red" }} />
                        )
                      ) : (
                        ""
                      )
                    ),
            },
          ]}
          data={tableData1}
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

        <MaterialTable
          title="Compliance Indicators"
          columns={[
            {
              title: "Field",
              field: "field",
              cellStyle: {
                width: "80%",
              },
            },
            {
              title: "Score",
              field: "code",
              render: (rowData) =>
                rowData.type
                  ? info.map((el) =>
                      el.Name === rowData.code
                        ? `$${numeral(el.Text).format("0,0")}`
                        : ""
                    )
                  : info.map((el) =>
                      el.Name === rowData.code ? (
                        el.Ind === 0 ? (
                          <CheckIcon key={el.Ind} style={{ color: "green" }} />
                        ) : (
                          <ClearIcon key={el.Ind} style={{ color: "red" }} />
                        )
                      ) : (
                        ""
                      )
                    ),
            },
          ]}
          data={tableData2}
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

        <MaterialTable
          title="Compliance Indicators"
          columns={[
            {
              title: "Field",
              field: "field",
              cellStyle: {
                width: "80%",
              },
            },
            {
              title: "Score",
              field: "code",
              render: (rowData) =>
                rowData.type
                  ? info.map((el) =>
                      el.Name === rowData.code
                        ? `$${numeral(el.Text).format("0,0")}`
                        : ""
                    )
                  : info.map((el) =>
                      el.Name === rowData.code ? (
                        el.Ind === 0 ? (
                          <CheckIcon key={el.Ind} style={{ color: "green" }} />
                        ) : (
                          <ClearIcon key={el.Ind} style={{ color: "red" }} />
                        )
                      ) : (
                        ""
                      )
                    ),
            },
          ]}
          data={tableData3}
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
      </Paper>
    </Box>
  ) : (
    ""
  );
};

export default Indicators;
