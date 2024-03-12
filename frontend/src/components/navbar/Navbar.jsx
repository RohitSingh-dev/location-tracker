import React from 'react';
import './navbar.css';
import {icon} from '../../assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <img src={icon} alt='icon'></img>
            <h2>T<span>r</span>K<span>d </span></h2>
        </div>
        <div className='navbar-right'>
            <div><a href='/Home'>Home</a></div>
            <div><a href='/Services'>Services</a></div>
            <div><a href='/About'>About</a></div>
            <div><a href='/Contact'>Contact</a></div>
        </div>
    </div>
  )
}

export default Navbar