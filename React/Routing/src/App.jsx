import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
// import Service from './Component/Service'
// import Product from './Component/Product'

const Service=lazy(()=>import('./Component/Service'))
const Product=lazy(()=>import('./Component/Product'))

import SinglePage from './Component/SinglePage'
import PageNotFound from './Component/PageNotFound'
import { lazy, Suspense } from 'react'

function App() {

  return (
   
   <>

    <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>     
            <Route path="/about" element={<About/>}/>     
            <Route path="/service" element={<Suspense fallback={<h1>Service Page Loading</h1>}><Service/></Suspense>}/>     
            <Route path="/product" element={<Suspense fallback={<h1>Product Page Loading</h1>}><Product/></Suspense>}/>     
            <Route path="/single/:prodid" element={<SinglePage/>}/>     
            <Route path="*" element={<PageNotFound/>}/>     

          </Routes>
    
    
    </BrowserRouter>
    
   </>  
   
  )
}

export default App
