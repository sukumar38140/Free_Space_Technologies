
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          TechCorp Solutions
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/career" 
              className={isActive('/career') ? 'active' : ''}
            >
              Career
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/admin" 
              className={`${isActive('/admin') ? 'active' : ''} text-warning`}
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
