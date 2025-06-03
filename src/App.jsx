import React from 'react'
import Navbarr from './Components/Navbarr'
import {Route,Routes} from "react-router-dom"
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import AdminDashboard from './Dashboards/AdminDashboard/AdminDashboard'
const App = () => {
  return (
    <div>
         <Navbarr/>
         <Routes>
          <Route path="/login" element={<Login/>}> </Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>

         </Routes>
        
    </div>
  )
}

export default App
