import React from 'react'
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with  GPT-3 openAi
        </h1>
        <p>
        As a front-end developer, I transform ideas into visually stunning and user centeric experience.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Adress'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header
