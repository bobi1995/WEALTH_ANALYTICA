import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { primaryBlue } from "../../../../../global/Colors";
import LearnMore from "./components/LearnMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: primaryBlue,
  },
}));

export default function RecipeReviewCard({ setView }) {
  const classes = useStyles();
  const [learnMore, setLearnMore] = useState("");
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Single State Subscription"
        subheader="Purchase single or multiple states"
      />
      <CardMedia
        className={classes.media}
        image={require("../../../../../styles/images/single.jpg")}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Subscribe for 1 or more states by your own choice. You can have access
          to the data of one or more states if you purchase it individually.
        </Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          size="small"
          color="primary"
          onClick={() => setView("SingleState")}
        >
          Subscribe
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            setLearnMore({
              title: "Single State Subscription",
              text:
                "Effortlessly access essential qualified plan information that leverages your Advisory expertise for the State of your choice.  You will access to the Plans, Analysis, Benchmarking & more.",
            })
          }
        >
          Learn More
        </Button>
        {learnMore ? (
          <LearnMore learnMore={learnMore} setLearnMore={setLearnMore} />
        ) : null}
      </CardActions>
    </Card>
  );
}
