import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SinglePage = () => {

   const {prodid}=useParams()

   const[product,setProduct]=useState([])
   console.log(product)


   useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/${prodid}`).then((res)=>{
      setProduct(res.data)
      console.log(res.data)
     }
    )
   },[prodid])


  return (
    <>
      <div>
          
          <img src={product.image} style={{width:"200px"}} />
          <p>ID:{product.id}</p>
          <h2>Title:{product.title}</h2>
          <h2>Category:{product.category}</h2>
          


      </div>

  
    </>
  )
}

export default SinglePage