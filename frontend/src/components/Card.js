import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "1%",
    marginBottom: "1%",
    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    },
    minHeight: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Order #{props.orderId}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.children}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          href={`${window.location.origin}/accept-request/${props.orderId}`}
        >
          Accept Request
        </Button>
      </CardActions>
    </Card>
  );
}
