import React from 'react';
import './register.css';
import {Navbar} from '../../components';
import {home_icon, register_icon} from '../../assets';

const Register = () => {
  return (
    <div className='register'>
        <div className='register-top'><Navbar /></div>
        <div className='register-bottom'>
          <div className='register-bottom-left'>
            <img src={home_icon} alt='icon'></img>
          </div>
          <div className='register-bottom-right'>
            <form className='register-bottom-right-form'>
              <div className='register-bottom-right-form-heading'>
                <img src={register_icon} alt='icon'></img>
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="name">Name</label><br></br>
                <input type="text" id="name" name="name" placeholder="*Name" required />
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="username">Userame</label><br></br>
                <input type="text" id="username" name="username" placeholder="*Userame" required />
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="email">Email Id</label><br></br>
                <input type="email" id="email" name="email" placeholder="*Email" required />
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="phone">Phone</label><br></br>
                <input type="number" id="phone" name="phone" placeholder="*Phone" required />
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="password">Password</label><br></br>
                <input type="password" id="password" name="password" placeholder="*Password" required />
              </div>
              <div className='register-bottom-right-form-label'>
                <label for="confirmPassword">Confirm Password</label><br></br>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="*Confirm Password" required />
              </div>
              <div className='register-bottom-right-form-button'>
                <input type="submit" value="Register Me"></input>
              </div>
              <div className='register-bottom-right-form-login'>
                <p>Existing User? <a href='/SignIn'>Sign In</a></p>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Register