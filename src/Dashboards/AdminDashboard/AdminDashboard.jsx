
import React from 'react';
import AdminSidebar from './AdminSidebar/AdminSidebar';
import { Outlet } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
 

      <div className="admin-content-wrapper">
        <div className="admin-sidebar-desktop">
          <AdminSidebar />
        </div>

        <main className="admin-main-content">
          <Outlet />
        </main>
      </div>

      <footer className="admin-footer-mobile">
        <AdminSidebar /> {/* Reuse same sidebar links here but styled horizontally */}
      </footer>
    </div>
  );
};

export default AdminDashboard;
