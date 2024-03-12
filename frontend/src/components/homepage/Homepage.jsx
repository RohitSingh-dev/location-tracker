import React from 'react';
import './homepage.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {home_icon} from '../../assets';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='homepage-top'><Navbar /></div>
        <div className='homepage-middle'>
          <div className='homepage-middle-left'>
            <img src={home_icon} alt='icon'></img>
          </div>
          <div className='homepage-middle-right'>
            <div className='homepage-middle-right-heading'>
              <h1>Welcome to our <span>Live</span> Tracking Website!</h1>
            </div>
            <div className='homepage-middle-right-decoration'></div>
            <div className='homepage-middle-right-data'>
              <p>Seamlessly Navigate Every Detail, Every Movement - Unleash the Power<br />
              to Track, Understand, and Stay Ahead.<br />
              <span>Your Data, Your World, Live at Your Fingertips.</span></p>
            </div>
          </div>
        </div>
        <div className='homepage-bottom'><Footer /></div>
    </div>
  )
}

export default Homepage