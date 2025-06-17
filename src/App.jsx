import React from 'react'
import Navbarr from './Components/Navbarr'
import {Route,Routes} from "react-router-dom"
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard'
import Home from './Components/Home/Home'
import UserDashboard from './Dashboards/UserDashboard/UserDashboard'
import AddNewEvent from './Dashboards/AdminDashboard/AdminSidebar/AddNewEvent/AddNewEvent'
import ViewAllBookings from './Dashboards/AdminDashboard/AdminSidebar/ViewAllBookings/ViewAllBookings'
import ApproveRejectBookings from './Dashboards/AdminDashboard/AdminSidebar/ApproveRejectBookings/ApproveRejectBookings'
import {EditDeleteEvent} from './Dashboards/AdminDashboard/AdminSidebar/EditDeleteEvent/EditDeleteEvent'
import ViewAllEvents from './Dashboards/UserDashboard/UserSidebar/ViewAllEvents/ViewAllEvents'
import MyBookings from './Dashboards/UserDashboard/UserSidebar/MyBookings/MyBookings'


const App = () => {
  return (
    <div>
         <Navbarr/>
         {/* <Home/> */}
         <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path='/adminDashboard' element={<AdminDashboard/>}>
            <Route path="add_event" element={<AddNewEvent/>}/>
            <Route path="all_booking" element={<ViewAllBookings/>}/>
            <Route path="approve_reject" element={<ApproveRejectBookings/>}/>
            <Route path="edit_delete" element={<EditDeleteEvent/>}/>
          </Route>
          <Route path='/userDashboard' element={<UserDashboard/>}>
        <Route path="view-events" element={<ViewAllEvents/>}></Route>
        <Route path="my-bookings" element={<MyBookings/>}></Route>
        
            
          </Route>

         </Routes>
         
        
    </div>
  )
}

export default App
