import React, { useState } from "react";
import { makeStyles, Box, Tooltip, Link } from "@material-ui/core";
import Contacts from "./Mail/Contacts";
import EmailSection from "./Mail/EmailSection";
import commonExtract from "../commonFunctions/commonExtracts";
import { Link as ScrollLink, Element } from "react-scroll";
import { orangeColor } from "../../../global/Colors";
const OnePagerMail = (props) => {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  let available = false;

  commonExtract.extractStates().forEach((el) => {
    if (props.state === el.State && el.Type === 2) {
      available = true;
    }
  });
  return (
    <Box className={classes.container}>
      <Box
        className={classes.buttonContainer}
        style={display ? { display: "none" } : {}}
      >
        <ScrollLink
          to="contacts-middle"
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setDisplay(true)}
          className={classes.contactBtn}
          style={{ color: "white", cursor: "pointer" }}
        >
          PLAN CONTACTS
        </ScrollLink>
        <Tooltip
          title={
            available
              ? "Open Plan Profile"
              : "Plan available in Premium Version"
          }
          className={classes.planBtn}
        >
          <Box>
            <Link
              disabled={available ? false : true}
              href={`/planprofile/${props.data}`}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              PLAN ANALYTICS
            </Link>
          </Box>
        </Tooltip>
      </Box>
      <Element id="contacts-middle" />

      <Box style={display ? {} : { display: "none" }}>
        <Contacts
          contacts={props.contact}
          administrator={{
            admin: props.administrator,
            site: props.site,
            phone: props.phone,
          }}
        />
        <EmailSection companyID={props.data} setDisplay={setDisplay} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "94%",
    margin: "3% auto",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  contactBtn: {
    backgroundColor: "#008000",
    "&:hover": {
      backgroundColor: "#A8DD8A",
    },
    marginRight: "1%",
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    paddingTop: "0.25%",
  },
  planBtn: {
    backgroundColor: "#c46c00",
    "&:hover": {
      backgroundColor: orangeColor,
    },
    color: "white",
    fontSize: 18,
    borderRadius: 5,
    textAlign: "center",
    paddingLeft: "0.5%",
    paddingRight: "0.5%",
    paddingTop: "0.25%",
    marginLeft: "1%",
  },
});

export default OnePagerMail;
