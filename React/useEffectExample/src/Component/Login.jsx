import React, { useEffect } from 'react'

const Login = () => {

       
    useEffect(()=>{
       
        let inetrval=setInterval(()=>{
             console.log("Mounted...")
        },1000)

        return()=>{
            console.log("Unmounted...")
             clearInterval(inetrval)

        }


    },[])

  return (
    <div>

           <h1>DashBoard</h1>
        
    </div>
  )
}

export default Login