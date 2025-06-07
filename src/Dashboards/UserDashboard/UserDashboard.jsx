import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import "./UserDashboard.css"
const UserDashboard = () => {
  return (
    <div id="userdashboard">
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="mainbar" style={{color:"blue"}}>mainbar</div>
    </div>
  )
}

export default UserDashboard
