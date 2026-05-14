import React, { useState } from 'react'

const MultipleInput = () => {
    const[form,setForm]=useState({
       username:"" ,
       email:"" ,
       password:""
    })

    const[formData,setformData]=useState({})



    function handleChange(e){
         setForm({
            ...form,[e.target.name]:e.target.value
         })
        }

     



       function handleSubmit(e){
        e.preventDefault()

         setformData(form)


         setForm({
       username:"" ,
       email:"" ,
       password:""
    })
       }

  return (
    <>
      
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Username: </label>
        <input type="text" placeholder='Enter Username' name='username' value={form.username}  onChange={handleChange} /><br /><br />

        <label htmlFor="">Enter Email: </label>
        <input type="email" placeholder='Enter Email' name='email' value={form.email}   onChange={handleChange}/><br /><br />

        <label htmlFor="">Enter Password: </label>
        <input type="password" placeholder='Enter Password' name='password' value={form.password}  onChange={handleChange} /><br /><br />

         <input type="submit" />
        
        </form> 

        <h1>{formData.username}</h1>       
        <h1>{formData.email}</h1>       
        <h1>{formData.password}</h1>       
    </>
  )
}

export default MultipleInput