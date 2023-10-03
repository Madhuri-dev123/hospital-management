import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <center>
        <h1>AdminDashboard</h1>
        <Link to="addhospital"><button className='btn btn-primary'>Add Hospital</button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="addbed"><button className='btn btn-primary'>Add Bed</button></Link>
        <Outlet></Outlet>

        </center>
        

    </div>
  )
}

export default AdminDashboard