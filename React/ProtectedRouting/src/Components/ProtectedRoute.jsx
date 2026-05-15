import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const navigate=useNavigate()
    let isLogin=localStorage.getItem("isLogin")
    useEffect(()=>{
        if(!(isLogin)){
       alert("Login first...")
        navigate('/login')

    }
    },[])
   
   
         return children
    

    
 
}

export default ProtectedRoute