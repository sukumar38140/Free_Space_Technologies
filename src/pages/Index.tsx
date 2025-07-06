
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      {/* Hero Section with Background Animation */}
      <section className="hero-section bg-animated">
        {/* Floating Background Elements */}
        <div className="floating-blur animate-delay-100" 
             style={{ 
               top: '10%', 
               left: '15%', 
               width: '300px', 
               height: '300px' 
             }} />
        <div className="floating-blur animate-delay-500" 
             style={{ 
               top: '60%', 
               right: '10%', 
               width: '200px', 
               height: '200px' 
             }} />
        <div className="floating-blur animate-delay-1000" 
             style={{ 
               bottom: '20%', 
               left: '5%', 
               width: '150px', 
               height: '150px' 
             }} />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="animate-fade-up">
                  <h1 className="display-1 mb-4">
                    Transform Your Business with Modern Technology
                  </h1>
                  <p className="lead mb-5">
                    We deliver comprehensive technology solutions that drive innovation, 
                    streamline operations, and accelerate growth for businesses of all sizes.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link to="/services" className="btn-clean-primary floating-element">
                      Explore Solutions
                    </Link>
                    <Link to="/contact" className="btn-clean-secondary floating-element-reverse">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="text-center animate-fade-up animate-delay-200">
                <div className="mt-5 mt-lg-0 floating-element">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                    alt="Modern Technology Solutions"
                    className="img-fluid rounded-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Stats Section with Animated Background */}
      <section className="stats-section section-padding bg-animated">
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <Row className="text-center">
              <Col lg={3} md={6} className="mb-4 mb-lg-0">
                <div className="animate-fade-up floating-element">
                  <div className="stat-number animate-pulse-slow">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4 mb-lg-0">
                <div className="animate-fade-up animate-delay-100 floating-element-reverse">
                  <div className="stat-number animate-pulse-slow">250+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </Col>
              <Col lg={3} md={6} className="mb-4 mb-lg-0">
                <div className="animate-fade-up animate-delay-200 floating-element">
                  <div className="stat-number animate-pulse-slow">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <div className="animate-fade-up animate-delay-300 floating-element-reverse">
                  <div className="stat-number animate-pulse-slow">99.9%</div>
                  <div className="stat-label">Uptime Guarantee</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Services Preview with Background Animation */}
      <section className="section-padding bg-animated">
        {/* Additional floating elements */}
        <div className="floating-blur animate-delay-200" 
             style={{ 
               top: '30%', 
               right: '20%', 
               width: '250px', 
               height: '250px' 
             }} />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <Row>
              <Col lg={12} className="text-center mb-5">
                <div className="animate-fade-up floating-element">
                  <h2 className="display-2 mb-3">What We Offer</h2>
                  <p className="lead">
                    Comprehensive technology services tailored to your business needs
                  </p>
                </div>
              </Col>
            </Row>
            
            <div className="services-grid">
              <Card className="professional-card animate-fade-up floating-element">
                <div className="service-icon animate-rotate-slow">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <Card.Body className="p-0">
                  <h4 className="mb-3">Web Development</h4>
                  <p className="text-muted">
                    Modern, responsive websites and web applications built with cutting-edge technologies 
                    and best practices for optimal performance.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="professional-card animate-fade-up animate-delay-100 floating-element-reverse">
                <div className="service-icon animate-pulse-slow">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <Card.Body className="p-0">
                  <h4 className="mb-3">Mobile Solutions</h4>
                  <p className="text-muted">
                    Native and cross-platform mobile applications for iOS and Android 
                    that deliver exceptional user experiences.
                  </p>
                </Card.Body>
              </Card>
              
              <Card className="professional-card animate-fade-up animate-delay-200 floating-element">
                <div className="service-icon animate-rotate-slow">
                  <i className="fas fa-cloud"></i>
                </div>
                <Card.Body className="p-0">
                  <h4 className="mb-3">Cloud Services</h4>
                  <p className="text-muted">
                    Scalable cloud infrastructure and migration services for enhanced 
                    performance, security, and cost efficiency.
                  </p>
                </Card.Body>
              </Card>
            </div>
            
            <Row className="text-center mt-5">
              <Col>
                <Link to="/services" className="btn-clean-primary floating-element">
                  View All Services
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Why Choose Us with Enhanced Animation */}
      <section className="feature-highlight bg-animated">
        {/* Multiple floating background elements */}
        <div className="floating-blur animate-delay-300" 
             style={{ 
               top: '15%', 
               left: '10%', 
               width: '180px', 
               height: '180px' 
             }} />
        <div className="floating-blur animate-delay-700" 
             style={{ 
               bottom: '25%', 
               right: '15%', 
               width: '220px', 
               height: '220px' 
             }} />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="animate-fade-up floating-element">
                  <h2 className="display-2 mb-4">Why Choose Free Space Technologies?</h2>
                  <p className="lead mb-4">
                    We combine industry expertise with innovative approaches to deliver 
                    solutions that drive real business results.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3 d-flex align-items-center animate-fade-up animate-delay-100">
                      <i className="fas fa-check-circle text-success me-3 animate-pulse-slow"></i>
                      Expert team with 10+ years experience
                    </li>
                    <li className="mb-3 d-flex align-items-center animate-fade-up animate-delay-200">
                      <i className="fas fa-check-circle text-success me-3 animate-pulse-slow"></i>
                      Agile development methodology
                    </li>
                    <li className="mb-3 d-flex align-items-center animate-fade-up animate-delay-300">
                      <i className="fas fa-check-circle text-success me-3 animate-pulse-slow"></i>
                      Scalable and secure solutions
                    </li>
                    <li className="mb-3 d-flex align-items-center animate-fade-up animate-delay-500">
                      <i className="fas fa-check-circle text-success me-3 animate-pulse-slow"></i>
                      Ongoing support and maintenance
                    </li>
                  </ul>
                  <Link to="/about" className="btn-clean-primary floating-element-reverse">
                    Learn More About Us
                  </Link>
                </div>
              </Col>
              <Col lg={6}>
                <div className="animate-fade-up animate-delay-200 floating-element">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                    alt="Professional Development Team"
                    className="img-fluid rounded-3"
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CTA Section with Final Animation */}
      <section className="section-padding bg-animated">
        {/* Final floating elements */}
        <div className="floating-blur animate-delay-500" 
             style={{ 
               top: '50%', 
               left: '50%', 
               width: '300px', 
               height: '300px',
               transform: 'translate(-50%, -50%)'
             }} />
        
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-container">
            <Row>
              <Col lg={12} className="text-center">
                <div className="animate-fade-up floating-element">
                  <h2 className="display-2 mb-4">Ready to Get Started?</h2>
                  <p className="lead mb-5">
                    Let's discuss your project and explore how we can help you achieve your goals.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/contact" className="btn-clean-primary floating-element animate-delay-100">
                      Contact Us Today
                    </Link>
                    <Link to="/career" className="btn-clean-secondary floating-element-reverse animate-delay-200">
                      Join Our Team
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
