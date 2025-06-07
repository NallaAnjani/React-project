// import React from 'react'
// import AdminSidebar from './AdminSidebar/AdminSidebar'
// import { Outlet } from 'react-router-dom'



// const AdminDashboard = () => {
//   return (
//     <div>
     
//      <div>
//       <AdminSidebar/>
//      </div>
//      <div>mainbar 
//       <Outlet/>
//      </div>
      
//     </div>
//   )
// }

// export default AdminDashboard
import React from 'react';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import { Outlet } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard d-flex">
      <div className="sidebar">
        <AdminSidebar />
      </div>
      <div className="mainbar p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
