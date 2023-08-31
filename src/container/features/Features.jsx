import React from 'react'
import './Features.css'
import { Feature } from '../../components'
const Features = () => {
  const featureData = [
    {
      title:'Improving distrust instruction',
      text: 'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'
    },
    {
      title:'Become the tended active',
      text: 'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'
    },
    {
      title:'Messae or am nothing',
      text: 'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'
    },
    {title:'Really boy law country',
    text: 'As a front-end developer, I transform ideas into visually stunning and user centeric experience.'
    }
  ]
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now You Just Need to Realize It. Step into Future Today & Make It Happen.
        </h1>
        <p>Request early access to get started</p>
      </div>
      <div className='gpt3__features-container'>
        {featureData.map((item, index)=>(
          <Feature key={item.title + index}title={item.title} text={item.text}/>
        ))}
      </div>
    </div>
  )
}

export default Features
