import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <h5>CONTACT US</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Locate a Showroom</a></li>
              <li><a href="#" className="text-decoration-none">Book a Test Drive</a></li>
              <li><a href="#" className="text-decoration-none">Schedule a Service</a></li>
              <li><a href="#" className="text-decoration-none">Contact Support</a></li>
            </ul>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </Col>
          <Col md={3}>
            <h5>SHOWROOM SERVICES</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Custom Build Your Luxury Car</a></li>
              <li><a href="#" className="text-decoration-none">Luxury Car Financing</a></li>
              <li><a href="#" className="text-decoration-none">Extended Warranty</a></li>
              <li><a href="#" className="text-decoration-none">Car Insurance Services</a></li>
              <li><a href="#" className="text-decoration-none">Pre-Owned Luxury Cars</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>EXPERIENCE LUXURY</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Our Heritage</a></li>
              <li><a href="#" className="text-decoration-none">Exclusive Events</a></li>
              <li><a href="#" className="text-decoration-none">Luxury Lifestyle Magazine</a></li>
              <li><a href="#" className="text-decoration-none">Partnered Hotels & Clubs</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>LEGAL & SUPPORT</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Terms & Conditions</a></li>
              <li><a href="#" className="text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none">Cookie Policy</a></li>
              <li><a href="#" className="text-decoration-none">FAQs</a></li>
            </ul>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4}>
            <p>&copy; Luxury Auto Showroom 2024. All Rights Reserved.</p>
          </Col>
          <Col md={8}>
            <div className='d-flex justify-content-end'>
              <a href="#" className="text-decoration-none px-3">Terms & Conditions</a>
              <a href="#" className="text-decoration-none px-3">Privacy Policy</a>
              <a href="#" className="text-decoration-none px-3">Contact Us</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

