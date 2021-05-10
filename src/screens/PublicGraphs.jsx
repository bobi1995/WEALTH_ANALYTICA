import React, { useState, useEffect } from "react";
import { Bar, Line, Pie, Polar, Doughnut } from "react-chartjs-2";
import {
  Box,
  makeStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import Legend from "./data.screens/Graphs/Legend";
import GraphMap from "./data.screens/Graphs/PublicGraphMap";
import IndustryInput from "../components/IndustryInput";
import dataReducer from "./data.screens/DashboardUltimate/Pages/StatisticPage/charts";
import { lastYear } from "../global/Years";
import apiAddress from "../global/endpointAddress";
import axios from "axios";
import AlertBox from "../components/alertBox";
import BackToSite from "../components/BackToSite";
import SmallTable from "./data.screens/Graphs/SmallTable";
import Loader from "../components/plainCicularLoader";

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
    width: "50%",
  },
  industryContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "50%",
  },
  industryField: {
    margin: "0 auto",
    width: "70%",
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

  chartStyleBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid lightgray",
    padding: "0%",
  },
  cardContainer: {
    margin: "5% auto",
    width: "90%",
  },
});

const PublicGraphs = () => {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState("");
  const [industry, setIndustry] = useState("");
  const [data, setData] = useState();
  const [alertMessage, setAlertMessage] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (selectedState && industry) {
      setLoader(true);
      axios
        .get(
          `${apiAddress}/api/Public/GetCompanyGraphs?businessCategory=${industry}&minYear=2017&maxYear=${lastYear}&state=${selectedState}`,
          {
            headers: {
              Authorization: "Basic " + localStorage.getItem("Token"),
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => {
          setData(res.data);
          setLoader(false);
        })
        .catch((error) => {
          setAlertMessage(
            "For some reason we could not find the desired results."
          );
        });
    }
  }, [selectedState, industry]);

  return (
    <Box className={classes.container}>
      <section className="clientDash-img">
        <h1 className="onePager-header1" style={{ fontSize: 45, padding: 0 }}>
          United States Pension Plan
        </h1>
      </section>
      <Box>
        <Typography
          className={classes.typographyStyle}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Analyze your States Pension Plan Analytics Trends by Industry.
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <Box className={classes.mapContainer}>
          <Legend />
          <GraphMap setState={setSelectedState} />
        </Box>
        <Box className={classes.industryContainer}>
          <Box>
            <IndustryInput
              className={classes.industryField}
              setIndustry={setIndustry}
            />
          </Box>
          <Box>
            <Card className={classes.cardContainer} elevation={21}>
              {loader ? (
                <Loader />
              ) : data ? (
                <CardContent>
                  {data && (
                    <Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "1%",
                        }}
                      >
                        <SmallTable
                          data={data.RateOfInvestmentReturn}
                          title="Rate Of Investment Return"
                          type="percent"
                        />
                        <SmallTable
                          data={data.PercentageOfActivePlanParticipants}
                          title="Percentage Of Active Plan Participants"
                          type="percent"
                        />
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "1%",
                        }}
                      >
                        <SmallTable
                          data={data.TotalPlanExpenses}
                          title="Average Plan Expenses"
                          type="dollar"
                        />
                        <SmallTable
                          data={data.AverageParticipantBalance}
                          title="Average Participant Balance"
                          type="dollar"
                        />
                      </Box>

                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "1%",
                        }}
                      >
                        <SmallTable
                          data={data.PercentOfEmployeeContributions}
                          title="Percent Of Employee Contributions"
                          type="percent"
                        />
                        <SmallTable
                          data={data.PercentageOfEmployerContributions}
                          title="Percentage Of Employer Contributions"
                          type="percent"
                        />
                      </Box>
                    </Box>
                  )}
                </CardContent>
              ) : null}
            </Card>
          </Box>
        </Box>
      </Box>
      {loader ? (
        <Loader />
      ) : data ? (
        data && (
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
                    data.PercentageOfActivePlanParticipants.map(
                      (el) => el.Value
                    )
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
        )
      ) : null}
      {alertMessage ? (
        <AlertBox
          text={alertMessage}
          display={setAlertMessage}
          success={false}
        />
      ) : (
        ""
      )}
      <BackToSite />
    </Box>
  );
};

export default PublicGraphs;
