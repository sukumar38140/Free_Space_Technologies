
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-section">
              <h5>TechCorp Solutions</h5>
              <p className="mb-3">
                Leading the future of technology with innovative solutions 
                and exceptional service. Your success is our mission.
              </p>
              <div className="social-links">
                <a href="#" className="footer-link me-3">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#" className="footer-link me-3">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="footer-link">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4">
            <div className="footer-section">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="/services" className="footer-link">Services</Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="footer-link">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link to="/career" className="footer-link">Career</Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link">Web Development</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Mobile Apps</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Cloud Solutions</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Digital Marketing</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Consulting</a>
                </li>
              </ul>
            </div>
          </Col>
          
          <Col lg={3} md={6} className="mb-4">
            <div className="footer-section">
              <h5>Contact Info</h5>
              <div className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Tech Street, Digital City, DC 12345
              </div>
              <div className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </div>
              <div className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@techcorp.com
              </div>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col md={8}>
            <p className="mb-0">
              &copy; 2024 TechCorp Solutions. All rights reserved.
            </p>
          </Col>
          <Col md={4} className="text-end">
            <Link to="/privacy-policy" className="footer-link me-3">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="footer-link">
              Terms of Service
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
