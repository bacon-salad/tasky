import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#313131',
    color: 'white'
  },
  bottomborder: {
    borderBottom: '1px solid white',
  },
  dev: {
    fontSize: 25,
    color: 'lightgray',
    marginTop: 12,
  },
  body: {
    marginTop: 12,
    color: 'lightgray'
  },
  stackTitle: {
    fontSize: 20,
    color: 'white'
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder}variant="h5" component="h2">
         Tasks
        </Typography>
        <Typography className={classes.dev} color="textSecondary" gutterBottom>
          <ul>
            <li>task1</li>
            <li>task1</li>
            <li>task1</li>
            <li>task1</li>
            <li>task1</li>
            <li>task1</li>
            <li>task1</li>

          </ul>
        </Typography>

      </CardContent>
    </Card>
  );
}