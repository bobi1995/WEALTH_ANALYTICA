import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import history from "../../../../history/history";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function NestedList(props) {
  const handleAccountClick = () => {
    history.push({
      pathname: `/account`,
    });
  };
  const handleStatisticsClick = () => {
    history.push({
      pathname: `/statistics`,
    });
  };

  const handlePurchaseClick = () => {
    history.push({
      pathname: `/purchase`,
    });
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
    >
      <ListItem
        style={props.opened === "account" ? { backgroundColor: "#95C1DC" } : {}}
        button
        onClick={handleAccountClick}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      <ListItem
        button
        style={
          props.opened === "statistics" ? { backgroundColor: "#95C1DC" } : {}
        }
        button
        onClick={handleStatisticsClick}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Connections" />
      </ListItem>
      <ListItem
        button
        style={
          props.opened === "purchase" ? { backgroundColor: "#95C1DC" } : {}
        }
        button
        onClick={handlePurchaseClick}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase" />
      </ListItem>
    </List>
  );
}
