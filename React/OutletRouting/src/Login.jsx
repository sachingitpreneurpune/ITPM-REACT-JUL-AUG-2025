import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {

    
  const[form,setForm]=useState({
    username:"",
    password:""
  })

     let navigate=useNavigate();
  function handleSubmit(e){
    e.preventDefault()

     if(form.username=="admin" && form.password=="admin123"){
        alert("login successfull navigating on admin page...")
       navigate('/admin')
     }
     else{
      alert("Invalid username password")
     }

  }

  function handleChange(e){

    // console.log(e.target.name)
    // console.log(e.target.value)
      setForm({
        ...form,
        [e.target.name]:e.target.value
  })
}
console.log(form)
  return (
    <div>
        
        <h1>Admin Login</h1>
        <form action="" onSubmit={handleSubmit}>
           
           <label htmlFor="">Enter Username: </label>
           <input type="text" placeholder='Enter Username' name='username' onChange={handleChange} value={form.username} /> <br /><br />
           <label htmlFor="">Enter Password: </label>
           <input type="password" placeholder='Enter password' name='password' onChange={handleChange} value={form.password}/>
           <br /><br />

           <input type="submit" value="Login" />

        </form>
    </div>
  )
}

export default Login