import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createLogin } from "../auth/firebase";

const Login = () => {
  
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
   const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      createLogin(loginEmail, loginPassword,navigate)
      console.log(loginEmail, loginPassword);
      
    };
    
  return (
    <Form onSubmit={handleSubmit}>
      
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setLoginEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setLoginPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Register
      </Button>
      <Button className="ms-3" variant="primary" type="button">
        mit google
      </Button>
    </Form>
  );
};

export default Login;


 {/* <div>
<div>
  <h3>login</h3>
  <input
    placeholder="email..."
    onChange={(event) => {
      setLoginEmail(event.target.value);
    }}
  />
  <input
    placeholder="password..."
    onChange={(event) => {
      setLoginPassword(event.target.value);
    }}
  />
  <button onClick={login}>login</button>
</div>

<h4>User logged in:</h4>
{user?.email}
<button onClick={logout}>Sign Out</button>
<div>
  <button onClick={signInWithGoogle}>Sign In Witg Google</button>
  {/* <h1>{localStorage.getItem("name")}</h1>
  <h1>{localStorage.getItem("email")}</h1>
  <img src={localStorage.getItem("profilePic")} alt="" /> 
</div>
</div>*/}