import React from 'react'

const MyButton = (props) => {
  return (
    <div>
        <button>Button</button>
        <p>{props.children}</p>
    </div>
  )
}

export default MyButton