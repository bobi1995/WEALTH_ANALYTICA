import React from "react";
import MaterialTable from "material-table";
import { ArrowUpward, ChevronRight } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { makeStyles, Box, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontSize: 45,
  },
  subheading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 27,
  },
  container: {
    marginTop: "5%",
    marginLeft: "3%",
    marginRight: "3%",
  },
  subContainer: {
    marginTop: "3%",
  },
  divider: {
    margin: "5%",
  },
}));

const Tables = ({ info, mainHeading }) => {
  const classes = useStyles();
  return info.length > 0 ? (
    <Box>
      <Box className={classes.container}>
        <Typography className={classes.heading}>{mainHeading}</Typography>
        {info.map((infoEl, ind) => (
          <Box key={ind} className={classes.subContainer}>
            <Typography className={classes.subheading}>
              {infoEl.subHeading}
            </Typography>
            <MaterialTable
              title={infoEl.tableHeader}
              icons={{
                Filter: React.forwardRef((props, ref) => (
                  <SearchIcon ref={ref} />
                )),
                Search: React.forwardRef((props, ref) => (
                  <SearchIcon ref={ref} />
                )),
                ResetSearch: React.forwardRef((props, ref) => (
                  <RotateLeftIcon ref={ref} />
                )),
                SortArrow: ArrowUpward,
                DetailPanel: ChevronRight,
              }}
              columns={[
                {
                  field: "Field",
                  title: "Field",
                  cellStyle: {
                    textAlign: "center",
                  },
                },
                {
                  field: "Description",
                  title: "Description",
                  cellStyle: {
                    textAlign: "center",
                  },
                },
                {
                  field: "Observation",
                  title: "Observation",
                  cellStyle: {
                    textAlign: "center",
                    whiteSpace: "nowrap",
                  },
                },
              ]}
              data={infoEl.data}
              options={{
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
          </Box>
        ))}
      </Box>
      <Divider component="hr" className={classes.divider} />
    </Box>
  ) : (
    ""
  );
};

export default Tables;
