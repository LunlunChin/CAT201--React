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
        <Nav className="ml-auto">
          <Nav.Link className="text-white mx-5 h" href="/ ">
            <span className="h5">Home</span>
          </Nav.Link>
          <Nav.Link className="text-white mx-5 h4" href="about">
            <span className="h5">About</span>
          </Nav.Link>
          <Nav.Link className="text-white mx-5 h4" href="services">
            <span className="h5"> Services</span>
          </Nav.Link>
          <Nav.Link className="text-white mx-5 h4" href="team">
            <span className="h5">Team</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
