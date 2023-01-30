import React from 'react'
import './about.css'
import myPic from '../../assets/myPic.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

     <div className="container about__container">
     <div className="about__me">
       <div className="about__me-image">
        <img src={myPic} alt="me" />
       </div>
     </div>
     <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
           <h5>Experience</h5>
           <small>1 year of experience</small>
        </article>
      </div>
     </div>
     </div>
      </section>
  )
}

export default About