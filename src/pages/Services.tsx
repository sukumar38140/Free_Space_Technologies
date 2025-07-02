
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Security First'],
      price: 'Starting from $2,500'
    },
    {
      title: 'Mobile App Development',
      icon: 'fas fa-mobile-alt',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native Performance', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting from $5,000'
    },
    {
      title: 'Cloud Solutions',
      icon: 'fas fa-cloud',
      description: 'Scalable cloud infrastructure, migration services, and cloud-native applications.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'Cost Optimization', '24/7 Monitoring'],
      price: 'Starting from $1,500/month'
    },
    {
      title: 'Digital Marketing',
      icon: 'fas fa-chart-line',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
      price: 'Starting from $1,200/month'
    },
    {
      title: 'E-commerce Solutions',
      icon: 'fas fa-shopping-cart',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support'],
      price: 'Starting from $3,500'
    },
    {
      title: 'IT Consulting',
      icon: 'fas fa-users',
      description: 'Strategic IT consulting to align technology with your business objectives.',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Training'],
      price: 'Starting from $150/hour'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Our Services</h1>
                <p className="lead">
                  Comprehensive technology solutions designed to accelerate your business growth 
                  and digital transformation journey.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="custom-card h-100 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-icon">
                    <i className={service.icon}></i>
                  </div>
                  <Card.Body className="text-center d-flex flex-column">
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <div className="h5 text-primary mb-3">{service.price}</div>
                      <Button className="btn-gradient-primary w-100">
                        Get Quote
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Our Process</h2>
              <p className="section-subtitle animate-fade-up">
                A proven methodology that ensures project success
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up">
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-search"></i>
                </div>
                <h5>Discovery</h5>
                <p>We analyze your requirements and understand your business goals.</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h5>Strategy</h5>
                <p>We create a comprehensive strategy and project roadmap.</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-cogs"></i>
                </div>
                <h5>Development</h5>
                <p>Our expert team brings your vision to life with cutting-edge technology.</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-rocket"></i>
                </div>
                <h5>Launch</h5>
                <p>We deploy your solution and provide ongoing support and maintenance.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-gradient text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
                <p className="lead mb-4">
                  Let's discuss your project requirements and create a custom solution for your business.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button 
                    as={Link} 
                    to="/contact" 
                    className="btn-gradient-secondary"
                    size="lg"
                  >
                    Get Free Consultation
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                  >
                    Download Portfolio
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

export default Services;
