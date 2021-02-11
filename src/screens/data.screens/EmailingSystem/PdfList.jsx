import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    border: "3px solid #388FCE",
    marginLeft: "3%",
    maxHeight: 300,
    maxWidth: 500,
    overflow: "auto",
    position: "relative",
  },
  fieldLabel: {
    transformOrigin: "0 0 ",
    position: "absolute",
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "3px",
    top: 0,
    left: 0,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#388FCE",
    width: "100%",
    textAlign: "center",
  },
}));

const pdfs = [
  { name: "One Pager Summary", value: 29 },
  { name: "Plan Design", value: 30 },
  { name: "ERISA Check List", value: 1 },
  { name: "ERISA 404c Check List", value: 2 },
  { name: "401k Checklist", value: 3 },
  { name: "Auditor Checklist", value: 6 },
  { name: "Auditor Report Checklist", value: 7 },
  { name: "Automatic Enrollment - CheckList", value: 15 },
  //{ name: "QDIA Types of Investments", value: 9 },
  { name: "QDIA Checklist", value: 8 },
  { name: "Why Have a QDIA Offering?", value: 23 },
  //{ name: "Disclosure Guidelines", value: 4 },
  //{ name: "Safe Harbor Explained", value: 5 },
  { name: "Target Date Fund Guidelines", value: 10 },
  //{ name: "Target Date Funds Education", value: 11 },
  { name: "Selecting an Annuity Provider", value: 12 },
  { name: "Company Stock Overview", value: 13 },
  { name: "Automatic Enrollment - Benefits", value: 14 },
  { name: "Cash Balance Explained", value: 16 },
  //{ name: "Contribution Matching", value: 17 },
  //{ name: "ESOP", value: 18 },
  { name: "Service Provider Disclosures", value: 19 },
  { name: "Plan Fee Descriptions", value: 20 },
  { name: "Evaluation of Plan Fees Guidelines", value: 21 },
  //{ name: "Monitoring Service Providers", value: 22 },
  { name: "Leakage : Explained", value: 25 },
  { name: "Ideas to Increase Plan Participation", value: 26 },
  { name: "Types of Bonus Incentive Plans", value: 28 },
];

const PdfList = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    props.setPdfs(newChecked);
  };

  return (
    <List className={classes.root}>
      <Typography className={classes.fieldLabel}>Attach PDF</Typography>
      <Box style={{ marginTop: "3%" }}>
        {pdfs.map((item) => {
          const labelId = `checkbox-list-label-${item.value}`;
          return (
            <ListItem
              key={item.value}
              role={undefined}
              dense
              button
              onClick={handleToggle(item.value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(item.value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </Box>
    </List>
  );
};

export default PdfList;
