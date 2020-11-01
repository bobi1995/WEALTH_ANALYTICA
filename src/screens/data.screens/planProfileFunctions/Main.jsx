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
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "3%",
    width: 200,
    height: "100%",
  },
  switchBase: {
    color: green[300],
    "&$checked": {
      color: green[500],
    },
    "&$checked + $track": {
      backgroundColor: green[500],
    },
  },
  checked: {},
  track: {},
}));
const Main = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([
    "all",
    "business-include",
    "financial-include",
    "participants-include",
    "statistics-include",
    "heatmap-include",
    "health-include",
    "service-include",
    "accountant-include",
    "pension-include",
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    let newChecked = [...checked];
    if (value === "all") {
      if (currentIndex === -1) {
        newChecked = [];
        newChecked.push(
          "all",
          "business-include",
          "financial-include",
          "participants-include",
          "statistics-include",
          "heatmap-include",
          "health-include",
          "service-include",
          "accountant-include",
          "pension-include"
        );
      } else {
        //newChecked.shift();
        newChecked = [];
      }
      setChecked(newChecked);
      props.showing(newChecked);
    } else {
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
        const allItem = newChecked.indexOf("all");
        if (allItem > -1) {
          newChecked.splice(allItem, 1);
        }
      }
      setChecked(newChecked);
      props.showing(newChecked);
    }
  };
  return (
    <Grid>
      <Paper className={classes.paper}>
        <List
          subheader={<ListSubheader>Sections</ListSubheader>}
          className={classes.root}
        >
          <ListItem>
            <ListItemText id="switch-list-label-all" primary="All" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("all")}
                checked={checked.indexOf("all") !== -1}
                inputProps={{ "aria-labelledby": "switch-list-label-all" }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-business"
              primary="Business Info"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("business-include")}
                checked={checked.indexOf("business-include") !== -1}
                inputProps={{ "aria-labelledby": "switch-list-label-business" }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
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
                onChange={handleToggle("financial-include")}
                checked={checked.indexOf("financial-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-financial",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-participants"
              primary="Participants"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("participants-include")}
                checked={checked.indexOf("participants-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-participants",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-statistics"
              primary="Statistics"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("statistics-include")}
                checked={checked.indexOf("statistics-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-statistics",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-heatmap" primary="Alerts" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("heatmap-include")}
                checked={checked.indexOf("heatmap-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-heatmap",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-health" primary="Healthcare" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("health-include")}
                checked={checked.indexOf("health-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-health",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-service"
              primary="Service Prov."
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("service-include")}
                checked={checked.indexOf("service-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-service",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText
              id="switch-list-label-accountant"
              primary="Accountants"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("accountant-include")}
                checked={checked.indexOf("accountant-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-accountant",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText id="switch-list-label-pension" primary="Plans" />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                onChange={handleToggle("pension-include")}
                checked={checked.indexOf("pension-include") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-pension",
                }}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  thumb: classes.thumb,
                  track: classes.track,
                  checked: classes.checked,
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
