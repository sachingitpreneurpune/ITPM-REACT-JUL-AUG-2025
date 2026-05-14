import React, { useState } from 'react'

const Controlled = () => {
       
    const[username,setUsername]=useState("");
    const[submitusername,setSubmitusername]=useState("");
    const[error,setError]=useState("");

     function handleChange(e){
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUsername(e.target.value)

     }

     function handleSubmit(e){
        e.preventDefault()
          

        if(username==""){
            setError("Username is Required....")
         }
        else if(!(username.includes("@"))){

           setError("Inavlid username @ should Included...")
        } else{
setSubmitusername(username)
         setUsername("")
         setError("")
         }

     }

  return (
    <>

       <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter Username: </label>
        <input type="text" name="username" id='username' placeholder='Enter Username'
        onChange={handleChange} value={username} />
        <p style={{color:"red"}}>{error}</p>
        <input type="submit" />
       </form>

       <h1>Welcome , {submitusername}</h1>
        
    </>
  )
}

export default Controlled