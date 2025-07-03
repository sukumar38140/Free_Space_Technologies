
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'AI Agents & Automation',
      icon: 'fas fa-robot',
      description: 'Intelligent AI agents that automate complex business processes and enhance decision-making capabilities.',
      features: ['Natural Language Processing', 'Intelligent Automation', 'Decision Support Systems', 'Process Optimization'],
      specialization: 'AI & Machine Learning'
    },
    {
      title: 'IoT Solutions',
      icon: 'fas fa-wifi',
      description: 'Connected IoT ecosystems that enable smart monitoring, control, and data-driven insights.',
      features: ['Smart Sensors', 'Real-time Monitoring', 'Edge Computing', 'Data Analytics'],
      specialization: 'Internet of Things'
    },
    {
      title: 'Robotics & Automation',
      icon: 'fas fa-cogs',
      description: 'Advanced robotics solutions for industrial automation and intelligent manufacturing systems.',
      features: ['Industrial Robots', 'Autonomous Systems', 'Computer Vision', 'Motion Control'],
      specialization: 'Robotics Engineering'
    },
    {
      title: 'Machine Learning Models',
      icon: 'fas fa-brain',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent insights.',
      features: ['Predictive Analytics', 'Deep Learning', 'Computer Vision', 'Natural Language Processing'],
      specialization: 'Machine Learning'
    },
    {
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'Modern web applications with responsive design and cutting-edge technologies.',
      features: ['React & Modern Frameworks', 'Progressive Web Apps', 'Real-time Applications', 'API Development'],
      specialization: 'Web Technologies'
    },
    {
      title: 'Smart Systems Integration',
      icon: 'fas fa-network-wired',
      description: 'Seamless integration of AI, IoT, and robotics into unified intelligent systems.',
      features: ['System Architecture', 'Cloud Integration', 'Data Pipeline', 'Real-time Processing'],
      specialization: 'Systems Integration'
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
                <h1 className="display-4 fw-bold mb-4">Our Expertise</h1>
                <p className="lead">
                  Pioneering solutions in AI, IoT, robotics, and machine learning. 
                  We transform ideas into intelligent systems that shape the future.
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
              <h2 className="section-title animate-fade-up">Our Technology Stack</h2>
              <p className="section-subtitle animate-fade-up">
                Cutting-edge technologies powering our innovative solutions
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up">
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-microchip"></i>
                </div>
                <h5>AI & ML</h5>
                <p>TensorFlow, PyTorch, OpenAI, Hugging Face</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-satellite-dish"></i>
                </div>
                <h5>IoT Platforms</h5>
                <p>Arduino, Raspberry Pi, AWS IoT, Azure IoT</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-wrench"></i>
                </div>
                <h5>Robotics</h5>
                <p>ROS, OpenCV, MATLAB, Simulink</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="card-icon mx-auto mb-3">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h5>Development</h5>
                <p>React, Node.js, Python, Docker</p>
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
                <h2 className="display-5 fw-bold mb-4">Ready to Innovate?</h2>
                <p className="lead mb-4">
                  Let's collaborate to build intelligent solutions that push the boundaries of technology.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/contact">
                    <Button 
                      className="btn-gradient-secondary"
                      size="lg"
                    >
                      Start Your Project
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
