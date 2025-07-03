
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
                  Pioneering the Future with 
                  <span className="d-block">Intelligent Technologies</span>
                </h1>
                <p className="lead text-white-50 mb-4">
                  We specialize in AI agents, IoT solutions, robotics, and machine learning 
                  to create intelligent systems that transform industries and shape tomorrow.
                </p>
                <div className="d-flex gap-3 flex-wrap">
                  <Link to="/services">
                    <Button 
                      className="btn-gradient-secondary"
                      size="lg"
                    >
                      Explore Our Tech
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline-light" 
                      size="lg"
                    >
                      Start Innovation
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="animate-fade-right animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                  alt="AI Robotics Technology"
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
                <div className="stats-counter">200+</div>
                <h5>AI Models Deployed</h5>
                <p className="text-muted">Intelligent systems powering businesses</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="stats-counter">150+</div>
                <h5>IoT Devices Connected</h5>
                <p className="text-muted">Smart sensors and monitoring systems</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="stats-counter">24/7</div>
                <h5>AI Monitoring</h5>
                <p className="text-muted">Continuous intelligent system support</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="stats-counter">99%</div>
                <h5>System Reliability</h5>
                <p className="text-muted">Robust and dependable solutions</p>
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
              <h2 className="section-title animate-fade-up">Our Core Expertise</h2>
              <p className="section-subtitle animate-fade-up">
                Advanced technologies tailored for intelligent automation
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up">
                <div className="card-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>AI Agents</h4>
                  <p>Intelligent automation systems that learn, adapt, and optimize business processes.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">
                  <i className="fas fa-wifi"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>IoT Solutions</h4>
                  <p>Connected ecosystems with smart sensors and real-time data analytics.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <Card.Body className="text-center">
                  <h4>Robotics</h4>
                  <p>Advanced robotics systems for industrial automation and intelligent manufacturing.</p>
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
                  Explore All Technologies
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
                  We combine deep technical expertise with innovative thinking to deliver 
                  intelligent solutions that transform industries.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Cutting-edge AI and ML expertise
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    End-to-end IoT solutions
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Advanced robotics integration
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check-circle me-3"></i>
                    Custom intelligent systems
                  </li>
                </ul>
                <Link to="/about">
                  <Button 
                    variant="outline-light" 
                    size="lg"
                  >
                    Discover Our Innovation
                  </Button>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="animate-fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="IoT Circuit Board Technology"
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
                <h2 className="display-5 fw-bold mb-4">Ready to Build the Future?</h2>
                <p className="lead mb-4">
                  Join us in creating intelligent systems that push the boundaries of what's possible.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/contact">
                    <Button 
                      className="btn-gradient-primary"
                      size="lg"
                    >
                      Start Your Innovation
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
