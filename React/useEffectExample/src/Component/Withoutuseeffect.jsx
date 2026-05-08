import React, { useState } from 'react'

const Withoutuseeffect = () => {

    //syntax
    // useEffect(()=>{},[dependency array])

    const[counter,setCount]=useState(0)
     
    console.log("I want to run this statement only once")
    // by using useEffect Hook

  return (
    <div>

        <button onClick={()=>setCount(counter+1)}>counter { counter}</button>
        
    </div>
  )
}

export default Withoutuseeffect