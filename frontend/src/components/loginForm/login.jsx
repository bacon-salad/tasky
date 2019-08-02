import React from 'react';
import {Component} from 'react';
import '../../App.css'
import axios from 'axios'

class App extends Component{

    state = {
        password: null,
        email: null
    }


titsandass = (password, email) => {
axios.post('http://localhost:8080/api/accounts/login', 
{
password: password,
email: email
}).then(()=>console.log('hello'))}
  render (){
    const style = {
      form: {
      width: '50vw',
      height: '50vh',
      backgroundColor: 'black',
      color: 'white',
      justifySelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      paddingTop: '200px'
    }

    }
  return (
    <div style={style.container}>
    <div style={style.form}>
        <input id='passinp' type="text" placeholder="password" onChange={(e) => this.setState({ password: e.target.value })}></input>
        <input id='emailinp' type="text" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })}></input>
        <button onClick={() => this.titsandass(this.state.password, this.state.email)}>push</button>
    </div>
    </div>
  );
}}

export default App;