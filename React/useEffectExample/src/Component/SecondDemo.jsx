import React, { useEffect, useState } from 'react'

const SecondDemo = () => {

    const[counter,setCounter]=useState(0)

     useEffect(()=>{
        console.log("Run Once")
     },[])
  return (
    <div>

        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        
    </div>
  )
}

export default SecondDemo