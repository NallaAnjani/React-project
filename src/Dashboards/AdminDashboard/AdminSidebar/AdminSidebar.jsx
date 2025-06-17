import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

// React Icons
import { BsCalendarPlus, BsJournalText, BsCheck2Square, BsPencilSquare } from 'react-icons/bs';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>
      <Link to="add_event" className="sidebar-link">
        <BsCalendarPlus className="icon" /> Add New Event
      </Link>
      <Link to="all_booking" className="sidebar-link">
        <BsJournalText className="icon" /> View All Bookings
      </Link>
      <Link to="approve_reject" className="sidebar-link">
        <BsCheck2Square className="icon" /> Approve / Reject Bookings
      </Link>
      <Link to="edit_delete" className="sidebar-link">
        <BsPencilSquare className="icon" />   Edit / Delete Event
      </Link>
    </div>
  );
};

export default AdminSidebar;
