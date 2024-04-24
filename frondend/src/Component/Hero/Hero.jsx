import React from 'react'
import './Hero.css'

import arrow_icon from '../Assets/arrow.png'
import hero_image  from '../Assets/img1.png'

function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>new arrival only</h2>
        <div>
                  <div className='hero-hand-icon'>
                    <p>New</p>  
                  </div>
        
           <div className="words word-1">
              <span>C</span>
              <span>O</span>
              <span>L</span>
              <span>E</span>
              <span>C</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>N</span>
              <span>T</span>
            </div>
          </div>
        <div className='hero-hand-icon'>
        <p>For Evryone</p>
         </div>
            
       
            <div className="hero-lastest-btn" >
            <span>last collection </span>
                
                
                <img src={arrow_icon} alt="" />
             </div>
      </div>
        <div className="hero-right">
            <img src={hero_image} alt="" style={{ width: 'auto', height: '600px' }} />
            
                </div>
                
    </div>
  )
}

export default Hero
