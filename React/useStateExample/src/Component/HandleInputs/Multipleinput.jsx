import React, { useEffect, useState } from 'react'
import Card from './Card'

const Multipleinput = () => {

    const[user,setUser]=useState({
        username:"",
        email:""
    })

    const[cardData,setcardData]=useState(user)

    function handleChange(e){
        // console.log(e.target.value)
        // console.log(e.target.name)
        setUser({...user,[e.target.name]:e.target.value})

    }
    
    function handleClick(){
        
        console.log(user)
        
    }
  return (
    <div>
        <label htmlFor="username">Enter Username:-</label>
        <input type="text" placeholder='Enter Username' id='username' name='username' onChange={handleChange} value={user.username} />
        <br /><br />
        <label htmlFor="email">Enter Email:-</label>
        <input type="text" placeholder='Enter Email' id='email' name='email' onChange={handleChange} value={user.email} />
          <br />
          <br />
        <button onClick={handleClick}>Show Card</button>

        <Card data={user}/>
    </div>
  )
}

export default Multipleinput