import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import { log } from 'util';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class Tasks extends Component{

    state = {
        data: []
    }
    componentDidMount(){
        axios.post('/api/users/getUsers')
        .then(
            (res) => this.setState({data: res.data}))
    }
render(){
    console.log('data' + this.state.data)
    var dat = this.state && this.state.data
return(
    
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Exercise</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Teacher Id</TableCell>
            <TableCell>Completed?</TableCell>
            <TableCell align="right">Days Left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dat.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.head}</TableCell>
              <TableCell>{row.body}</TableCell>
              <TableCell>{row.TaskMasterId}</TableCell>
              <TableCell>{row.completed}</TableCell>
              <TableCell align="right">{row.timeleft}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
)}}

export default Tasks