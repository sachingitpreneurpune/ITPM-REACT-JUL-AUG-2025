import React, { useState } from 'react'

const CheckBox = () => {

    const[data,setData]=useState([]);
    console.log(data)

    function handleChange(event){
        console.log(event.target.value)
        console.log(event.target.checked)

        if(event.target.checked){

            setData([...data,event.target.value])
        }
        else{
             setData(data.filter((d)=>d!=event.target.value))
        }

    }
  return (
    <div>
        <input type="checkbox" value="HTML" onChange={handleChange}  id='H'/>
        <label htmlFor="H">HTML</label>
        <br />
        <input type="checkbox" value="CSS" onChange={handleChange} id='C'/>
        <label htmlFor="C">CSS</label>
        <br />
        <input type="checkbox" value="Bootstrap" onChange={handleChange} id='B' />
        <label htmlFor="B">Bootstrap</label>
        <br />
        <input type="checkbox" value="JS" onChange={handleChange} id='J' />
        <label htmlFor="J">Js</label>

        <h2>{data}</h2>
    </div>
  )
}

export default CheckBox