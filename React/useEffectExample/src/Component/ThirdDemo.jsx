import React, { useEffect, useState } from 'react'

const ThirdDemo = ({names}) => {
    const[counter,setCounter]=useState(0)
    const[name,setName]=useState("Guest")

 useEffect(()=>{
       console.log("call this statement on the updation of counter")
 },[counter])

//  useEffect(()=>{
//        console.log("call this statement on the updation of counter and name")
//  },[counter,name])


  return (
    <div>
         <button onClick={()=>setCounter(counter+1)}>Increment</button>
         <button onClick={()=>setName("Aman")}>Update Name </button>

         <h1>{counter}</h1>
         <h1>{name}</h1>

         <h1>{names}</h1>

    </div>
  )
}

export default ThirdDemo