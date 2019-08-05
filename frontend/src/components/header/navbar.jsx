import React from 'react';
import {Component} from 'react'
import '../../App.css';

class Navbar extends Component {
  
  render () {
      const name = {
          float: 'right',
          marginRight: '400px',
          fontSize: '50px',
          width: '25%',
          color: 'white',
      }
  return (
      <div className="navbar">
          <h1 style={name}>Devon Owen</h1>
      </div>

  )}
  }

export default Navbar;