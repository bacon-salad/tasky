import React from 'react';
import {Component} from 'react';
import '../../App.css'
import axios from 'axios'


class App extends Component{

    state = {
        name: null,
        password: null,
        email: null
    }


titsandass = (name, password, email) => {
axios.post('http://localhost:8080/api/accounts/signUp', 
{
name: name,
password: password,
email: email
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
        <input id='emailinp' type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
        <button onClick={() => this.titsandass(this.state.name, this.state.password, this.state.email)}>push</button>
    </div>
  );
}}

export default App;