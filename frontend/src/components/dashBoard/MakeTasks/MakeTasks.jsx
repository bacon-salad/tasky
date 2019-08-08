import React from 'react';
import Taskees from '../axioscalls/getTaskees'





class MakeTasks extends React.Component{
    constructor(props) {
        super(props);
    
    this.state = {
        data: [],
        head: null,
        body: null,
        userId: null,
        yourId: null,
        Days: null

    }}
    
render(){

return(
    <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column' , justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div><h4>Head</h4>
        <input style={{width: '250px'}}onChange={(e) => this.setState({ head: e.target.value })} type="text" placeholder="Head" /></div>
        <div><h4>body</h4>
        <textarea style={{width:'400px'}} onChange={(e) => this.setState({ body: e.target.value })} type="text" placeholder="body"/></div>
        <div><h4>Days to complete</h4>
        <input style={{width: '60px'}}onChange={(e) => this.setState({ Days: e.target.value })} type="number" placeholder="Days"/></div>
        </div>
        <Taskees {...this.state}/>
    </div>
)}}

export default MakeTasks