import React from 'react'
import './Card.css'

const Card = (props) => {

    console.log(props.data.name)
  return (
    
        <div className='card'>
        <h1>Name:{props.data.name}</h1>
        <p>description: {props.data.desc}</p>
        <p>age:{props.data.age}</p>

    </div>
  )
}

export default Card