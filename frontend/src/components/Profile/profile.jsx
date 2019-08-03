import React from 'react';
import {Component} from 'react'
import '../../App.css';
import InfoCard from './infocard'
import Companies from './companies'
import ContactCard from './contactCard'

class Biography extends Component {
  
  render () {

  return (
      <div className='biography'>
          <div id="cardBox">
          <InfoCard/>
          </div>
          <div id="companyCard">
          <Companies/>
          </div>
          <div id="contactCard">
          <ContactCard/>
          </div>
      </div>

  )}
  }

export default Biography;