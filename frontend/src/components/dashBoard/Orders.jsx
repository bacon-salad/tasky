import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Tasks from './axioscalls/Tasks'
import {Route} from 'react-router-dom'
import allUsers from './axioscalls/allUsers'

// Generate Order Data


const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Route exact path='/home' component={Tasks}/>
      <Route exact path='/home/MakeTask' component={allUsers}/>
      <div classbody={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          see more tasks
        </Link>
      </div>
    </React.Fragment>
  );
}