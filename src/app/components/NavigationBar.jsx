"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-gray-700 font-bold">
      <Container>
        <Navbar.Brand className="text-white" href="/">
          Kitchen Chronicles
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-white text-white"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="text-white hover:bg-rose-400 hover:rounded"
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-white hover:bg-rose-400 hover:rounded"
              href="#featured"
            >
              Featured
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
