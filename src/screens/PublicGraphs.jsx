import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Polar, Doughnut } from "react-chartjs-2";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Legend from "./data.screens/Graphs/Legend";
import GraphMap from "./data.screens/Graphs/PublicGraphMap";
import IndustryInput from "../components/IndustryInput";
import dataReducer from "./data.screens/DashboardUltimate/Pages/StatisticPage/charts";
import { lastYear } from "../global/Years";
import apiAddress from "../global/endpointAddress";
import axios from "axios";
import AlertBox from "../components/alertBox";
import BackToSite from "../components/BackToSite";

const useStyles = makeStyles({
  typographyStyle: {
    textAlign: "center",
    fontSize: 22,
    fontStyle: "italic",
    fontFamily: "Baskervville",
    marginTop: "1%",
  },
  mapContainer: {
    textAlign: "center",
    marginTop: "1%",
  },
  industryContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "100%",
  },
  industryField: {
    margin: "0 auto",
    width: "50%",
  },
  graphsBox: {
    display: "flex",
    justifyContent: "space-around",
    margin: "3%",
  },
  chartStyle: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
  },
});

const PublicGraphs = () => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [industry, setIndustry] = useState("");
  const [data, setData] = useState();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (selectedState && industry) {
      axios
        .get(
          `${apiAddress}/api/Public/GetCompanyGraphs?businessCategory=${industry}&minYear=2017&maxYear=${lastYear}&state=${selectedState}`,
          {
            headers: {
              Authorization: "Basic " + sessionStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          setAlertMessage(
            "For some reason we could not find the desired results."
          );
          window.location.reload();
        });
    }
  }, [selectedState, industry]);

  return (
    <Box className={classes.container}>
      <section className="clientDash-img">
        <h1 className="onePager-header1" style={{ fontSize: 45, padding: 0 }}>
          Overview Graphs
        </h1>
      </section>
      <Box>
        <Typography
          className={classes.typographyStyle}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Wealth Analytica gives you opportunity to make overview of the
          Industries per States for the last years.
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Box className={classes.industryContainer}>
          <IndustryInput
            className={classes.industryField}
            setIndustry={setIndustry}
          />
        </Box>

        <Box className={classes.mapContainer}>
          <Legend />

          <GraphMap setState={setSelectedState} />
        </Box>
      </Box>
      {data && (
        <Box>
          <Box className={classes.graphsBox}>
            <Box className={classes.chartStyle}>
              <Bar
                data={{
                  labels: data.RateOfInvestmentReturn.map((el) => el.Year),
                  datasets: [
                    {
                      label: "Rate Of Investment Return",
                      backgroundColor: "rgba(54,162,235,0.2)",
                      borderColor: "rgba(54,162,235,1)",
                      borderWidth: 1,
                      hoverBackgroundColor: "rgba(54,162,235,0.4)",
                      hoverBorderColor: "rgba(54,162,235,1)",
                      data: dataReducer.arrayReducer(
                        data.RateOfInvestmentReturn.map((el) => el.Value)
                      ),
                    },
                  ],
                }}
                options={dataReducer.optionReturn(
                  data.RateOfInvestmentReturn.map((el) => el.Value)
                )}
              />
            </Box>

            <Box className={classes.chartStyle}>
              <Line
                data={{
                  labels: data.PercentageOfActivePlanParticipants.map(
                    (el) => el.Year
                  ),
                  datasets: [
                    {
                      label: "Percentage Of Active Plan Participants",
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
                        data.PercentageOfActivePlanParticipants.map(
                          (el) => el.Value
                        )
                      ),
                    },
                  ],
                }}
                options={dataReducer.optionReturn(
                  data.PercentageOfActivePlanParticipants.map((el) => el.Value)
                )}
              />
            </Box>
          </Box>
          {/* *********************************SECOND ROW OF GRAPHS***************************************** */}
          <Box className={classes.graphsBox}>
            <Box className={classes.chartStyle}>
              <small
                className="form-text text-muted"
                style={{ textAlign: "center", fontSize: "17px" }}
              >
                Total Plan Expenses
              </small>
              <Pie
                data={{
                  labels: data.TotalPlanExpenses.map((el) => el.Year),
                  datasets: [
                    {
                      data: dataReducer.arrayReducer(
                        data.TotalPlanExpenses.map((el) => el.Value)
                      ),
                      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    },
                  ],
                }}
              />
            </Box>

            <Box className={classes.chartStyle}>
              <small
                className="form-text text-muted"
                style={{ textAlign: "center", fontSize: "17px" }}
              >
                Average Participant Balance
              </small>
              <Polar
                data={{
                  datasets: [
                    {
                      data: dataReducer.arrayReducer(
                        data.AverageParticipantBalance.map((el) => el.Value)
                      ),
                      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    },
                  ],

                  labels: data.AverageParticipantBalance.map((el) => el.Year),
                }}
              />
            </Box>
          </Box>

          {/* *********************************THIRD ROW OF GRAPHS***************************************** */}
          <Box className={classes.graphsBox}>
            <Box className={classes.chartStyle}>
              <Line
                data={{
                  labels: data.PercentOfEmployeeContributions.map(
                    (el) => el.Year
                  ),
                  datasets: [
                    {
                      label: "Percent Of Employee Contributions",
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
                        data.PercentOfEmployeeContributions.map(
                          (el) => el.Value
                        )
                      ),
                    },
                  ],
                }}
                options={dataReducer.optionReturn(
                  data.PercentOfEmployeeContributions.map((el) => el.Value)
                )}
              />
            </Box>
            <Box className={classes.chartStyle}>
              <small
                className="form-text text-muted"
                style={{ textAlign: "center", fontSize: "17px" }}
              >
                Percentage Of Employer Contributions
              </small>
              <Doughnut
                data={{
                  labels: data.PercentageOfEmployerContributions.map(
                    (el) => el.Year
                  ),
                  datasets: [
                    {
                      data: dataReducer.arrayReducer(
                        data.PercentageOfEmployerContributions.map(
                          (el) => el.Value
                        )
                      ),
                      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    },
                  ],
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
      <BackToSite />
    </Box>
  );
};

export default PublicGraphs;
