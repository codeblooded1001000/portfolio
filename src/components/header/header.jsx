import React from 'react'
import './header.css'
import CTA from './CTA'
import HeadersSocial from './HeadersSocial'
import myPic from '../../assets/myPic.png'
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Pushpander Singh Tanwar</h1>
      <h5 className="text-light">Full-Stack Developer</h5>
      <CTA/>
      <HeadersSocial/>
      <div className="me">
        <ImageShadow className='photu' src={myPic} alt="Pushpander's Pic" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header