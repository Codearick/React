import React from 'react'

const Card = (props)=> {
  return (
    <div className='card flex flex-col w-[20vw] h-[55vh] border border-purple-200 m-2 p-2 overflow-auto'>
      <img src="./src/assets/react.svg" alt="" />
      <div className='mt-5'>ID: {props.id} </div>
      <div>Title: {props.title} </div>
      <div>Body: {props.body} </div>
   </div>
  )
}

export default Card
