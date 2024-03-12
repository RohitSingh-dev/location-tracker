import React from 'react';
import './aboutPage.css';
import {Footer, Navbar} from '../../components';
import { aboutUs_image } from '../../assets';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPage-top'><Navbar /></div>
      <div className='aboutPage-middle'>
        <div className='aboutPage-middle-top'>
          <h1>OUR STORY</h1>
          <span>Welcome to TrKd - Your Trusted Partner in Location Tracking! TrKd, a dynamic initiative born out of passion for technology and a commitment to fostering the next generation of innovators. As an internship project, we strive to combine creativity and technical prowess to explore new horizons in the field of location tracking.</span>
        </div>
        <div className='aboutPage-middle-bottom'>
          <div className='aboutPage-middle-bottom-left'>
            <h2>Our Mission:</h2>
            <span>At TrKd, our mission is two-fold. Firstly, we aim to provide a platform for aspiring minds to delve into the exciting realm of location tracking technology, offering real-world projects that challenge and inspire. Secondly, we seek to contribute meaningful solutions to the growing landscape of location-based services.</span>
            <h2>Who We Are:</h2>
            <span>Driven by a team of dedicated mentors and enthusiastic interns, TrKd is a melting pot of ideas, collaboration, and hands-on experience. We believe in the power of internships to shape future leaders and innovators. Our commitment extends beyond the realm of theoretical knowledge; we believe in learning by doing.</span>
          </div>
          <div className='aboutPage-middle-bottom-right'>
            <img src={aboutUs_image} alt='icon'></img>
          </div>
        </div>
      </div>
      <div className='aboutPage-bottom'><Footer /></div>
    </div>
  )
}

export default AboutPage