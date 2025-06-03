
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { authentication } from '../../config_details/Config_details';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate =useNavigate()

    const [LoginDetails, setLoginDetails] = useState({
    email: "",  
    password: "",
    role: ""
  });
  const handleLogin=async(e)=>{
    e.preventDefault();
     const {email,password,role}=LoginDetails
try{
      const loggedinuser =  await signInWithEmailAndPassword(authentication,email,password)
       alert("login successfullly....!")
       
       if (role == "admin"){
        localStorage.setItem("loggedinAdmin",JSON.stringify(loggedinuser))
       }
       else{
        localStorage.setItem("loggedinUser",JSON.stringify(loggedinuser))
        }
       navigate(`/${role}Dashboard`)
    }
    catch(err){
      console.log(err)
    }
    
        
    
      }

  
  return (
    <div>
       <Form onSubmit={handleLogin}>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address:</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setLoginDetails({...LoginDetails,email:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" onChange={(e)=>setLoginDetails({...LoginDetails,password:e.target.value})}/>
      </Form.Group>
       <Form.Select aria-label="Default select example" onChange={(e)=>setLoginDetails({...LoginDetails,role:e.target.value})}>
      <option>Choose your role</option>
      <option value="user">user</option>
      <option value="admin">Admin</option>
     </Form.Select>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
    </div>
  )
}

export default Login

