import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = () => {
  const loggedinuser =JSON.parse(localStorage.getItem("loggedinUser"));
  console.log(loggedinuser.user.displayName)

  return (
    <div className="user-sidebar">
      {/* <span>welcome {loggedinuser.user.displayName}</span> */}
      <div className="welcome-heading">
  Welcome {loggedinuser.user.displayName}...!
</div>

      {/* <NavLink to="view-events" className="sidebar-btn">🎉 View Events</NavLink>
      <NavLink to="my-bookings" className="sidebar-btn">🧾 My Bookings</NavLink> */}
     
      
    </div>
  );
};

export default UserSidebar;
