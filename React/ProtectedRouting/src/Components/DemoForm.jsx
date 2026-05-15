import React, { useState } from 'react'

const DemoForm = () => {


    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const[perror,setPerror]=useState("")

    function handleChange(e){
         setUsername(e.target.value)
        }
    function handleChange1(e){
         setPassword(e.target.value)
        }


        function handleSubmit(e){
            e.preventDefault()
            if(username==""){
                setError("Username is Required...")
            }
            else{
                setError("")
                alert("Form SUbmitted SUccessFully....")
                setUsername("")
            }

            //  ([a-z]{5}) , [A-Z] , [0-9]
            let pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
             
            if(pattern.test(password)){
                 setPassword("")
                alert("Form SUbmitted SUccessFully....")
                setPerror("")
                
            }
            else{
               setPerror("Password must be at least 8 characters with capital and small alphabets")
            }
        }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' onChange={handleChange} value={username}  /><br /><br />
            <p style={{color:"red"}}>{error}</p>

            <input type="password" placeholder='Enter Password' onChange={handleChange1}  />
            <p>{perror}</p>

            <input type="submit" />
        </form>
    </div>
  )
}

export default DemoForm