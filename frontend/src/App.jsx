import React from 'react';
import {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import SignUp from './components/signinform/signUpForm' 
import SignIn from './components/signinform/signInForm'


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
        </div>
        <div className='hewwo' style={loginStyle}>
          <Route exact path = "/forms" component={SignIn}/>
          <Route exact path = "/forms/signUp" component={SignUp}/>
        </div>
      </div>
    );
  }
}


export default App;
