import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    backgroundColor: '#313131',
    color: 'white',
    minHeight: 150,
    position: 'absolute',
    top: '454px',
    left: '48px',
    width: '925px',
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
  Indicators: {
      marginRight: '10px',
      float: 'left'
  },
  reference: {
      marginTop: '15px',
      float: 'left',
      paddingRight: '10px'
  }
});

export default function SimpleCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.bottomborder} variant="h6" component="h3">
         Contact Info
        </Typography>
        
        <p className={classes.Indicators}>Phone:</p><a className={classes.reference} id='links' href="tel:949-394-8138">949-394-8138</a>
        <p className={classes.Indicators}>Email:</p><a className={classes.reference} id='links' href="mailto:dvowen@cox.net">dvowen@cox.net</a>
        <p>City: Anaheim CA</p>

      </CardContent>
    </Card>
  );
}