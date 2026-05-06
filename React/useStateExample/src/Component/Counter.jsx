import React, { useState } from 'react'

const Counter = () => {

    // let count=1;

    let[count,setCount]=useState(1)

    // function Increment(){
    //     setCount(count++);
    //     console.log(count)
    // }



     
  return (
    <div>
          <h1>Counter- {count} </h1>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter