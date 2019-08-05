import React from 'react';
import {Component} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

class SideBar extends Component {
  
  render () {

  return (
      <div className='sideBar'>
          <Link to="/home/profile" id='topButton' className='buttons'>Profile</Link>
          <Link to="/home/tasks" id='' className='buttons'>Tasks</Link>
          <Link to="/home/status" id='' className='buttons'>Status</Link>
      </div>

  )}
  }

export default SideBar;