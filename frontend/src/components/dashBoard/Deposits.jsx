import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';
import {Component} from 'react'



class Status extends Component{
  componentDidMount(){
    axios.get('/api/accounts/tasksComplete').then(
      (res) => {this.setState(
        {tasksComplete: res.data.tasksComplete}
        )
        }
    ).then(
      ()=>{
        if(this.state.tasksComplete > 9 && this.state.tasksComplete < 20) {
          this.setState({level: 2})}
          else if (this.state.tasksComplete > 19 && this.state.tasksComplete < 31) {
          this.setState({level: 3})}
        }
    )

  }


  state = {
    tasksComplete: null,
    level: 1
  }

  // const classes = useStyles();
  render() {
  return (
    <React.Fragment>
      <Title>Status</Title>
      <Typography component="p" variant="h4">
        Level {this.state.level}
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