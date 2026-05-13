import { Link } from 'react-router-dom'

const Navbar = () => {


    
  
  return (
    <div>
        <ul style={{display:"flex" , flexWrap:"wrap" , justifyContent:"space-evenly"}}>
           <Link to="/" > Home </Link>
           <Link to="/login" > Login </Link>
           {/* <Link to="/dashboard" > Dashboard </Link> */}
         
        </ul>

    </div>
  )
}

export default Navbar