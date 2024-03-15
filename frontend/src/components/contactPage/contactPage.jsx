import React from 'react';
import './contactPage.css';
import {Contacts, Footer, Navbar} from '../../components';
import { contact1} from '../../assets';

const contactPage = () => {
  return (
    <div className='contactPage'>
      <div className='contactPage-top'><Navbar /></div>
      <div className='contactPage-middle'>
        <div className='contactPage-middle-top'>
          <h1>Let's Start a Conversation</h1>
        </div>
        <div className='contactPage-middle-bottom'>
              <div><Contacts image={contact1} name='Rohit Kumar Singh' role='Frontend Dev' email='rohitsingh20082002@gmail.com'></Contacts></div>
        </div>
      </div>
      <div className='contactPage-bottom'><Footer /></div>
    </div>
  )
}

export default contactPage