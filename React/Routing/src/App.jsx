import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Service from './Component/Service'
import Product from './Component/Product'

function App() {

  return (
   
   <>

    <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>}/>     
            <Route path="/about" element={<About/>}/>     
            <Route path="/service" element={<Service/>}/>     
            <Route path="/product" element={<Product/>}/>     

          </Routes>
    
    
    </BrowserRouter>
    
   </>  
   
  )
}

export default App
