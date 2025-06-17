
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
        Admin Dashboard
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
