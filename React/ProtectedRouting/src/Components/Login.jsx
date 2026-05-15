import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const navigate=useNavigate()
    function handleLogin(){
        alert("Login Success")
        localStorage.setItem("isLogin",true)
        navigate('/dashboard')

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1 >Login Page</h1>

        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login