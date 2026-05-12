import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'

const Product = () => {


  const[products,setProducts]=useState([])
  const [serchParam]=useSearchParams()
      // console.log(serchParam)
      let category=serchParam.get("category")
      console.log(category)


         let filterCategoryWiseData= category? products.filter((product)=>(
          product.category==category
         )) :products

        console.log(filterCategoryWiseData)


      
       

        
  
     useEffect(()=>{
         axios.get("https://fakestoreapi.com/products").then((res)=>{res.data
          setProducts(res.data)
        })
             },[category])

            



        
     let apply={border:'1px solid red' ,width:"300px",textAlign:"center"}
  return (
    <div>
        <h1>This is Product Page</h1>

        <Link to="/product?category=electronics"><button>Electronics</button></Link>
        <Link to="/product?category=jewelery"><button>jwellery</button></Link>
        <Link to="/product?category=men's clothing"><button>Men's clothing</button></Link>
        <Link to="/product"><button>View All</button></Link>
        
        {/* https://fakestoreapi.com/products */}
   

         <section style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-evenly"}}>
          {
        filterCategoryWiseData.map((item,index)=>(
         <div  key={index} style={apply}>

            <Link to={`/single/${item.id}`}><img src={item.image}  width={200}/> </Link>
            <p>ID: {item.id}</p>
            <h3>{item.title}</h3>
            <h3>Category:{item.category}</h3>
            <h2>{item.description}</h2>

           <Link to={`/single/${item.id}`}>  <button>view Product</button></Link>
            
         </div>
        ))
    }

         </section>
         

    </div>
  )
}

export default Product