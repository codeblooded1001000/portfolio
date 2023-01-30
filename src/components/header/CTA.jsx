import React from 'react'
import PushpanderResume from '../../assets/PushpanderResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={PushpanderResume} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA