import React from 'react'
import '../components/Showcase.css'
const Showcase = () => {
  return (
    <div className='showcase'>
      <h1>DISCOVER AN ADVENTURE</h1>
      <h2>TRAVEL THE WORLD</h2>
      <p>EXPLORE YOUR LIFE AND MAKE YOUR DREAMS ALIVE</p>
      <div className='showcasebutton'>
            <button className='showcase_btn' >services</button>
            <button className='showcase_btn'>details</button>
      </div>
    </div>
  )
}

export default Showcase