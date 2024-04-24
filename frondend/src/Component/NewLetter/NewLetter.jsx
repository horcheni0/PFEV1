import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='new_letter'>
      <h1>Get exclusive ofeers on your Email</h1>
      <p>subscribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>subscribe</button>
      </div>
    </div>

  )
}

export default NewLetter
