import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createLogin, signInWithGoogle } from "../auth/firebase";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createLogin(loginEmail, loginPassword, navigate);
    console.log(loginEmail, loginPassword);
  };

  return (<div className="d-flex">
  <div className="loginana"></div>
    <Form onSubmit={handleSubmit} className='login text-center text-white '>
      <Form.Group className="mb-3 text-center" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setLoginEmail(e.target.value)}
          type="email"
          className="w-75 m-auto"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3 text-center text-white " controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setLoginPassword(e.target.value)}
          type="password"
          className="w-75 m-auto"
          placeholder="Password"
        />
      </Form.Group>
      
      <Button className="  me-5 mt-5" variant="primary" type="submit">
        Login
      </Button>
      <Button
        className="mt-5"
        variant="primary"
        type="button"
        onClick={() => signInWithGoogle(navigate)}
      >
        Mit google
      </Button>
    </Form>
    </div>
  );
};

export default Login;

