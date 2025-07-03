
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Custom web applications and websites built with modern frameworks and best practices.',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'Content Management'],
      specialization: 'Frontend & Backend'
    },
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['Native iOS/Android', 'React Native', 'Flutter Development', 'App Store Deployment'],
      specialization: 'Mobile Applications'
    },
    {
      title: 'Cloud Solutions',
      icon: 'fas fa-cloud',
      description: 'Scalable cloud infrastructure, migration services, and cloud-native application development.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps Services', 'Microservices Architecture'],
      specialization: 'Cloud Infrastructure'
    },
    {
      title: 'Digital Transformation',
      icon: 'fas fa-exchange-alt',
      description: 'Complete digital transformation services to modernize your business processes and systems.',
      features: ['Process Automation', 'Legacy System Modernization', 'Workflow Optimization', 'Digital Strategy'],
      specialization: 'Business Transformation'
    },
    {
      title: 'API Development',
      icon: 'fas fa-plug',
      description: 'RESTful APIs, GraphQL, and microservices architecture for seamless system integration.',
      features: ['REST APIs', 'GraphQL', 'Third-party Integrations', 'API Documentation'],
      specialization: 'Backend Services'
    },
    {
      title: 'Database Solutions',
      icon: 'fas fa-database',
      description: 'Database design, optimization, and management for reliable data storage and retrieval.',
      features: ['SQL/NoSQL Databases', 'Data Migration', 'Performance Optimization', 'Backup Solutions'],
      specialization: 'Data Management'
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
                      <div className="h6 text-primary mb-3">{service.specialization}</div>
                      <Button className="btn-gradient-primary w-100">
                        Learn More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Technologies We Use</h2>
              <p className="section-subtitle animate-fade-up">
                Modern tools and frameworks that power exceptional solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up">
                <div className="card-icon mx-auto mb-3">
                  <i className="fab fa-react"></i>
                </div>
                <h5>Frontend</h5>
                <p>React, Vue.js, Angular, TypeScript</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-server"></i>
                </div>
                <h5>Backend</h5>
                <p>Node.js, Python, Java, .NET</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-database"></i>
                </div>
                <h5>Database</h5>
                <p>PostgreSQL, MongoDB, MySQL, Redis</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fab fa-aws"></i>
                </div>
                <h5>Cloud</h5>
                <p>AWS, Azure, Google Cloud, Docker</p>
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
                <h2 className="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
                <p className="lead mb-4">
                  Let's discuss your requirements and create a solution that drives results.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/contact">
                    <Button 
                      className="btn-gradient-secondary"
                      size="lg"
                    >
                      Get Quote
                    </Button>
                  </Link>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                  >
                    View Portfolio
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
