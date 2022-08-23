import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
function DashboardLayout() {
  return (
    <div>
           <Navbar/>
           <div id="content">
            <Outlet/>
           </div>
    </div>
  )
}

export default DashboardLayout