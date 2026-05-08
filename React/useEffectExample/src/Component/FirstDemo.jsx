import React, { useEffect, useState } from 'react'

const FirstDemo = () => {

    const[counter,setCounter]=useState(0)

     useEffect(()=>{
        console.log("Run Once")
     })
  return (
    <div>

        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        
    </div>
  )
}

export default FirstDemo