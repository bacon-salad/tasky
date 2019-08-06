import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';
import {Component} from 'react'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

class Status extends Component{



  // const classes = useStyles();
  render() {
  return (
    <React.Fragment>
      <Title>Status</Title>
      <Typography component="p" variant="h4">
        Level 3
      </Typography>
      <Typography color="textSecondary" >
        progress [---------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
      </Typography>
      <div>
        <Link to="/home" color="primary" href="javascript:;">
          View Badges
        </Link>
      </div>
    </React.Fragment>
  );
}}
export default Status