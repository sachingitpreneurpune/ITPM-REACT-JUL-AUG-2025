import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchData = () => {

      const[data,setData]=useState([])
      const[loader,setLoader]=useState(true)
       
     useEffect(()=>{
              axios.get("https://fakestoreapi.com/products").then((res)=>
      {
        console.log(res.data)
        setData(res.data)
        setLoader(false)
      }
    ) 
    // another way
    // fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{setData(data)})
     },[])

  return (
    <div>
           <ul>
            {
                  loader ? (
                    <h1>Data Loading</h1>
                  ):


                (
                  data.map((item,i)=>(
                  <>
                     <li key={i}>{item.id}</li>
                    <li key={i}>{item.title}</li>
                  </>
                ))
                )
            }
            
            </ul> 
    </div>
  )
}

export default FetchData