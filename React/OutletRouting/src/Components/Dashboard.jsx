import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>This is Dashboard</h1>
         <Link to='profile'>profile</Link> <br /><br />
         <Link to='setting'>setting</Link>

         <Outlet/>

    </div>
  )
}

export default Dashboard