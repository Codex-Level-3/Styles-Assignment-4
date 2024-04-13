"use client";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <Navbar className="bg-gray-700 font-bold">
      <Container>
        <Navbar.Brand className="text-white" href="/">
          &copy; 2024 Kitchen Chronicles
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-white">
            Created by:{" "}
            <a
              className="text-white no-underline"
              href="https://github.com/Laqwanda-Nettles"
            >
              Laqwanda Nettles
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
