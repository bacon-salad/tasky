import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import Button from '@material-ui/core/Button'

class TaskHistory extends Component{

    state = {
        data: [],
        myid: null,
        TID: []
    }
    componentDidMount(){
        axios.get('/api/accounts/getNonAssigned')
        .then((res) => this.setState({data: res.data}))
        axios.get('/api/accounts/getUserInfo')
        .then((res) => this.setState({ myid: res.data.id }))
        axios.get('/api/relationships/getAssigned')
        .then((res) => this.setState({TID: res.data}))
        console.log(this.state.TID)
    }
    addTaskee(UID, myId){
        axios.post('/api/relationships/assignUser',
        {
            uid: UID,
            myid: myId
        }
        ). then(
        axios.post('/api/relationships/updateUser', 
        {
            uid: UID
        }))
    }
render(){
    console.log('data' + this.state.data)
    var dat = this.state && this.state.data
return(
    <div>
        <Title>users</Title>
    <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>UserName</TableCell>
            <TableCell align="right">Add?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dat.map(row => (
              
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName} {row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.userName}</TableCell>
              <TableCell align="right"><Button onClick={()=>this.addTaskee(row.id, this.state.myid)}>Add </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
)}}

export default TaskHistory