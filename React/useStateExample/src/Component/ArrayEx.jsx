import React, { useState } from 'react'

const ArrayEx = () => {
     
    let Alinks=["Home","About","Service","Contact"]
    const[links,setLinks]=useState(Alinks)

     function handleNav(){
        
            setLinks([...links,"All"])
     }
    console.log(links)

    function handleClick(link){
        alert(link)

    }
  return (
    <div>
        
         <ul>
            {
              links.map((item,index)=>(
                <li key={index} onClick={()=>handleClick(item)}>{item}</li>
              ))   
            }
         </ul>
         <button onClick={handleNav}>AddAll</button>
    </div>
  )
}

export default ArrayEx