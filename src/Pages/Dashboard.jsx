import React from 'react'

import Sidebar from '../Component/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div >
      <div className="row">
        <div className="col-2" >
          <Sidebar />
        </div>
        <div className="col-10" >
       <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard