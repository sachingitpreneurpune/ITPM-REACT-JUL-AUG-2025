import React, { useState } from 'react'

const Input = () => {

    // let username=document.getElementById("user").value;

      const[username,setUsername]=useState("")
      let usern;
      function handleChange(event){
        console.log(event.target.value)
         usern=event.target.value;
        // setUsername(usern)
    }

    function handleClick(){
        setUsername(usern)
    }


  return (
    <div>
        <label htmlFor="user">Enter Name: </label>
        <input type="text" name='Username' placeholder='Enter Name' id='user' onChange={handleChange} />
        <button onClick={handleClick}>getValue</button>

        <h3>Your Name:  {username}</h3>
    </div>
  )
}

export default Input