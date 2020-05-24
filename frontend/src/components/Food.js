import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '1%',
    marginBottom: '1%',
    "&:hover": {
        transform: "scale(1.01)",
        boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)"
      }
    },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    textTransform: "none"
}
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Order ID
        </Typography>
        <Typography variant="h5" component="h2">
          Order
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
