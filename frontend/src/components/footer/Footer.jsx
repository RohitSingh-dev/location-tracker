import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <p className='footer-left-top'>The easiest and quickest way to <span>Locate Yourself</span></p><br />
            <p className='footer-left-down'>Start now. Get,Set,Tracking!</p>
        </div>
        <div className='footer-right'>
            <a href='/SignIn'><button>Sign In</button></a>
            <a className='footer-right-register' href='/Register'><button>Register</button></a>
        </div>
    </div>
  )
}

export default Footer