import React, { useEffect, useState } from 'react'

const LifeCycle = () => {

     const[count,setCount]=useState(0)
    useEffect(()=>{
             console.log("Component Mounted...")
    },[])
    useEffect(()=>{
             console.log("Component Updated..." , count)

             return()=>{
                console.log("Component Unmouted...")
             }
    },[count])
  return (
    <div>
          <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default LifeCycle