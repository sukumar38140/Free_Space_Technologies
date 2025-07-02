
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div className="animate-fade-left">
                <h1 className="display-3 fw-bold text-white mb-4">
                  Transform Your Business with 
                  <span className="d-block">Cutting-Edge Technology</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  We deliver innovative solutions that drive growth, enhance efficiency, 
                  and propel your business into the digital future.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Button 
                    as={Link} 
                    to="/services" 
                    className="btn-gradient-secondary"
                    size="lg"
                  >
                    Our Services
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-light" 
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="animate-fade-right animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Technology Solutions"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up">
                <div className="stats-counter">500+</div>
                <h5>Projects Completed</h5>
                <p className="text-muted">Successfully delivered projects worldwide</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="stats-counter">50+</div>
                <h5>Expert Team</h5>
                <p className="text-muted">Skilled professionals at your service</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="stats-counter">24/7</div>
                <h5>Support</h5>
                <p className="text-muted">Round-the-clock customer assistance</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="stats-counter">99%</div>
                <h5>Satisfaction</h5>
                <p className="text-muted">Client satisfaction rate</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Our Core Services</h2>
              <p className="section-subtitle animate-fade-up">
                Comprehensive solutions tailored to your business needs
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up">
                <div className="card-icon">
                  <i className="fas fa-code"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Web Development</h4>
                  <p>Custom web applications built with modern technologies and best practices.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Mobile Apps</h4>
                  <p>Native and cross-platform mobile applications for iOS and Android.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Cloud Solutions</h4>
                  <p>Scalable cloud infrastructure and migration services for modern businesses.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Button 
                as={Link} 
                to="/services" 
                className="btn-gradient-primary"
                size="lg"
              >
                View All Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-gradient text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <div className="animate-fade-left">
                <h2 className="display-5 fw-bold mb-4">Why Choose TechCorp?</h2>
                <p className="lead mb-4">
                  We combine technical expertise with business acumen to deliver 
                  solutions that drive real results.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Proven track record of success
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Cutting-edge technology stack
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Agile development methodology
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Dedicated project management
                  </li>
                </ul>
                <Button 
                  as={Link} 
                  to="/about" 
                  variant="outline-light" 
                  size="lg"
                >
                  Learn More About Us
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="animate-fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                  alt="Team Collaboration"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="animate-fade-up">
                <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="lead mb-4">
                  Let's discuss how we can help you achieve your digital transformation goals.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    className="btn-gradient-primary"
                    size="lg"
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    as={Link} 
                    to="/career" 
                    className="btn-gradient-secondary"
                    size="lg"
                  >
                    Join Our Team
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Index;
