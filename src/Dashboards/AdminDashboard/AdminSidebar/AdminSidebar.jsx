// import React from 'react'
// import {Link} from "react-router-dom"
// const AdminSidebar = () => {
//   return (
//     <div>
//      <Link to="add_event">Add New Event</Link>
//      <Link to="all_booking">View All Booking</Link>
//      <Link to="approve_reject">Approve/Reject Bookings</Link>
//      <Link to="edit_delete"> Edit or Delete Event</Link>

//     </div>
//   )
// }

// export default AdminSidebar
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'; // We'll create this next

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>
      <Link to="add_event" className="sidebar-link">
        <i className="bi bi-calendar-plus"></i> Add New Event
      </Link>
      <Link to="all_booking" className="sidebar-link">
        <i className="bi bi-journal-text"></i> View All Bookings
      </Link>
      <Link to="approve_reject" className="sidebar-link">
        <i className="bi bi-check2-square"></i> Approve / Reject Bookings
      </Link>
      <Link to="edit_delete" className="sidebar-link">
        <i className="bi bi-pencil-square"></i> Edit / Delete Event
      </Link>
    </div>
  );
};

export default AdminSidebar;
