
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Crafting responsive and dynamic web applications tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1542831371-d21c19555627?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-laptop-code",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "CMS integration",
        "Responsive design"
      ],
      specialization: "React, Node.js, Next.js"
    },
    {
      title: "Mobile App Development",
      description: "Building intuitive and high-performance mobile applications for iOS and Android.",
      image: "https://images.unsplash.com/photo-1607212040989-d922b79e273f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-mobile-alt",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store deployment"
      ],
      specialization: "React Native, Flutter, Swift/Kotlin"
    },
    {
      title: "Cloud Solutions",
      description: "Leveraging cloud infrastructure to enhance scalability, security, and efficiency.",
      image: "https://images.unsplash.com/photo-1593642532781-03e79ceac840?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-cloud",
      features: [
        "Cloud migration",
        "Infrastructure as Code (IaC)",
        "DevOps automation",
        "Cloud security"
      ],
      specialization: "AWS, Azure, Google Cloud"
    },
    {
      title: "UI/UX Design",
      description: "Creating engaging and user-centric interfaces that deliver exceptional experiences.",
      image: "https://images.unsplash.com/photo-1522204523234-87295a7025c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-paint-brush",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design",
        "Usability testing"
      ],
      specialization: "Figma, Sketch, Adobe XD"
    },
    {
      title: "Digital Marketing",
      description: "Driving online visibility and growth through strategic digital marketing campaigns.",
      image: "https://images.unsplash.com/photo-1627843261621-e73715d2f6f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-bullhorn",
      features: [
        "SEO optimization",
        "Social media marketing",
        "Content marketing",
        "PPC campaigns"
      ],
      specialization: "Google Analytics, SEMrush, HubSpot"
    },
    {
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights for informed business decisions.",
      image: "https://images.unsplash.com/photo-1639737901765-a83d0cc15a31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "fas fa-chart-line",
      features: [
        "Business intelligence",
        "Predictive analytics",
        "Data visualization",
        "Big data solutions"
      ],
      specialization: "Python, R, Tableau, Power BI"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{marginTop: '80px'}}>
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-2 mb-4">Our Services</h1>
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
              <Col lg={4} md={6} key={index} className="mb-5">
                <Card className="professional-card h-100 animate-fade-up card-hover" style={{animationDelay: `${index * 0.1}s`, overflow: 'hidden'}}>
                  <div className="position-relative" style={{height: '200px', overflow: 'hidden'}}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                      background: 'linear-gradient(45deg, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.4))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className={`${service.icon} fa-3x text-white`}></i>
                    </div>
                    <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white'
                    }}>
                      <h5 className="mb-0 text-white">{service.title}</h5>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <p className="mb-4 text-muted">{service.description}</p>
                    
                    <ul className="list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className="fas fa-check me-2" style={{color: 'hsl(var(--primary))'}}></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <div className="h6 mb-0" style={{color: 'hsl(var(--primary))'}}>{service.specialization}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="section-padding" style={{background: 'hsl(var(--muted) / 0.3)'}}>
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-3 mb-4 animate-fade-up">Technologies We Use</h2>
              <p className="lead animate-fade-up animate-delay-100">
                Modern tools and frameworks that power exceptional solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up">
                <div className="service-icon mx-auto mb-3">
                  <i className="fab fa-react"></i>
                </div>
                <h5>Frontend</h5>
                <p className="text-muted">React, Vue.js, Angular, TypeScript</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-server"></i>
                </div>
                <h5>Backend</h5>
                <p className="text-muted">Node.js, Python, Java, .NET</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="service-icon mx-auto mb-3">
                  <i className="fas fa-database"></i>
                </div>
                <h5>Database</h5>
                <p className="text-muted">PostgreSQL, MongoDB, MySQL, Redis</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="service-icon mx-auto mb-3">
                  <i className="fab fa-aws"></i>
                </div>
                <h5>Cloud</h5>
                <p className="text-muted">AWS, Azure, Google Cloud, Docker</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'hsl(var(--foreground))', color: 'hsl(var(--background))'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h2 className="display-4 mb-4">Ready to Start Your Project?</h2>
                <p className="lead mb-4">
                  Let's discuss your requirements and create a solution that drives results.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/contact">
                    <Button 
                      className="btn-clean-secondary"
                      size="lg"
                    >
                      Get Quote
                    </Button>
                  </Link>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="btn-clean-secondary"
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
