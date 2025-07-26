// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminSidebar.css';


// import { BsCalendarPlus, BsJournalText, BsCheck2Square, BsPencilSquare } from 'react-icons/bs';

// const AdminSidebar = () => {
//   return (
//     <div className="admin-sidebar">
//       <h3 className="sidebar-title">Admin Panel</h3>
//       <Link to="add_event" className="sidebar-link">
//         <BsCalendarPlus className="icon" /> Add New Event
//       </Link>
//       <Link to="all_booking" className="sidebar-link">
//         <BsJournalText className="icon" />   View All Approved Bookings
//       </Link>
//       <Link to="approve_reject" className="sidebar-link">
//         <BsCheck2Square className="icon" /> Approve / Reject Bookings
//       </Link>
//       <Link to="edit_delete" className="sidebar-link">
//         <BsPencilSquare className="icon" />   Edit / Delete Event
//       </Link>
//     </div>
//   );
// };

// export default AdminSidebar;



// 2nd code
// src/components/AdminSidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsCalendarPlus, 
  BsJournalText, 
  BsCheck2Square, 
  BsPencilSquare,
  BsList,
  BsXLg
} from 'react-icons/bs';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu toggle button */}
      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <BsXLg /> : <BsList />}
      </div>
      
      {/* Desktop Sidebar */}
      <div className={`admin-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <h3 className="sidebar-title">Admin Panel</h3>
        <div className="sidebar-links">
          <Link to="add_event" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
            <BsCalendarPlus className="icon" /> Add New Event
          </Link>
          <Link to="all_booking" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
            <BsJournalText className="icon" /> View All Approved Bookings
          </Link>
          <Link to="approve_reject" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
            <BsCheck2Square className="icon" /> Approve / Reject Bookings
          </Link>
          <Link to="edit_delete" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
            <BsPencilSquare className="icon" /> Edit / Delete Event
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;