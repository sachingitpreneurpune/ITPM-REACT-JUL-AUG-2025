import React from 'react'

const Student = ({name,age=0,Demo}) => {
// const Student = (props) => {
    // let name="Ashish"
  return (
    <div>
        {/* <h1>Hello , {props.name} </h1> */}
        <h1>Hello , {name}  {age}</h1>
         {/* <button onClick={Demo}>Click</button> */}
    </div>
  )
}

export default Student