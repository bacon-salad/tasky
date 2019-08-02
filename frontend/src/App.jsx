import React from 'react';
import {Component} from 'react';
import './App.css';
import button from './button'
import axios from 'axios'
import FORM from './components/signinform/form'
import Login from './components/loginForm/login'

class App extends Component{
componentDidMount = () => {
  axios.get('/api/accounts/check')
}
  render (){
    const loginStyle = {
      backgroundColor: '#2a2a2a',
      minHeight:'100vh'
    }
  return (
    <div className='hewwo'style={loginStyle}>
    <button>Hewwo</button>
    <FORM/>
    <Login/>
    </div>
  );
}}

export default App;
