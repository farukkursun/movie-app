import React, { useState } from "react";
import { createRegister, signInWithGoogle } from "../auth/firebase";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //forma kullanilacal state olusturma
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`;
    createRegister(registerEmail, registerPassword, displayName, navigate);
    // console.log(firstName, lastName, registerEmail,registerPassword);
  };

  return (
    <div className="d-flex">
      <div className="registerana"></div>
      <Form onSubmit={handleSubmit} className="register text-center">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className="text-center">Name</Form.Label>
          <Form.Control
            required
            className="w-75 m-auto"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3m" controlId="latsname">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            required
            className="w-75 m-auto"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="enter last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            className="w-75 m-auto"
            onChange={(e) => setRegisterEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            className="w-75 m-auto"
            onChange={(e) => setRegisterPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="me-5 mt-5">
          Register
        </Button>
        <Button
          className="mt-5"
          variant="primary"
          type="button"
          onClick={() => signInWithGoogle(navigate)}
        >
          mit google
        </Button>
      </Form>
    </div>
  );
};

export default Register;
