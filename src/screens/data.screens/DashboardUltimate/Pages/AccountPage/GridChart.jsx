import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography, Avatar } from "@material-ui/core";
import numeral from "numeral";
import { primaryBlue } from "../../../../../global/Colors";
const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    alignItems: "center",
    display: "flex",
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    backgroundColor: primaryBlue,
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  differenceIcon: {
    color: primaryBlue,
  },
  differenceValue: {
    color: primaryBlue,
    marginRight: theme.spacing(1),
  },
}));

const PremiumSubs = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {props.name}
            </Typography>
            <Typography
              variant="h3"
              style={props.colornegative ? { color: "red" } : {}}
            >
              {props.data}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <props.icon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <props.staticon className={classes.differenceIcon} />
          {props.smallstat ? (
            <Typography className={classes.differenceValue} variant="body2">
              {numeral(props.smallstat).format("0,0")}%
            </Typography>
          ) : (
            ""
          )}
          <Typography className={classes.caption} variant="caption">
            {props.smalltext}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

PremiumSubs.propTypes = {
  className: PropTypes.string,
};

export default PremiumSubs;
