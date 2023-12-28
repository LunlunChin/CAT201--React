import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import genai from "../assets/genaix-logo.jpg";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <a className="navbar-brand" href="/">
        <img src={genai} alt="Logo" style={{ width: "100px" }} />{" "}
        {/* adjust width as needed */}
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link className="text-white" href="/ ">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="about">
            About
          </Nav.Link>
          <Nav.Link className="text-white" href="services">
            Services
          </Nav.Link>
          <Nav.Link className="text-white" href="team">
            Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
