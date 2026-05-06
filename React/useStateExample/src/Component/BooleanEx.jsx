import React, { useState } from 'react'

const BooleanEx = () => {

    const[visible,setVisible]=useState(true)
    console.log(visible)
    
  return (
    <div>
        <button onClick={()=>setVisible(!visible)}>click</button>
        {/* {visible && <h1>Hello , Welcome </h1> } */}
        {visible ? <h1>Dashboard </h1>: <h1>Login Page </h1> }
    </div>
  )
}

export default BooleanEx