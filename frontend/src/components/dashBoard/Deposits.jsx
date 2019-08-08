import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';
import {Component} from 'react'



class Status extends Component{
  componentDidMount(){
    axios.get('/api/accounts/tasksComplete').then(
      (res) => {this.setState({tasksComplete: res.data.tasksComplete})}
    )
  }
  state = {
    tasksComplete: null
  }

  // const classes = useStyles();
  render() {
    
  return (
    <React.Fragment>
      <Title>Status</Title>
      <Typography component="p" variant="h4">
        Level 3
      </Typography>
      <Typography color="textSecondary" >
        progress {this.state.tasksComplete}
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