import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import history from "../../../../history/history";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import Tooltip from "@material-ui/core/Tooltip";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

export default function NestedList(props) {
  const handleChange = (page) => {
    history.push({
      pathname: page,
    });
  };

  // const handleAccountClick = () => {
  //   history.push({
  //     pathname: `/account`,
  //   });
  // };
  // const handleManagementClick = () => {
  //   history.push({
  //     pathname: `/management`,
  //   });
  // };
  // const handleStatisticsClick = () => {
  //   history.push({
  //     pathname: `/statistics`,
  //   });
  // };

  // const handlePurchaseClick = () => {
  //   history.push({
  //     pathname: `/purchase`,
  //   });
  // };

  // const handleMarketingClick = () => {
  //   history.push({
  //     pathname: `/marketing`,
  //   });
  // };
  // const handleGraphsClick = () => {
  //   history.push({
  //     pathname: `/graphs`,
  //   });
  // };

  // const handleConnectionsClick = () => {
  //   history.push({
  //     pathname: `/connections`,
  //   });
  // };
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
        onClick={() => handleChange("account")}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Account" />
      </ListItem>
      {localStorage.getItem("isBusiness") === "true" ? (
        <ListItem
          style={
            props.opened === "management" ? { backgroundColor: "#95C1DC" } : {}
          }
          button
          onClick={() => handleChange("management")}
        >
          <ListItemIcon>
            <GroupAddIcon />
          </ListItemIcon>
          <ListItemText primary="Management" />
        </ListItem>
      ) : (
        <Tooltip
          title="Management is available only for Business Accounts"
          arrow
        >
          <ListItem
            style={
              props.opened === "management"
                ? { backgroundColor: "#95C1DC" }
                : {}
            }
            disabled
          >
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText primary="Management" />
          </ListItem>
        </Tooltip>
      )}
      <ListItem
        button
        style={
          props.opened === "statistics" ? { backgroundColor: "#95C1DC" } : {}
        }
        onClick={() => handleChange("statistics")}
      >
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
      </ListItem>

      <ListItem
        button
        style={props.opened === "graphs" ? { backgroundColor: "#95C1DC" } : {}}
        onClick={() => handleChange("graphs")}
      >
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Graphs" />
      </ListItem>

      <ListItem
        button
        style={
          props.opened === "connections" ? { backgroundColor: "#95C1DC" } : {}
        }
        onClick={() => handleChange("connections")}
      >
        <ListItemIcon>
          <ContactMailIcon />
        </ListItemIcon>
        <ListItemText primary="Connections" />
      </ListItem>
      {localStorage.getItem("IsChildToBusinessAccount") === "false" ? (
        <ListItem
          button
          style={
            props.opened === "purchase" ? { backgroundColor: "#95C1DC" } : {}
          }
          onClick={() => handleChange("purchase")}
        >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Purchase" />
        </ListItem>
      ) : (
        <Tooltip
          title="Purchase is available only for The Manager of the Accounts"
          arrow
        >
          <ListItem
            button
            style={
              props.opened === "purchase" ? { backgroundColor: "#95C1DC" } : {}
            }
            disabled
          >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Purchase" />
          </ListItem>
        </Tooltip>
      )}

      <ListItem
        button
        style={
          props.opened === "marketing" ? { backgroundColor: "#95C1DC" } : {}
        }
        onClick={() => handleChange("marketing")}
      >
        <ListItemIcon>
          <PictureAsPdfIcon />
        </ListItemIcon>
        <ListItemText primary="Marketing" />
      </ListItem>
    </List>
  );
}
