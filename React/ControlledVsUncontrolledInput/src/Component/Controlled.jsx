import React, { useState } from 'react'

const Controlled = () => {
       
    const[username,setUsername]=useState("");
    const[submitusername,setSubmitusername]=useState("");

     function handleChange(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUsername(e.target.value)

     }

     function handleSubmit(e){
        e.preventDefault()
         setSubmitusername(username)
         setUsername("")

     }

  return (
    <>

       <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username: </label>
        <input type="text" name="username" id='username' placeholder='Enter Username'
        onChange={handleChange} value={username} />
        <input type="submit" />
       </form>

       <h1>Welcome , {submitusername}</h1>
        
    </>
  )
}

export default Controlled