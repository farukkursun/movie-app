import React, { useContext } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { MovieContext } from "../context/AuthContext";

const MyNavbar = () => {
  const { currentUser } = useContext(MovieContext);
  console.log(currentUser);
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="ms-2">
        <Link className="nav-link" to="/">
          React Movie App
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          {currentUser && <h6 className="user">{currentUser?.displayName}</h6>}

          <Link className="nav-link" to="/register">
            Register
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" onClick={() => logOut()} role="button" href="#">
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
