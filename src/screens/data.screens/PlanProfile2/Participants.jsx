import React from "react";
import { Line, Bar } from "react-chartjs-2";
import DataExtract from "./PlanProfileDataExtract";
import dataReducer from "../../../components/dataReducer";
import common from "../commonFunctions/common";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { primaryBlue } from "../../../global/Colors";
import numeral from "numeral";
const useStyles = makeStyles({
  heading: {
    color: " #388fc2",
    fontFamily: "Slabo,serif",
  },
  headingContainer: {
    textAlign: "center",
    marginBottom: "3%",
  },
  chart: {
    width: "45%",
    margin: "0, auto",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
  },
  charteSection: {
    width: "100%",
    margin: "0, auto",
    display: "flex",
    justifyContent: "space-around",
  },
  table: {
    marginTop: "3%",
  },
  cellCenter: { textAlign: "center" },
  tableHeader: { color: primaryBlue, fontWeight: "bold", fontSize: 16 },
});

export default (props) => {
  const database = props.data;
  const classes = useStyles();

  const contributionData = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Contribution Employer",
        backgroundColor: "rgba(56,143,194,0.2)",
        borderColor: "rgba(56,143,194,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(56,143,194,0.4)",
        hoverBorderColor: "rgba(56,143,194,1)",
        data: dataReducer.arrayReducer(
          DataExtract.contributionEmployer(database)
        ),
      },
    ],
  };
  const data = {
    labels: DataExtract.realYearsPension(database),
    datasets: [
      {
        label: "Participants",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataReducer.arrayReducer(
          DataExtract.participantsPension(database)
        ),
      },
    ],
  };

  return (
    <Box>
      <Box className={classes.headingContainer}>
        <Typography component="h4" variant="h4" className={classes.heading}>
          Participants Information
        </Typography>
      </Box>
      <Box className={classes.charteSection}>
        <Box className={classes.chart}>
          <Line
            data={data}
            width={50}
            height={20}
            options={dataReducer.optionReturn(
              DataExtract.participantsPension(database)
            )}
          />
        </Box>
        <Box className={classes.chart}>
          <Bar
            data={contributionData}
            options={dataReducer.optionReturn(
              DataExtract.contributionEmployer(database)
            )}
          />
        </Box>
      </Box>

      <Box className={classes.table}>
        <table className="table table-striped table-bordered table-sm table-hover">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {database.map((element, index) => {
                if (element.IsCity === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      City in {element.Year}
                    </th>
                  );
                } else if (element.IsBusinessCode === true) {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      Industry for {element.Year}
                    </th>
                  );
                } else {
                  return (
                    <th style={{ textAlign: "center" }} key={index}>
                      {element.Year}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark">Participant Loans</th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ParticipantLoans)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Participants
                <span className="onepager-tooltip">
                  Total End of Year Active Participants
                </span>
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    {numeral(element.Participants).format("0,0")}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Contribution Employer
                <span className="onepager-tooltip">
                  Contributions Made to Plan by the Employer
                </span>
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ContributionEmployer)}
                  </td>
                );
              })}
            </tr>
            <tr style={{ textAlign: "center" }}>
              <th className="thead-dark onepager-pesion-description">
                Contribution Participant
                <span className="onepager-tooltip">
                  Contributions Made to Plan by the Participants
                </span>
              </th>
              {database.map((element, index) => {
                return (
                  <td style={{ textAlign: "center" }} key={index}>
                    ${common.reducer(element.ContributionParticipant)}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};
