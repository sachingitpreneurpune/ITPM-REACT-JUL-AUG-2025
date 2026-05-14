import React, { useRef } from 'react'

const Uncontrolled = () => {
 

    const inputRef=useRef();

    function handleSubmit(e){
        e.preventDefault()
        console.log(inputRef.current.value)
    }
    function handleClick(){
        inputRef.current.style.color="red"
        inputRef.current.style.background="yellow"
    }
     
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Username' name='username' ref={inputRef} />
            <input type="submit" />
        </form>
        <button onClick={handleClick}>APply style</button>
    </div>
  )
}

export default Uncontrolled