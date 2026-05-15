import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

     const navigate=useNavigate()

    function handleLogout(){
        alert("logout success")
        localStorage.removeItem("isLogin")
        navigate('/login')

    }
  return (
    <div style={{textAlign:"center"}}>
         <h1 >Dashboard Page</h1>
         <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard