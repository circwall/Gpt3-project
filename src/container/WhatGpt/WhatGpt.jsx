import React from 'react'
import './WhatGpt.css'
import { Feature } from '../../components'

const Gpt = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={'What is GPT-3?'} text={'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title={'ChatsBots'} text='As a front-end developer, I transform ideas into visually stunning and user centeric experience.'/>
        <Feature title={'Knowledge'} text={'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'}/>
        <Feature title={'Education'} text={'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'}/>
      </div>
    </div>
  )
}

export default Gpt
