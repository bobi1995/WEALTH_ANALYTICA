import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
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

const items = [
  {
    value: 1,
    name: "Define Benefit Pension",
  },
  {
    value: 2,
    name: "Defined Contribution Pension",
  },
  {
    value: 3,
    name: "Welfare",
  },
];

export default function ControlledOpenSelect(props) {
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
    props.setBenefit(newChecked);
  };

  return (
    <List className={classes.root}>
      <Typography className={classes.fieldLabel}>Benefit Type</Typography>
      <Box style={{ marginTop: "3%" }}>
        {items.map((item) => {
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
            </ListItem>
          );
        })}
      </Box>
    </List>
  );
}
