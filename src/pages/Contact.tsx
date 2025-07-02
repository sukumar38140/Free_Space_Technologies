
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
                <p className="lead">
                  Ready to start your project? Have questions about our services? 
                  We'd love to hear from you. Let's discuss how we can help bring your vision to life.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mb-5">
              <Card className="custom-card animate-fade-left">
                <Card.Body>
                  <h3 className="mb-4">Send Us a Message</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you for your message! We'll get back to you within 24 hours.
                    </Alert>
                  )}
                  
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter your company name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </Form.Group>
                    
                    <Button type="submit" className="btn-gradient-primary" size="lg">
                      <i className="fas fa-paper-plane me-2"></i>
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={4}>
              <div className="animate-fade-right">
                <Card className="custom-card mb-4">
                  <Card.Body className="text-center">
                    <div className="card-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5>Visit Our Office</h5>
                    <p className="mb-0">
                      123 Tech Street<br />
                      Digital City, DC 12345<br />
                      United States
                    </p>
                  </Card.Body>
                </Card>
                
                <Card className="custom-card mb-4">
                  <Card.Body className="text-center">
                    <div className="card-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <h5>Call Us</h5>
                    <p className="mb-2">
                      <strong>Main:</strong> +1 (555) 123-4567<br />
                      <strong>Sales:</strong> +1 (555) 123-4568<br />
                      <strong>Support:</strong> +1 (555) 123-4569
                    </p>
                  </Card.Body>
                </Card>
                
                <Card className="custom-card mb-4">
                  <Card.Body className="text-center">
                    <div className="card-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h5>Email Us</h5>
                    <p className="mb-0">
                      <strong>General:</strong> info@techcorp.com<br />
                      <strong>Sales:</strong> sales@techcorp.com<br />
                      <strong>Support:</strong> support@techcorp.com
                    </p>
                  </Card.Body>
                </Card>
                
                <Card className="custom-card">
                  <Card.Body className="text-center">
                    <div className="card-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h5>Business Hours</h5>
                    <p className="mb-0">
                      <strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM<br />
                      <strong>Saturday:</strong> 10:00 AM - 4:00 PM<br />
                      <strong>Sunday:</strong> Closed
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Find Us</h2>
              <p className="section-subtitle animate-fade-up">
                Located in the heart of the tech district
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="animate-fade-up">
                <div 
                  className="bg-secondary rounded-4 d-flex align-items-center justify-content-center"
                  style={{height: '400px'}}
                >
                  <div className="text-center">
                    <i className="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                    <h4>Interactive Map</h4>
                    <p className="text-muted">Map integration would go here</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
