import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { authentication, db } from "../../config_details/Config_details";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [SignupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const accountcreacted = await createUserWithEmailAndPassword(
        authentication,
        SignupDetails.email,
        SignupDetails.password
      );

      alert("Signup successful");
      console.log(accountcreacted);

      await setDoc(doc(db, `${SignupDetails.role}s`, SignupDetails.name), {
        name: SignupDetails.name,
        email: SignupDetails.email, // fixed typo from eamil to email
        role: SignupDetails.role,
        id: Date.now(),
      });

      await updateProfile(accountcreacted.user, {
        displayName: SignupDetails.name,
      });

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <Form className="signup-form" onSubmit={handleSignUp}>
        <h2>Signup</h2>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name"
            onChange={(e) =>
              setSignupDetails({ ...SignupDetails, name: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setSignupDetails({ ...SignupDetails, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setSignupDetails({ ...SignupDetails, password: e.target.value })
            }
          />
        </Form.Group>

        <Form.Select
          aria-label="Select your role"
          className="mb-3"
          onChange={(e) =>
            setSignupDetails({ ...SignupDetails, role: e.target.value })
          }
        >
          <option>Choose your role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Form.Select>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
