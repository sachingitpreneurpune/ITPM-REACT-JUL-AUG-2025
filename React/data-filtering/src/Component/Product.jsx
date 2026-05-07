import React, { useState } from 'react'
import product from './Data/product'

const Product = () => {
  // console.log(product);

  const [products, setProducts] = useState(product)
  const [bproducts, setBproducts] = useState(product)


  
  // console.log(bproducts)

  let filterbycategory = bproducts.map((product) => product.category)
  // console.log(filterbycategory)

  let uniqCategory = new Set(filterbycategory)
  console.log(uniqCategory)

  let NavLinks = ["All", ...uniqCategory]


  function handleClick(link) {
    // alert(link)

    if(link!="All"){
      let filterData=bproducts.filter((product)=>product.category==link)
      setProducts(filterData)
    }
    else{
      setProducts(bproducts)

    }


  }

  function handleChange(event){
    // alert(e.target.value)

    let serchText=event.target.value.toLowerCase();
    // alert(serchText)

    let filterSearch=bproducts.filter((product)=>product.title.toLocaleLowerCase().includes(serchText))
    setProducts(filterSearch)






  }



  return (
    <div>
      <h1 className='text-center'>---Product Page---</h1>

      {/* <ul>
            {
                NavLinks.map((link)=>(
                <li>{link}</li>
                ))
            }
          </ul> */}


      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Products</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {
                NavLinks.map((link, index) => (
                  <li key={index} className='nav-item mx-5' onClick={() => handleClick(link)}>{link}</li>
                ))
              }

            </ul>
             <input className="form-control me-2 w-25" 
       type="text" placeholder="Search" 
       onChange={handleChange}/>
            

          </div>
        </div>
      </nav>

     



      <section className='row justify-content-evenly'>
        {
          products.length >0 ? 
          products.map((product,index) => (
            <div className="card col-12 col-md-6 col-xl-3 m-2" key={index} >
              <img src={product.image} className="card-img-top" style={{height:"300px"}} alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card Id: {product.id}</h5>
                  <h5 className="card-title">Card title: {product.title}</h5>
                  <h5 className="card-title">Category: {product.category}</h5>
                  <h5 className="card-title">Price: {product.price}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          )): 
         <h1>Product Not Found</h1>
        }
      </section>


    </div>
  )
}

export default Product