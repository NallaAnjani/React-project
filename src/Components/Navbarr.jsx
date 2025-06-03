import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link ,useNavigate} from 'react-router-dom';
import { signOut,getAuth } from 'firebase/auth';
import "./Navbar.css"
const Navbarr = () => {
  const navigate = useNavigate()
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinAdmin"))
  const auth=getAuth()
  const handlelogout=async()=>{
    try{
         await signOut(auth);
         localStorage.removeItem("loggedinAdmin")
         alert("logged out")
         navigate("/login")

    }

    catch(err){
      console.log(err)
    }

  }
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Event Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">about</Nav.Link>
            
            <Nav.Link href="#">services</Nav.Link>
            <Nav.Link href="#">contact</Nav.Link>

          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          {loggedinuser?<button onClick={handlelogout}>logout</button>:<><Link to="/signup">SignUp</Link>
              <Link  to="/login">Login</Link> </>}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
