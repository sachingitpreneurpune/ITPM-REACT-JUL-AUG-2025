import { useState } from 'react'
import './App.css'
import FirstDemo from './Component/FirstDemo'
import Login from './Component/Login'
import SecondDemo from './Component/SecondDemo'
import ThirdDemo from './Component/ThirdDemo'
import Withoutuseeffect from './Component/Withoutuseeffect'
import FetchData from './FetchData'
import LifeCycle from './Component/LifeCycle'

function App() {

  const[toggle,setToggle]=useState(true)

  

  return (
    <>
       {/* <Withoutuseeffect/> */}
       {/* <FirstDemo/> */}
       {/* <SecondDemo/> */}
       {/* <ThirdDemo names="Sachin"/> */}

       {/* <FetchData/> */}


      {/* {
        toggle &&  <Login/>
      }

       <button onClick={()=>setToggle(!toggle)}> 
           {
            toggle? "Logout" : "Login"
           }
         </button> */}



        { toggle && <LifeCycle/> }
         <button onClick={()=>setToggle(!toggle)}> 
           {
            toggle? "Hide" : "Show"
           }
         </button> 
    </>
  )
}

export default App
