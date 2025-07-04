
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup, Alert } from 'react-bootstrap';

interface PageContent {
  id: string;
  name: string;
  title: string;
  description: string;
  content: string;
}

const PageContentManagement = () => {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: ''
  });

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = () => {
    // Initialize default page contents
    const defaultPages: PageContent[] = [
      {
        id: 'home',
        name: 'Home Page',
        title: 'Welcome to Free Space Technologies',
        description: 'Transforming businesses through innovative technology solutions',
        content: 'We are a leading technology company specializing in cutting-edge solutions that drive digital transformation and business growth.'
      },
      {
        id: 'about',
        name: 'About Page',
        title: 'About Free Space Technologies',
        description: 'Learn more about our company and mission',
        content: 'Founded with a vision to bridge the gap between traditional business practices and modern technology, Free Space Technologies has been at the forefront of digital innovation.'
      },
      {
        id: 'services',
        name: 'Services Page',
        title: 'Our Services',
        description: 'Comprehensive technology solutions for your business',
        content: 'We offer a wide range of services including cloud computing, AI/ML solutions, mobile app development, and enterprise software development.'
      },
      {
        id: 'contact',
        name: 'Contact Page',
        title: 'Contact Us',
        description: 'Get in touch with our team',
        content: 'Ready to transform your business? Contact us today to discuss your technology needs and discover how we can help you achieve your goals.'
      },
      {
        id: 'career',
        name: 'Career Page',
        title: 'Join Our Team',
        description: 'Explore career opportunities at Free Space Technologies',
        content: 'We are always looking for talented individuals to join our growing team. Explore our current openings and be part of our innovative journey.'
      },
      {
        id: 'privacy',
        name: 'Privacy Policy',
        title: 'Privacy Policy',
        description: 'How we protect your privacy',
        content: 'Your privacy matters to us. Learn how we collect, use, and protect your personal information when you use our services.'
      },
      {
        id: 'terms',
        name: 'Terms of Service',
        title: 'Terms of Service',
        description: 'Terms and conditions for using our services',
        content: 'These terms govern your use of our website and services. Please read them carefully before using our platform.'
      }
    ];

    // Load saved content or use defaults
    const savedPages = localStorage.getItem('pageContents');
    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      setPages(defaultPages);
      localStorage.setItem('pageContents', JSON.stringify(defaultPages));
    }
  };

  const handlePageSelect = (page: PageContent) => {
    setSelectedPage(page);
    setFormData({
      title: page.title,
      description: page.description,
      content: page.content
    });
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (!selectedPage) return;

    const updatedPages = pages.map(page =>
      page.id === selectedPage.id
        ? { ...page, ...formData }
        : page
    );

    setPages(updatedPages);
    localStorage.setItem('pageContents', JSON.stringify(updatedPages));
    
    // Update selected page
    const updatedSelectedPage = { ...selectedPage, ...formData };
    setSelectedPage(updatedSelectedPage);
    
    setIsEditing(false);
    setAlertMessage(`${selectedPage.name} content updated successfully!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleCancel = () => {
    if (selectedPage) {
      setFormData({
        title: selectedPage.title,
        description: selectedPage.description,
        content: selectedPage.content
      });
    }
    setIsEditing(false);
  };

  return (
    <>
      {showAlert && (
        <Alert variant="success" className="mb-4">
          <i className="fas fa-check-circle me-2"></i>
          {alertMessage}
        </Alert>
      )}

      <Row>
        <Col md={4}>
          <Card className="admin-card">
            <Card.Header>
              <h5 className="mb-0">
                <i className="fas fa-file-alt me-2"></i>
                Pages List
              </h5>
            </Card.Header>
            <Card.Body className="p-0">
              <ListGroup variant="flush">
                {pages.map((page) => (
                  <ListGroup.Item
                    key={page.id}
                    action
                    active={selectedPage?.id === page.id}
                    onClick={() => handlePageSelect(page)}
                    className="d-flex align-items-center"
                    style={{ cursor: 'pointer' }}
                  >
                    <i className="fas fa-file me-3 text-muted"></i>
                    <div>
                      <div className="fw-medium">{page.name}</div>
                      <small className="text-muted">{page.id}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          {selectedPage ? (
            <Card className="admin-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-edit me-2"></i>
                  Edit {selectedPage.name}
                </h5>
                <div>
                  {!isEditing ? (
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={handleEdit}
                    >
                      <i className="fas fa-pencil-alt me-2"></i>
                      Edit
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2"
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="success"
                        size="sm"
                        onClick={handleSave}
                      >
                        <i className="fas fa-save me-2"></i>
                        Save
                      </Button>
                    </>
                  )}
                </div>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Page Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Enter page title"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Page Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Enter page description"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Page Content</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={10}
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Enter page content"
                      style={{ resize: 'vertical' }}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Card className="admin-card">
              <Card.Body className="text-center py-5">
                <i className="fas fa-mouse-pointer fa-3x text-muted mb-3"></i>
                <h4>Select a Page to Edit</h4>
                <p className="text-muted">
                  Choose a page from the list on the left to view and edit its content.
                </p>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </>
  );
};

export default PageContentManagement;
