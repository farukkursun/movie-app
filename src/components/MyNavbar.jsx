import React, { useContext } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { MovieContext } from "../context/AuthContext";

const MyNavbar = () => {
  const { currentUser } = useContext(MovieContext);
  console.log(currentUser);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            React Movie App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser && <h6 className="user">{currentUser?.displayName}</h6>}

            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Nav.Link onClick={() => logOut()} role="button" href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
