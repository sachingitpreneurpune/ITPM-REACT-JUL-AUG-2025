import React, { useState } from 'react'

const ConditionalRendering = () => {
      let login=true;

      const[islogin,setisLogin]=useState(false)

      const[istoggle,setToggle]=useState(false)


      let apply={
        color:"red",
        backgroundColor:"yellow"
      }

  return (
    <div>
         {login ? <h1>Dashboard</h1> : <h1>Login Page</h1>}
      {login && <h1>DashBoard</h1>}


      <button onClick={()=>setisLogin(!islogin)}>
        {islogin ?"logout":"login" } 
        </button>

<br /><hr />
        <input type={istoggle ? "text":"password"}  placeholder='Enter Password' style={apply} />
        <button onClick={()=>setToggle(!istoggle)}>
          {
            istoggle?"Hide":"Show"
          }
        </button>
    </div>
  )
}

export default ConditionalRendering