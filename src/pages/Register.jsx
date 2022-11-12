import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="enter last name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setRegisterEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => setRegisterPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
{
  /* <div>
      <div>
        <h3>Register User</h3>
        <input
          placeholder="email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}>Create User</button>
      </div>
    </div> */
}
