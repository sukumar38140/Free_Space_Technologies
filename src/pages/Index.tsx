
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
                  <span className="d-block">Next-Gen Solutions</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  We deliver comprehensive technology solutions that drive innovation, 
                  streamline operations, and accelerate growth for businesses of all sizes.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/services">
                    <Button 
                      className="btn-gradient-secondary"
                      size="lg"
                    >
                      Discover Solutions
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline-light" 
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="animate-fade-right animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="Modern Technology Solutions"
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
                <p className="text-muted">Successful digital transformations</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="stats-counter">250+</div>
                <h5>Happy Clients</h5>
                <p className="text-muted">Satisfied customers worldwide</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="stats-counter">24/7</div>
                <h5>Support Available</h5>
                <p className="text-muted">Round-the-clock assistance</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="stats-counter">99.9%</div>
                <h5>Uptime Guarantee</h5>
                <p className="text-muted">Reliable and stable solutions</p>
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
              <h2 className="section-title animate-fade-up">What We Offer</h2>
              <p className="section-subtitle animate-fade-up">
                Comprehensive technology services tailored to your business needs
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up">
                <div className="card-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Web Development</h4>
                  <p>Modern, responsive websites and web applications built with cutting-edge technologies.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Mobile Solutions</h4>
                  <p>Native and cross-platform mobile applications for iOS and Android devices.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Cloud Services</h4>
                  <p>Scalable cloud infrastructure and migration services for enhanced performance.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <Link to="/services">
                <Button 
                  className="btn-gradient-primary"
                  size="lg"
                >
                  View All Services
                </Button>
              </Link>
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
                <h2 className="display-5 fw-bold mb-4">Why Choose Free Space Technologies?</h2>
                <p className="lead mb-4">
                  We combine industry expertise with innovative approaches to deliver 
                  solutions that drive real business results.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Expert team with 10+ years experience
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Agile development methodology
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Scalable and secure solutions
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Ongoing support and maintenance
                  </li>
                </ul>
                <Link to="/about">
                  <Button 
                    variant="outline-light" 
                    size="lg"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="animate-fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="Professional Development Team"
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
                <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
                <p className="lead mb-4">
                  Let's discuss your project and explore how we can help you achieve your goals.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/contact">
                    <Button 
                      className="btn-gradient-primary"
                      size="lg"
                    >
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link to="/career">
                    <Button 
                      className="btn-gradient-secondary"
                      size="lg"
                    >
                      Join Our Team
                    </Button>
                  </Link>
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
