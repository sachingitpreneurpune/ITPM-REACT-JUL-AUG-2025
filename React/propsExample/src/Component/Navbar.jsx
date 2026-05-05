import React from 'react'
import './Navbar.css'

const Navbar = ({navLinks}) => {
    console.log(navLinks)

    let Navlinks=["All",...navLinks]
    function handleClick(link){
        alert(link)
    }
  return (
    <div>
          {/* <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Product</li>
            <li>Contact</li>
          </ul> */}

          <ul>
            {
            Navlinks.map((link,index)=>(
                <li key={index} onClick={()=>handleClick(link)}>{link}</li>
            ))
          }
          </ul>
    </div>
  )
}

export default Navbar