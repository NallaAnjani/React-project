import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authentication } from '../../config_details/Config_details';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();

  const [LoginDetails, setLoginDetails] = useState({
    email: "",  
    password: "",
    role: ""
  });

  const handleLogin = async (e) => {
  e.preventDefault();
  const { email, password, role } = LoginDetails;

  if (!email || !password || !role || role === "Choose your role") {
    alert("Please fill all fields and select your role.");
    return;
  }

  try {
    const loggedinuser = await signInWithEmailAndPassword(authentication, email, password);
    alert("Login successful!");

    if (role === "admin") {
      localStorage.setItem("loggedinAdmin", JSON.stringify(loggedinuser));
    } else {
      localStorage.setItem("loggedinUser", JSON.stringify(loggedinuser));
    }

    navigate(`/${role}Dashboard`);
  } catch (err) {
    if (err.code === "auth/invalid-credential") {
      alert("No user found. Please sign up first.");
    } 
     else {
      alert("Login failed. Please check your credentials.");
    }
    console.error(err);
  }
};


  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <Form.Group className="mb-3">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setLoginDetails({ ...LoginDetails, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setLoginDetails({ ...LoginDetails, password: e.target.value })}
          />
        </Form.Group>

        <Form.Select
          className="mb-3"
          onChange={(e) => setLoginDetails({ ...LoginDetails, role: e.target.value })}
        >
          <option>Choose your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Form.Select>

        <Button variant="primary" type="submit">Login</Button>
     <Link to="/signup">Go to signup form</Link>
        
      </Form>
    </div>
  );
}

export default Login;
