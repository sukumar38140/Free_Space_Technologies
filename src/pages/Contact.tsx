
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
                <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
                <p className="lead">
                  Ready to transform your business? Let's discuss your project requirements 
                  and explore how we can help you achieve your digital transformation goals.
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
                  <h3 className="mb-4">Let's Start a Conversation</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      <i className="fas fa-check-circle me-2"></i>
                      Thank you for reaching out! We'll respond to your inquiry within 24 hours.
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
                            placeholder="Your full name"
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
                            placeholder="your.email@company.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
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
                            placeholder="+1 (555) 123-4567"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Project Type *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Web Development, Mobile App, Cloud Migration, etc."
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Label>Project Details *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please describe your project requirements, timeline, and any specific features you need..."
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
                      456 Innovation Drive<br />
                      Tech Hub Plaza, Suite 200<br />
                      San Francisco, CA 94105
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
                      <strong>Main:</strong> +1 (415) 555-0123<br />
                      <strong>Sales:</strong> +1 (415) 555-0124<br />
                      <strong>Support:</strong> +1 (415) 555-0125
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
                      <strong>General:</strong> hello@freespacetec.com<br />
                      <strong>Sales:</strong> sales@freespacetec.com<br />
                      <strong>Support:</strong> support@freespacetec.com
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
                      <strong>Mon - Fri:</strong> 8:00 AM - 7:00 PM<br />
                      <strong>Saturday:</strong> 9:00 AM - 5:00 PM<br />
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
              <h2 className="section-title animate-fade-up">Our Location</h2>
              <p className="section-subtitle animate-fade-up">
                Located in the heart of San Francisco's tech district
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
                    <h4>Find Us Here</h4>
                    <p className="text-muted">Easy access via public transportation and parking available</p>
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
