import React from 'react';
import {Component} from 'react';
import './App.css';
import button from './button'
import axios from 'axios'

class App extends Component{
componentDidMount = () => {
  axios.get('http://localhost:8080/api/accounts/pull').then(
    ()=>{
      alert('fuck you')
      }
    )
}
  render (){
    const loginStyle = {
      backgroundColor: '#2a2a2a',
    }
  return (
    <div className='hewwo'style={loginStyle}>
    <button onClick={button}>Hewwo</button>
    </div>
  );
}}

export default App;
