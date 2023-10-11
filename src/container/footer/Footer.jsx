import React from 'react'
import './Footer.css'
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step into the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Gpt3 and open AI is the future Let us explore how it is?</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overon</p>
          <p>Social Media</p>
          <p>Counter</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Companies</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Gpt3 and open AI is the future Let us</p>
          <p>09024633042</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>

    </div>
  )
}

export default Footer
