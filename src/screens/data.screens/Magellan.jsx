import React, { useState } from "react";
import history from "../../history/history";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import BarChartIcon from "@material-ui/icons/BarChart";
import SearchIcon from "@material-ui/icons/Search";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import StepConnector from "@material-ui/core/StepConnector";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AlertBox from "../../components/alertBox";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, rgb(255,255,255) 0%,  rgb(165,220,134) 50%, rgb(0,128,0) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 136deg, rgb(255,255,255) 0%, rgb(165,220,134) 50%, rgb(0,128,0) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(255,255,255) 0%,  rgb(165,220,134) 50%, rgb(0,128,0) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },

  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(255,255,255) 0%, rgb(165,220,134) 50%, rgb(0,128,0) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <BarChartIcon />,
    2: <SearchIcon />,
    3: <StarHalfIcon />,
    4: <TrendingUpIcon />,
    5: <ImportContactsIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function CustomizedSteppers(props) {
  const classes = useStyles();
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div className={classes.root} data-html2canvas-ignore>
      <Stepper
        alternativeLabel
        activeStep={props.activeStep}
        connector={<ColorlibConnector />}
      >
        {/******DASHBOARD */}
        <Step
          disabled={false}
          onClick={() => {
            history.push({
              pathname: `/dashboard`,
            });
          }}
        >
          <StepLabel
            style={{ cursor: "pointer" }}
            StepIconComponent={ColorlibStepIcon}
            className="onepager-pesion-description"
          >
            <span className="onepager-tooltip">
              Our Advisor Centric Dashboard is available for Premium plans. It
              allows the Advisor to customize their Target Market and deliver
              transparency
            </span>
            Dashboard
          </StepLabel>
        </Step>
        {/******FILTERS */}
        <Step
          disabled={false}
          onClick={() => {
            history.push({
              pathname: `/filters`,
            });
          }}
        >
          <StepLabel
            style={{ cursor: "pointer" }}
            StepIconComponent={ColorlibStepIcon}
            className="onepager-pesion-description"
          >
            <span className="onepager-tooltip">
              With over 15 sorting and filtering options the Advisor Filters
              allows you to further refine the target market displayed on the
              Advisor Dashboard
            </span>
            Filters
          </StepLabel>
        </Step>
        {/******BOOKMARK */}
        <Step
          disabled={false}
          onClick={() => {
            history.push({
              pathname: `/bookmarks`,
            });
          }}
        >
          <StepLabel
            style={{ cursor: "pointer" }}
            StepIconComponent={ColorlibStepIcon}
            className="onepager-pesion-description"
          >
            <span className="onepager-tooltip">
              The Advisor Bookmark repository allows you to create and retain a
              high-quality prospect list. The Bookmark also lets you seamlessly
              create a white label lead generator sample analysis
            </span>
            Bookmark
          </StepLabel>
        </Step>
        {/******ONE PAGER */}
        <Step
          disabled={false}
          onClick={() =>
            setAlertMessage(
              "To open the One Pager you would need first to select the desired Plan/Company. It could happen from already Bookmarked result or directly from Filter table with results."
            )
          }
        >
          <StepLabel
            style={{ cursor: "pointer" }}
            StepIconComponent={ColorlibStepIcon}
            className="onepager-pesion-description"
          >
            <span className="onepager-tooltip">
              The Wealth Analytica proprietary white label communication
              hand-crafted feature was designed to cultivate interest and
              capture as well as deliver your value proposition. The feature
              allows the Advisor to craft a customized message and insightful
              Plan Analytics
            </span>
            OnePager
          </StepLabel>
        </Step>
        {/******PLAN PROFILE */}
        <Step
          disabled={false}
          onClick={() =>
            setAlertMessage(
              "To open the Plan Profile you would need first to select the desired Plan/Company. It could happen from already Bookmarked result or directly from Filter table with results. Also you can open the Plan Profile from already loaded One Pager."
            )
          }
        >
          <StepLabel
            style={{ cursor: "pointer" }}
            StepIconComponent={ColorlibStepIcon}
            className="onepager-pesion-description"
          >
            <span className="onepager-tooltip">
              The Wealth Analytica white label Client Ready Plan Profile
              contains vital financial information, Analytics, Plan
              Characteristics, Industry and Location comparison and Heatmap
            </span>
            PlanProfile
          </StepLabel>
        </Step>
      </Stepper>
      {alertMessage ? (
        <AlertBox text={alertMessage} display={setAlertMessage} />
      ) : (
        ""
      )}
    </div>
  );
}
