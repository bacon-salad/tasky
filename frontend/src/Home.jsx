import React from 'react';
import {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/navbar'
import SideBar from './components/sidebar/sidebar'
import profile from './components/Profile/profile'

class Main extends Component {
  
  render () {
  return (
    <div className="main">

      <Navbar />
      <SideBar />
        <div id="mainContent">
        <Route exact path="/home/profile" component={profile}/>
        </div>

    </div>
  )}
  }

export default Main;
