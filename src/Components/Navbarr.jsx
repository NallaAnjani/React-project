import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import './Navbar.css';

const Navbarr = () => {
  const navigate = useNavigate();
  const loggedinuser = JSON.parse(localStorage.getItem('loggedinAdmin'));
  const auth = getAuth();

  const handlelogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('loggedinAdmin');
      alert('Logged out');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          🎉 Event Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-links" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {loggedinuser ? (
            <Button variant="outline-light" onClick={handlelogout}>
              Logout
            </Button>
          ) : (
            <div className="auth-buttons">
              <Link to="/signup" className="btn btn-outline-light me-2">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
