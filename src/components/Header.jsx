import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'; // Import the CSS file for styles

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://i.pinimg.com/736x/2e/36/24/2e3624914df5908c0dd38935faea5c4d--luxury-car-dealers-logo-design-contest.jpg"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Imports Limited Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fw-bold nav-links">
            <Nav.Link href="#">Models</Nav.Link>
            <Nav.Link href="#">Electric</Nav.Link>
            <Nav.Link href="#">Configurator</Nav.Link>
            <Nav.Link href="#">Visit Online Shop</Nav.Link>
            <Nav.Link href="#">More Luxury Imports</Nav.Link>
          </Nav>
          <Nav className="icons">
            <Nav.Link href="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-solid fa-location-dot"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-solid fa-user"></i> {/* User profile icon */}
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-solid fa-bell"></i> {/* Notifications icon */}
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fa-solid fa-heart"></i> {/* Wishlist icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

