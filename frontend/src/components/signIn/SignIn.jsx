import React from 'react';
import './signIn.css';
import {Navbar} from '../../components';
import {home_icon, login_icon} from '../../assets';

const SignIn = () => {
  return (
    <div className='signIn'>
        <div className='signIn-top'><Navbar /></div>
        <div className='signIn-bottom'>
          <div className='signIn-bottom-left'>
            <img src={home_icon} alt='icon'></img>
          </div>
          <div className='signIn-bottom-right'>
            <div className='signIn-bottom-right-form'>
              <form>
                <div className='signIn-bottom-right-form-heading'>
                  <img src={login_icon} alt='icon'></img>
                  <h1>Welcome Back !</h1>
                </div>
                <div className='signIn-bottom-right-form-label'>
                  <label for="email">Email Id</label><br></br>
                  <input type="email" id="email" name="email" placeholder="*Email" required /><br></br>
                </div>
                <div className='signIn-bottom-right-form-label'>
                  <label for="password">Password</label><br></br>
                  <input type="password" id="password" name="password" placeholder="*Password" required />
                </div>
                <div className='signIn-bottom-right-form-button'>
                  <input type="submit" value="Sign In"></input>
                </div>
                <div className='signIn-bottom-right-form-login'>
                  <p>New User? <a href='/Register'>Register Here !</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn