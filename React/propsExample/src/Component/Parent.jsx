import React from 'react'
import Child from '../Child'

const Parent = ({name}) => {
  return (
    <div>
        <h1>Hello From Parent , {name}</h1>
        <Child name={name}/>
    </div>
  )
}

export default Parent