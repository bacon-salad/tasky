import React from 'react';
import { Component } from 'react';
import './App.css';
import Banner from './components/banner/banner';
import button from './button';
import axios from 'axios';
import FORM from './components/signinform/form';

class App extends Component {
  componentDidMount = () => {
    axios.post('http://localhost:8080/api/accounts/pull').then(
      () => {
        alert('fuck you')
      }
    )
  }
  render() {
    const loginStyle = {
      backgroundColor: '#2a2a2a',
      minHeight: '100vh'
    }
    return (
      <div className='container'>
        <div className='banner'>
          <Banner />
        </div>
        <div className='hewwo' style={loginStyle}>
          <button onClick={button}>Hewwo</button>
          <FORM />
        </div>
      </div>
    );
  }
}

export default App;
