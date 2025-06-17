import React from 'react';
import { Outlet } from 'react-router-dom';

import './UserDashboard.css';
import UserSidebar from './UserSidebar/UserSidebar';

const UserDashboard = () => {
  return (

    <div className="user-dashboard">
     
    <UserSidebar/>
    </div>
  );
};

export default UserDashboard;
