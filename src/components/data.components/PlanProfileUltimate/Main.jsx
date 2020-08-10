import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "3%",
    width: 200,
    height: "100%",
  },
}));
const Main = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["plan-businessInfo-2"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    console.log(document.getElementById("plan-businessInfo-2"));
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Grid>
      <Paper className={classes.paper}>
        <List
          subheader={<ListSubheader>Sections</ListSubheader>}
          className={classes.root}
        >
          <ListItem>
            <ListItemText
              id="switch-list-label-business"
              primary="Business Info"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("plan-businessInfo-2")}
                checked={checked.indexOf("plan-businessInfo-2") !== -1}
                inputProps={{ "aria-labelledby": "switch-list-label-business" }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-financial"
              primary="Financial"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("financial")}
                checked={checked.indexOf("financial") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-financial",
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};

export default Main;
