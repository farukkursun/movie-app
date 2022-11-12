import React from "react";
// import Login from '../pages/Login'
// import Register from '../pages/Register'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  >
          <Link className="nav-link" to="/">
            React Movie App
          </Link>
          
        </Navbar.Brand>
        <Nav className="me">
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Nav.Link href="#pricing">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

{
  /* <Register/> 
     <Login/> */
}
