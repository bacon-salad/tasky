import React from 'react';
import {Component} from 'react';
import '../../App.css'
import axios from 'axios'

class App extends Component{

    state = {
        name: null,
        password: null
    }


titsandass = (name, password) => {
axios.post('http://localhost:8080/api/accounts/pull', 
{
name: name,
password: password
}).then(()=>console.log('hello'))}
  render (){
    const form = {
      width: '50%',
      backgroundColor: 'black',
      color: 'white',
      justifySelf: 'center'
    }
  return (
    <div style={form}>
        <input id='nameinp' type="text" placeholder="name" onChange={(e) => this.setState({ name: e.target.value })}></input>
        <input id='passinp' type="text" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
        <button onClick={() => this.titsandass(this.state.name, this.state.password)}>push</button>
    </div>
  );
}}

export default App;