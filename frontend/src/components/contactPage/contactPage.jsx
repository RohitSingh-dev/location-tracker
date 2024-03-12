import React from 'react';
import './contactPage.css';
import {Contacts, Footer, Navbar} from '../../components';
import { contact1, contact2, contact3 } from '../../assets';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop:{
    breakpoint:{max:3000, min:1024},
    items:3,
    SlidesToSlide: 3
  },
  tablet:{
    breakpoint:{max:1024, min:464},
    items:2,
    SlidesToSlide: 2
  },
  mobile:{
    breakpoint:{max:464, min:0},
    items:1,
    SlidesToSlide: 1
  }
};
const contactPage = () => {
  return (
    <div className='contactPage'>
      <div className='contactPage-top'><Navbar /></div>
      <div className='contactPage-middle'>
        <div className='contactPage-middle-top'>
          <h1>Let's Start a Conversation</h1>
        </div>
        <div className='contactPage-middle-bottom'>
          <div className='contactPage-middle-bottom-contacts'>
            <Carousel swipeable={true} draggable={false} showDots={true} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={3000} keyBoardControl={true} itemClass='carousel-item' customTransition="all .5" transitionDuration={500} responsive={responsive} deviceType='desktop' containerClass='carousel-container'>
              <div><Contacts image={contact1} name='Rohit Kumar Singh' role='Frontend Dev' email='rohitsingh20082002@gmail.com'></Contacts></div>
              <div><Contacts image={contact2} name='Adam Baker' role='Backend Dev' email='adbaker1479@gmail.com'></Contacts></div>
              <div><Contacts image={contact3} name='Seun' role='Frontend Dev' email='oyedeleoluwaseun56@gmail.com'></Contacts></div>
            </Carousel>
          </div>
        </div>
      </div>
      <div className='contactPage-bottom'><Footer /></div>
    </div>
  )
}

export default contactPage