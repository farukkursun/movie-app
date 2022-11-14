import React, { useState } from "react";
import {createRegister} from '../auth/firebase'
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //forma kullanilacal state olusturma
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    createRegister(registerEmail, registerPassword,navigate)
    console.log(firstName, lastName, registerEmail,registerPassword);
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="latsname">
        <Form.Label>LastName</Form.Label>
        <Form.Control
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="enter last name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => setRegisterEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
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
      <Button className="ms-3" variant="primary" type="button">
        mit google
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
