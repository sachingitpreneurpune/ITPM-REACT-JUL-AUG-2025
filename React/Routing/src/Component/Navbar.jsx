import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
    <div>

        {/* <a href=""></a> */}
        {/* <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/service"><li>Service</li></Link>
            <Link to="/product"><li>Product</li></Link>
        </ul> */}
        <ul>
            <NavLink to="/" ><li className={({isactive})=>isactive ? "active" : ""}>Home</li></NavLink>
            <NavLink to="/about" ><li className={({isactive})=>isactive ? "active" : ""}>About</li></NavLink>
            <NavLink to="/service" ><li className={({isactive})=>isactive ? "active" : ""}>Service</li></NavLink>
            <NavLink to="/product" ><li className={({isactive})=>isactive ? "active" : ""}>Product</li></NavLink>
            <NavLink to="/contact" ><li className={({isactive})=>isactive ? "active" : ""}>Contact</li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar