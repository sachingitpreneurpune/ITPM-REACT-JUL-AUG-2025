import React, { useEffect, useState } from 'react'
import Card from './Card'

const Multipleinput = () => {

    const[user,setUser]=useState({
        username:"",
        email:""
    })

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

        <button onClick={handleClick}>showDetail</button>

         <Card data={user}/>
    </div>
  )
}

export default Multipleinput