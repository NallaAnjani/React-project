
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link, useNavigate } from 'react-router-dom';
// import { signOut, getAuth } from 'firebase/auth';
// import './Navbar.css';

// const Navbarr = () => {
//   const navigate = useNavigate();
//   const auth = getAuth();

//   const loggedinAdmin = JSON.parse(localStorage.getItem('loggedinAdmin'));
//   const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem('loggedinAdmin');
//       localStorage.removeItem('loggedinUser');
//       navigate('/login');
//       alert('Logged out');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Navbar expand="lg"  className="custom-navbar" sticky="top">
//       <Container fluid className="nav-inner-container">
//         {/* Brand on the left */}
//         <Navbar.Brand as={Link} to="/" className="brand-text">
//           Event Management
//         </Navbar.Brand>

//         {/* Toggle for mobile */}
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll" className="justify-content-between">

          
//           {loggedinAdmin && !loggedinUser &&(
//                <Nav className="mx-auto nav-links">
//             <Nav.Link as={Link} to="/home">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/services">Services</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav> 
//             )}
          
               
//             {loggedinUser && (
//               <Nav className="mx-auto nav-links">
              
//                 <Nav.Link as={Link} to="/view-events">🎉 View Events</Nav.Link>
//                 <Nav.Link as={Link} to="/my-bookings">🧾 My Bookings</Nav.Link>
//                 <Nav.Link as={Link} to="/saved-events">Saved Events</Nav.Link>

//           </Nav> 
              
//             )}

//           {/* Right side buttons */}
//           {(loggedinAdmin || loggedinUser) ? (
//             <Button variant="outline-light" onClick={handleLogout}>
//               Logout
//             </Button>
//           ) : (
//             <div className="auth-buttons d-flex">
//               <Link to="/signup" className="btn btn-outline-light me-2">Sign Up</Link>
//               <Link to="/login" className="btn btn-light">Login</Link>
//             </div>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbarr;
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import './Navbar.css';

const Navbarr = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const loggedinAdmin = JSON.parse(localStorage.getItem('loggedinAdmin'));
  const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('loggedinAdmin');
      localStorage.removeItem('loggedinUser');
      navigate('/login');
      alert('Logged out');
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ Decide what to show in center nav
  const renderCenterLinks = () => {
    if (loggedinUser) {
      return (
        <>
          <Nav.Link as={Link} to="/view-events">🎉 View Events</Nav.Link>
          <Nav.Link as={Link} to="/my-bookings">🧾 My Bookings</Nav.Link>
          <Nav.Link as={Link} to="/saved-events">Saved Events</Nav.Link>
        </>
      );
    } else if (loggedinAdmin) {
      return (
        <>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </>
      );
    } else if (location.pathname === '/') {
      return (
        <>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </>
      );
    }
    return null;
  };

  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container fluid className="nav-inner-container">
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="brand-text">
          Event Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">

          {/* Center Links */}
          <Nav className="mx-auto nav-links">
            {renderCenterLinks()}
          </Nav>

          {/* Right-Side Buttons */}
          {(loggedinAdmin || loggedinUser) ? (
            <Button variant="outline-light" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <div className="auth-buttons d-flex">
              <Link to="/signup" className="btn btn-outline-light me-2">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
