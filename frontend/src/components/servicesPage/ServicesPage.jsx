import React from 'react';
import './servicesPage.css';
import {Footer, Navbar} from '../../components';
import {idea, location, security, calender} from '../../assets';

const ServicesPage = () => {
  return (
    <div className='services'>
      <div className='services-top'><Navbar /></div>
      <div className='services-middle'>
        <div className='services-middle-top'>
          <h1>What you'll get</h1>
        </div>
        <div className='services-middle-bottom'>
          <div className='services-middle-bottom-left'>
            <div className='services-middle-bottom-left-c1'>
              <img src={idea} alt='icon'></img>
              <div className='services-middle-bottom-left-c1-data'>
                <h3>Start Tracking</h3>
                <p>Once set up, start tracking locations in real-time, access historical
                data, and take advantage of the features tailored to your needs.</p>
              </div>
            </div>
            <div className='services-middle-bottom-left-c2'>
              <img src={location} alt='icon'></img>
              <div className='services-middle-bottom-left-c2-data'>
                <h3>Real-Time GPS Tracking</h3>
                <p>Stay informed about your exact location with our real-time GPS tracking
                services. Our advanced tracking system provides updates at regular intervals,
                allowing you to monitor movement effortlessly.</p>
              </div>
            </div>
          </div>
          <div className='services-middle-bottom-right'>
            <div className='services-middle-bottom-right-c1'>
              <img src={security} alt='icon'></img>
              <div className='services-middle-bottom-right-c1-data'>
                <h3>Secure and Private</h3>
                <p>We prioritize the security and privacy of your data.
                Our services adhere to the highest standards to safeguard your information.</p>
              </div>
            </div>
            <div className='services-middle-bottom-right-c2'>
              <img src={calender} alt='icon'></img>
              <div className='services-middle-bottom-right-c2-data'>
                <h3>Historical Location Data</h3>
                <p>Access detailed historical location data for comprehensive analysis. This data
                can be crucial for optimizing routes, improving efficiency, and making informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='services-bottom'><Footer /></div>
    </div>
  )
}

export default ServicesPage