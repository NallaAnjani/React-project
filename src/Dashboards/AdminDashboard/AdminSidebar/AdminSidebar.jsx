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


// AdminSidebar.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsCalendarPlus,
  BsJournalText,
  BsCheck2Square,
  BsPencilSquare,
} from 'react-icons/bs';
import './AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>

      <Container fluid className="d-none d-md-block">
        <div className="sidebar-link-wrapper">
          <Link to="add_event" className="sidebar-link">
            <BsCalendarPlus className="icon" /> Add New Event
          </Link>
          <Link to="all_booking" className="sidebar-link">
            <BsJournalText className="icon" /> View All Approved Bookings
          </Link>
          <Link to="approve_reject" className="sidebar-link">
            <BsCheck2Square className="icon" /> Approve / Reject Bookings
          </Link>
          <Link to="edit_delete" className="sidebar-link">
            <BsPencilSquare className="icon" /> Edit / Delete Event
          </Link>
        </div>
      </Container>

      {/* Mobile View: Horizontal Footer Style */}
      <Container fluid className="d-block d-md-none fixed-bottom bg-white">
        <Row className="text-center">
          <Col>
            <Link to="add_event" className="mobile-link">
              <BsCalendarPlus size={18} color="#003B8B" />
              <div style={{ fontSize: '12px', color: '#003B8B' }}>Add</div>
            </Link>
          </Col>
          <Col>
            <Link to="all_booking" className="mobile-link">
              <BsJournalText size={18} color="#003B8B" />
              <div style={{ fontSize: '12px', color: '#003B8B' }}>View</div>
            </Link>
          </Col>
          <Col>
            <Link to="approve_reject" className="mobile-link">
              <BsCheck2Square size={18} color="#003B8B" />
              <div style={{ fontSize: '12px', color: '#003B8B' }}>Approve</div>
            </Link>
          </Col>
          <Col>
            <Link to="edit_delete" className="mobile-link">
              <BsPencilSquare size={18} color="#003B8B" />
              <div style={{ fontSize: '12px', color: '#003B8B' }}>Edit</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminSidebar;






// 2nd code
// src/components/AdminSidebar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   BsCalendarPlus, 
//   BsJournalText, 
//   BsCheck2Square, 
//   BsPencilSquare,
//   BsList,
//   BsXLg
// } from 'react-icons/bs';
// import './AdminSidebar.css';

// const AdminSidebar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
      
//       {/* Desktop Sidebar */}
//       <div className={`admin-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
//         <h3 className="sidebar-title">Admin Panel</h3>
//         <div className="sidebar-links">
//           <Link to="add_event" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
//             <BsCalendarPlus className="icon" /> Add New Event
//           </Link>
//           <Link to="all_booking" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
//             <BsJournalText className="icon" /> View All Approved Bookings
//           </Link>
//           <Link to="approve_reject" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
//             <BsCheck2Square className="icon" /> Approve / Reject Bookings
//           </Link>
//           <Link to="edit_delete" className="sidebar-link" onClick={() => setMobileMenuOpen(false)}>
//             <BsPencilSquare className="icon" /> Edit / Delete Event
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminSidebar;