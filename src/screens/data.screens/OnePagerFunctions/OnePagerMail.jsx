import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Contacts from "./Mail/Contacts";
import EmailSection from "./Mail/EmailSection";

const OnePagerMail = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Box className={classes.container}>
      <Contacts
        contacts={props.contact}
        administrator={{
          admin: props.administrator,
          site: props.site,
          phone: props.phone,
        }}
      />
      <EmailSection companyID={props.data} />
    </Box>
  );
};

const useStyles = makeStyles({
  container: {
    width: "94%",
    margin: "3% auto",
  },
});

export default OnePagerMail;
