import React, { useState } from "react";
import Datanavbar from "./DataNavbar";
import Magellan from "./Magellan";
import Table from "./filtersFunctions/FilterFields/Table";
import RightFilter from "./filtersFunctions/FilterFields/RightFilter";
import LeftSide from "./filtersFunctions/FilterFields/LeftSide";
import SummaryTable from "./filtersFunctions/FilterFields/SummaryTable";
import { Animated } from "react-animated-css";
import { Button, makeStyles, Box } from "@material-ui/core";
import { primaryBlue } from "../../global/Colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import SaveFilterDialog from "./filtersFunctions/FilterFields/RightFilter/SaveFilterDialog";
import CreateIcon from "@material-ui/icons/Create";
const useStyle = makeStyles({
  buttonStyle: {
    backgroundColor: primaryBlue,
    color: "white",
    "&:hover": {
      color: primaryBlue,
    },
    whiteSpace: "nowrap",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
});

const Filter2 = () => {
  const classes = useStyle();
  const [results, setResults] = useState();
  const [loader, setLoader] = useState(false);
  const [visibleFilter, setVisibleFilter] = useState(true);
  const [visibleGraph, setVisibleGraph] = useState(false);
  const [url, setUrl] = useState("");

  const setData = (newArr) => {
    setResults((prev) => {
      let newResults = { ...prev, Companies: newArr.slice(0) };
      return newResults;
    });
  };
  return (
    <div>
      <Datanavbar />
      <section className="clientDash-img">
        <h1 className="clientDash-header1">Filters</h1>
      </section>
      <Magellan activeStep={1} active={"filters"} />
      <div>
        <div
          style={{
            width: "100%",
          }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            {results && !visibleFilter ? (
              <Animated
                animationIn="lightSpeedIn"
                animationOut="zoomOutDown"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={visibleGraph}
              >
                <Box className={classes.buttonContainer}>
                  <Button
                    variant="outlined"
                    className={classes.buttonStyle}
                    startIcon={<CreateIcon />}
                    onClick={() => {
                      setVisibleGraph(false);
                      setTimeout(() => setVisibleFilter(true), 1100);
                    }}
                  >
                    New Filter
                  </Button>
                  <SaveFilterDialog url={url} />
                </Box>
                <LeftSide
                  NetAssetBegin={results.NetAssetBeginOfYear}
                  NetAssetEnd={results.NetAssetEndOfYear}
                  Distribution={results.Distributions}
                  CorrectivrDistribution={results.CorrectivrDistribution}
                  ServiceProviderExpenses={results.ServiceProviderExpenses}
                  OtherExpenses={results.OtherExpenses}
                  TotalParticipants={results.TotalParticipants}
                  RetiredParticipants={results.RetiredParticipants}
                  TotalParticipantsBal={results.TotalParticipantsBal}
                  ParticipantContribution={results.ParticipantContribution}
                  EmployerContribution={results.EmployerContribution}
                />
              </Animated>
            ) : (
              <Animated
                animationIn="lightSpeedIn"
                animationOut="zoomOutDown"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={visibleFilter}
              >
                <div style={{ width: "100%" }}>
                  <RightFilter
                    setUrl={setUrl}
                    setLoader={(loader) => {
                      setLoader(loader);
                    }}
                    loader={loader}
                    getResults={(res) => {
                      setVisibleFilter(false);
                      setTimeout(() => setVisibleGraph(true), 1100);
                      setResults(res);
                    }}
                    results={results}
                  />
                </div>
              </Animated>
            )}
          </div>
        </div>
        {loader ? (
          <div style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress
              size={140}
              style={{ textAlign: "center", marginTop: "3%" }}
            />
            <p style={{ textAlign: "center", marginTop: "3%" }}>
              Loading....Please wait
            </p>
          </div>
        ) : results ? (
          <Box>
            <SummaryTable data={results ? results.FilterProfile : []} />
            <Table data={results ? results.Companies : []} setData={setData} />
          </Box>
        ) : null}
      </div>
    </div>
  );
};

export default Filter2;
