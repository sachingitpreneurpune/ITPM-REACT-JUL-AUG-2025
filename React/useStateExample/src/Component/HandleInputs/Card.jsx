import React from 'react'

const Card = (props) => {
    console.log(props.data.username)
  return (
    <div>
        <h1>Username: {props.data.username}</h1>
        <h1>Email: {props.data.email}</h1>
    </div>

    // get id card detail by using form and onchange Event
    //store that detail in one array of object by using useState()
    //send that array of object to Id Card Compomnent and display cards
  )
}

export default Card