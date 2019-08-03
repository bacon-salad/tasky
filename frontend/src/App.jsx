import React from 'react';
import {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import button from './button'
import axios from 'axios'
import FORM from './components/signinform/form'
import Login from './components/loginForm/login'
import SignUp from './components/signUpForm' 
import SignIn from './components/signInForm'
import Banner from './components/banner/banner'


class App extends Component{
componentDidMount = () => {
  axios.get('http://localhost:8080/api/accounts/check')
}
  render (){
    const loginStyle = {
      backgroundColor: '#2a2a2a',
      minHeight: '100vh'
    }

    return (
      <div className='container'>
        <div className='banner'>
          <Banner />
        </div>
        <div className='banner'>
        </div>
        <div className='hewwo' style={loginStyle}>
          <button onClick={button}>Hewwo</button>
          <Route exact path = "/" component={SignIn}/>
          <Route exact path = "/signUp" component={SignUp}/>
        </div>
      </div>
    );
  }
}


export default App;
