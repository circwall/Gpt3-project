import React from 'react'
import './Possibility.css'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__posibility section__padding' id ="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibility} alt ='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request early access to get started</h4>
        <h1  className='gradient-text'>
          Possibilities are beyond your Imagination
        </h1>
        <p>As a front-end developer, I transform ideas into visually stunning and user centeric experience.</p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility
