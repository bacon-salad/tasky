import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import Tasks from '../axioscalls/Tasks'





class MakeTasks extends Component{

    state = {
        data: [],
        head: null,
        body: null,
        userId: null,
        yourId: null,
        Days: null

    }
    MakeTask = (head, body, taskeeId, TaskMasterId, Days) => {
         axios.post('/api/tasks/makeTask', 
       {
       head: head,
       body: body,
       toid: taskeeId,
       myId: TaskMasterId,
       time: Days
       }).then(
         ()=>console.log('hello'))
         }
render(){

return(
    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column' , justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div><h4>Head</h4>
        <input onChange={(e) => this.setState({ head: e.target.value })} type="text" placeholder="Head" /></div>
        <div><h4>body</h4>
        <input onChange={(e) => this.setState({ body: e.target.value })} type="text" placeholder="body"/></div>
        <div><h4>userid</h4>
        <input onChange={(e) => this.setState({ userId: e.target.value })} type="number" placeholder="User Id"/></div>
        <div><h4>yourid</h4>
        <input onChange={(e) => this.setState({ yourId: e.target.value })} type="number" placeholder="Your Id"/></div>
        <div><h4>Days to complete</h4>
        <input onChange={(e) => this.setState({ Days: e.target.value })} type="number" placeholder="Days"/></div>
        </div>
        <button onClick={() => this.MakeTask(this.state.head, this.state.body, this.state.userId, this.state.yourId, this.state.Days)} style={{backgroundColor:'gray', color:'white', height:'40px', marginTop: '20px'}}>Submit</button>
        <Tasks/>
    </div>
)}}

export default MakeTasks