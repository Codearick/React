import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" width="100%" style={{border:"1px solid white"}}/>
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
    </div>
  )
}

export default Card