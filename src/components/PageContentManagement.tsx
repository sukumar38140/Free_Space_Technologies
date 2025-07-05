import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Nav, Modal } from 'react-bootstrap';

interface PageContent {
  title: string;
  description: string;
  subtitle?: string;
  
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  learnMoreText?: string;
  servicesTitle?: string;
  servicesDescription?: string;
  whyChooseTitle?: string;
  whyChooseDescription?: string;
  readyToStartTitle?: string;
  readyToStartDescription?: string;
  
  journeyTitle?: string;
  journeySubtitle?: string;
  journeyDescription?: string;
  valuesTitle?: string;
  valuesSubtitle?: string;
  teamTitle?: string;
  teamSubtitle?: string;
  statsTitle?: string;
  
  expertiseTitle?: string;
  expertiseDescription?: string;
  processTitle?: string;
  processDescription?: string;
  
  careerHeroTitle?: string;
  careerHeroDescription?: string;
  joinTeamTitle?: string;
  joinTeamDescription?: string;
  
  contactTitle?: string;
  contactDescription?: string;
  getInTouchTitle?: string;
  locationTitle?: string;
  
  content: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}

interface PageContentData {
  [key: string]: PageContent;
}

interface TeamData {
  [key: string]: TeamMember;
}

const PageContentManagement = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const [pageContent, setPageContent] = useState<PageContentData>({
    home: {
      title: 'Free Space Technologies',
      description: 'Leading technology solutions for modern businesses',
      heroTitle: 'Transform Your Business with Cutting-Edge Technology',
      heroSubtitle: 'Innovative Solutions for the Digital Age',
      heroDescription: 'We empower businesses to thrive in the digital landscape through custom software development, cloud solutions, and strategic technology consulting.',
      learnMoreText: 'Discover Our Story',
      servicesTitle: 'Our Core Services',
      servicesDescription: 'Comprehensive technology solutions tailored to your business needs',
      whyChooseTitle: 'Why Choose Free Space Technologies?',
      whyChooseDescription: 'We combine technical expertise with business acumen to deliver solutions that drive real results',
      readyToStartTitle: 'Ready to Start Your Digital Transformation?',
      readyToStartDescription: 'Let\'s discuss how we can help accelerate your business growth through technology.',
      content: ''
    },
    about: {
      title: 'About Free Space Technologies',
      description: 'We are a dynamic technology company committed to helping businesses thrive in the digital age through innovative solutions and expert guidance.',
      journeyTitle: 'Our Journey',
      journeySubtitle: 'Building tomorrow\'s solutions today',
      journeyDescription: 'Established in 2018, Free Space Technologies emerged from a simple vision: to bridge the gap between complex technology and practical business solutions.',
      valuesTitle: 'Our Core Values',
      valuesSubtitle: 'The principles that drive our success',
      teamTitle: 'Meet Our Leadership',
      teamSubtitle: 'The experienced professionals guiding our vision',
      statsTitle: 'Our Impact',
      content: ''
    },
    services: {
      title: 'Our Services',
      description: 'Comprehensive technology solutions designed to accelerate your business growth',
      expertiseTitle: 'Our Expertise',
      expertiseDescription: 'We specialize in delivering cutting-edge technology solutions across multiple domains',
      processTitle: 'Our Process',
      processDescription: 'A proven methodology that ensures successful project delivery',
      content: ''
    },
    career: {
      title: 'Join Our Team',
      description: 'Build your career with Free Space Technologies',
      careerHeroTitle: 'Shape the Future of Technology',
      careerHeroDescription: 'Join our dynamic team of innovators and help us build solutions that make a difference.',
      joinTeamTitle: 'Why Join Free Space Technologies?',
      joinTeamDescription: 'We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.',
      content: ''
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with our team of experts',
      contactTitle: 'Let\'s Start a Conversation',
      contactDescription: 'Ready to transform your business? We\'d love to hear about your project and discuss how we can help.',
      getInTouchTitle: 'Get in Touch',
      locationTitle: 'Our Location',
      content: ''
    }
  });

  const [teamMembers, setTeamMembers] = useState<TeamData>({
    ceo: {
      id: 'ceo',
      name: 'Alex Thompson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Visionary leader with 12+ years in technology consulting and business development.'
    },
    cto: {
      id: 'cto',
      name: 'Maria Rodriguez',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Technical expert specializing in scalable architecture and emerging technologies.'
    },
    lead_dev: {
      id: 'lead_dev',
      name: 'David Chen',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about clean code and innovative solutions.'
    },
    design_director: {
      id: 'design_director',
      name: 'Sophie Williams',
      position: 'Design Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer focused on user experience and modern interface design.'
    }
  });

  const [memberForm, setMemberForm] = useState({
    name: '',
    position: '',
    image: '',
    bio: ''
  });

  useEffect(() => {
    loadPageContent();
    loadTeamMembers();
  }, []);

  const loadPageContent = () => {
    const savedContent = localStorage.getItem('pageContent');
    if (savedContent) {
      const parsed = JSON.parse(savedContent);
      setPageContent(prev => ({
        ...prev,
        ...parsed
      }));
    }
  };

  const loadTeamMembers = () => {
    const savedTeam = localStorage.getItem('teamMembers');
    if (savedTeam) {
      setTeamMembers(JSON.parse(savedTeam));
    }
  };

  const savePageContent = (page: string) => {
    const updatedContent = { ...pageContent };
    localStorage.setItem('pageContent', JSON.stringify(updatedContent));
    setAlertMessage(`${page.charAt(0).toUpperCase() + page.slice(1)} page content saved successfully!`);
    setShowAlert(true);
    setIsEditing(false);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const saveTeamMembers = () => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
    setAlertMessage('Team member updated successfully!');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleContentChange = (page: string, field: keyof PageContent, value: string) => {
    setPageContent(prev => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value
      }
    }));
  };

  const handleEditMember = (memberId: string) => {
    const member = teamMembers[memberId];
    setEditingMember(member);
    setMemberForm({
      name: member.name,
      position: member.position,
      image: member.image,
      bio: member.bio
    });
    setShowTeamModal(true);
  };

  const handleMemberFormChange = (field: string, value: string) => {
    setMemberForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveMember = () => {
    if (editingMember) {
      setTeamMembers(prev => ({
        ...prev,
        [editingMember.id]: {
          ...editingMember,
          ...memberForm
        }
      }));
      saveTeamMembers();
      setShowTeamModal(false);
      setEditingMember(null);
      setMemberForm({ name: '', position: '', image: '', bio: '' });
    }
  };

  const handleCloseModal = () => {
    setShowTeamModal(false);
    setEditingMember(null);
    setMemberForm({ name: '', position: '', image: '', bio: '' });
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const renderHomePageForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Main Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.title || ''}
              onChange={(e) => handleContentChange('home', 'title', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Main Description</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.description || ''}
              onChange={(e) => handleContentChange('home', 'description', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Hero Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.heroTitle || ''}
              onChange={(e) => handleContentChange('home', 'heroTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Hero Subtitle</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.heroSubtitle || ''}
              onChange={(e) => handleContentChange('home', 'heroSubtitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Hero Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.home?.heroDescription || ''}
          onChange={(e) => handleContentChange('home', 'heroDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Learn More Button Text</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.learnMoreText || ''}
              onChange={(e) => handleContentChange('home', 'learnMoreText', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Services Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.servicesTitle || ''}
              onChange={(e) => handleContentChange('home', 'servicesTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Services Section Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={pageContent.home?.servicesDescription || ''}
          onChange={(e) => handleContentChange('home', 'servicesDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Why Choose Us Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.whyChooseTitle || ''}
              onChange={(e) => handleContentChange('home', 'whyChooseTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Ready to Start Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.home?.readyToStartTitle || ''}
              onChange={(e) => handleContentChange('home', 'readyToStartTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Why Choose Us Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={pageContent.home?.whyChooseDescription || ''}
          onChange={(e) => handleContentChange('home', 'whyChooseDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ready to Start Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={pageContent.home?.readyToStartDescription || ''}
          onChange={(e) => handleContentChange('home', 'readyToStartDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>
    </Form>
  );

  const renderAboutPageForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.title || ''}
              onChange={(e) => handleContentChange('about', 'title', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Description</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.description || ''}
              onChange={(e) => handleContentChange('about', 'description', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Journey Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.journeyTitle || ''}
              onChange={(e) => handleContentChange('about', 'journeyTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Journey Section Subtitle</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.journeySubtitle || ''}
              onChange={(e) => handleContentChange('about', 'journeySubtitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Journey Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={pageContent.about?.journeyDescription || ''}
          onChange={(e) => handleContentChange('about', 'journeyDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Values Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.valuesTitle || ''}
              onChange={(e) => handleContentChange('about', 'valuesTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Values Section Subtitle</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.valuesSubtitle || ''}
              onChange={(e) => handleContentChange('about', 'valuesSubtitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Team Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.teamTitle || ''}
              onChange={(e) => handleContentChange('about', 'teamTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Team Section Subtitle</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.about?.teamSubtitle || ''}
              onChange={(e) => handleContentChange('about', 'teamSubtitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );

  const renderServicesPageForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.services?.title || ''}
              onChange={(e) => handleContentChange('services', 'title', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Description</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.services?.description || ''}
              onChange={(e) => handleContentChange('services', 'description', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Expertise Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.services?.expertiseTitle || ''}
              onChange={(e) => handleContentChange('services', 'expertiseTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Process Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.services?.processTitle || ''}
              onChange={(e) => handleContentChange('services', 'processTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Expertise Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.services?.expertiseDescription || ''}
          onChange={(e) => handleContentChange('services', 'expertiseDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Process Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.services?.processDescription || ''}
          onChange={(e) => handleContentChange('services', 'processDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>
    </Form>
  );

  const renderCareerPageForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.career?.title || ''}
              onChange={(e) => handleContentChange('career', 'title', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Description</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.career?.description || ''}
              onChange={(e) => handleContentChange('career', 'description', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Hero Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.career?.careerHeroTitle || ''}
              onChange={(e) => handleContentChange('career', 'careerHeroTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Join Team Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.career?.joinTeamTitle || ''}
              onChange={(e) => handleContentChange('career', 'joinTeamTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Hero Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.career?.careerHeroDescription || ''}
          onChange={(e) => handleContentChange('career', 'careerHeroDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Join Team Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.career?.joinTeamDescription || ''}
          onChange={(e) => handleContentChange('career', 'joinTeamDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>
    </Form>
  );

  const renderContactPageForm = () => (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.contact?.title || ''}
              onChange={(e) => handleContentChange('contact', 'title', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Page Description</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.contact?.description || ''}
              onChange={(e) => handleContentChange('contact', 'description', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Contact Section Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.contact?.contactTitle || ''}
              onChange={(e) => handleContentChange('contact', 'contactTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Get In Touch Title</Form.Label>
            <Form.Control
              type="text"
              value={pageContent.contact?.getInTouchTitle || ''}
              onChange={(e) => handleContentChange('contact', 'getInTouchTitle', e.target.value)}
              disabled={!isEditing}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Contact Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={pageContent.contact?.contactDescription || ''}
          onChange={(e) => handleContentChange('contact', 'contactDescription', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location Title</Form.Label>
        <Form.Control
          type="text"
          value={pageContent.contact?.locationTitle || ''}
          onChange={(e) => handleContentChange('contact', 'locationTitle', e.target.value)}
          disabled={!isEditing}
        />
      </Form.Group>
    </Form>
  );

  const renderPageForm = () => {
    switch (activeTab) {
      case 'home':
        return renderHomePageForm();
      case 'about':
        return renderAboutPageForm();
      case 'services':
        return renderServicesPageForm();
      case 'career':
        return renderCareerPageForm();
      case 'contact':
        return renderContactPageForm();
      default:
        return null;
    }
  };

  const pages = [
    { key: 'home', label: 'Home Page' },
    { key: 'about', label: 'About Page' },
    { key: 'services', label: 'Services Page' },
    { key: 'career', label: 'Career Page' },
    { key: 'contact', label: 'Contact Page' }
  ];

  return (
    <>
      {showAlert && (
        <Alert variant="success" className="mb-4">
          <i className="fas fa-check-circle me-2"></i>
          {alertMessage}
        </Alert>
      )}

      <Nav variant="pills" className="mb-4">
        {pages.map(page => (
          <Nav.Item key={page.key}>
            <Nav.Link 
              active={activeTab === page.key}
              onClick={() => {
                setActiveTab(page.key);
                setIsEditing(false);
              }}
              style={{ cursor: 'pointer' }}
            >
              {page.label}
            </Nav.Link>
          </Nav.Item>
        ))}
        <Nav.Item>
          <Nav.Link 
            active={activeTab === 'team'}
            onClick={() => {
              setActiveTab('team');
              setIsEditing(false);
            }}
            style={{ cursor: 'pointer' }}
          >
            Team Members
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab !== 'team' && (
        <Row>
          <Col lg={12}>
            <Card className="admin-card">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="fas fa-edit me-2"></i>
                  {pages.find(p => p.key === activeTab)?.label} Content
                </h5>
                <div>
                  {!isEditing ? (
                    <Button 
                      variant="outline-primary"
                      onClick={toggleEditing}
                    >
                      <i className="fas fa-edit me-2"></i>
                      Edit
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="outline-secondary"
                        className="me-2"
                        onClick={toggleEditing}
                      >
                        <i className="fas fa-times me-2"></i>
                        Cancel
                      </Button>
                      <Button 
                        className="btn-gradient-primary"
                        onClick={() => savePageContent(activeTab)}
                      >
                        <i className="fas fa-save me-2"></i>
                        Save Changes
                      </Button>
                    </>
                  )}
                </div>
              </Card.Header>
              <Card.Body>
                {renderPageForm()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {activeTab === 'team' && (
        <Row>
          <Col lg={12}>
            <Card className="admin-card">
              <Card.Header>
                <h5 className="mb-0">
                  <i className="fas fa-users me-2"></i>
                  Manage Team Members
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {Object.values(teamMembers).map((member) => (
                    <Col lg={6} key={member.id} className="mb-4">
                      <Card className="h-100">
                        <Card.Body className="text-center">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="rounded-circle mb-3"
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                          <h5>{member.name}</h5>
                          <h6 className="text-primary mb-3">{member.position}</h6>
                          <p className="text-muted small">{member.bio}</p>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleEditMember(member.id)}
                          >
                            <i className="fas fa-edit me-2"></i>
                            Edit
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {/* Edit Team Member Modal */}
      <Modal show={showTeamModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={memberForm.name}
                    onChange={(e) => handleMemberFormChange('name', e.target.value)}
                    placeholder="Enter name..."
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    value={memberForm.position}
                    onChange={(e) => handleMemberFormChange('position', e.target.value)}
                    placeholder="Enter position..."
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="url"
                value={memberForm.image}
                onChange={(e) => handleMemberFormChange('image', e.target.value)}
                placeholder="Enter photo URL..."
              />
              <Form.Text className="text-muted">
                Enter a direct URL to the team member's photo
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={memberForm.bio}
                onChange={(e) => handleMemberFormChange('bio', e.target.value)}
                placeholder="Enter bio..."
              />
            </Form.Group>

            {memberForm.image && (
              <div className="text-center mb-3">
                <p className="mb-2"><strong>Preview:</strong></p>
                <img 
                  src={memberForm.image} 
                  alt="Preview"
                  className="rounded-circle"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button className="btn-gradient-primary" onClick={handleSaveMember}>
            <i className="fas fa-save me-2"></i>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PageContentManagement;
