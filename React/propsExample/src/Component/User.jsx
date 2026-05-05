// function User(){
//    return(
//     <h1>Hello From User...</h1>
//    )
// }

// export default User;

// const User=()=>{
//     return(
//         <h1>Hello From User...</h1>
//     )
// }
// export default User;


// import React from 'react'

// export default function User() {
//   return (
//     <div>User</div>
//   )
// }

import React from 'react'

const User = (props) => {

  console.log(props.arr)
  return (
    <div>
        <h1>Welcome , {props.name} {props.age}</h1>
    </div>
  )
}

export default User

