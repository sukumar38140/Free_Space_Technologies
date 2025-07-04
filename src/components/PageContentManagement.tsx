
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup, Alert, Accordion } from 'react-bootstrap';

interface PageContent {
  id: string;
  name: string;
  // Home Page Content
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  heroButton1?: string;
  heroButton2?: string;
  statsTitle1?: string;
  statsValue1?: string;
  statsDesc1?: string;
  statsTitle2?: string;
  statsValue2?: string;
  statsDesc2?: string;
  statsTitle3?: string;
  statsValue3?: string;
  statsDesc3?: string;
  statsTitle4?: string;
  statsValue4?: string;
  statsDesc4?: string;
  servicesTitle?: string;
  servicesSubtitle?: string;
  service1Title?: string;
  service1Desc?: string;
  service2Title?: string;
  service2Desc?: string;
  service3Title?: string;
  service3Desc?: string;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  whyChooseDesc?: string;
  whyChoosePoint1?: string;
  whyChoosePoint2?: string;
  whyChoosePoint3?: string;
  whyChoosePoint4?: string;
  whyChooseButton?: string;
  ctaTitle?: string;
  ctaDesc?: string;
  ctaButton1?: string;
  ctaButton2?: string;
  
  // About Page Content
  aboutHeroTitle?: string;
  aboutHeroDesc?: string;
  aboutJourneyTitle?: string;
  aboutJourneySubtitle?: string;
  aboutJourneyDesc1?: string;
  aboutJourneyDesc2?: string;
  aboutJourneyDesc3?: string;
  aboutValuesTitle?: string;
  aboutValuesSubtitle?: string;
  aboutValue1Title?: string;
  aboutValue1Desc?: string;
  aboutValue2Title?: string;
  aboutValue2Desc?: string;
  aboutValue3Title?: string;
  aboutValue3Desc?: string;
  aboutValue4Title?: string;
  aboutValue4Desc?: string;
  aboutTeamTitle?: string;
  aboutTeamSubtitle?: string;
  aboutStat1Value?: string;
  aboutStat1Title?: string;
  aboutStat1Desc?: string;
  aboutStat2Value?: string;
  aboutStat2Title?: string;
  aboutStat2Desc?: string;
  aboutStat3Value?: string;
  aboutStat3Title?: string;
  aboutStat3Desc?: string;
  aboutStat4Value?: string;
  aboutStat4Title?: string;
  aboutStat4Desc?: string;
  
  // Services Page Content
  servicesHeroTitle?: string;
  servicesHeroDesc?: string;
  servicesGridTitle?: string;
  servicesGridSubtitle?: string;
  techStackTitle?: string;
  techStackSubtitle?: string;
  servicesCTATitle?: string;
  servicesCTADesc?: string;
  servicesCTAButton1?: string;
  servicesCTAButton2?: string;
  
  // Contact Page Content
  contactHeroTitle?: string;
  contactHeroDesc?: string;
  contactFormTitle?: string;
  contactSuccessMessage?: string;
  contactOfficeTitle?: string;
  contactOfficeAddress?: string;
  contactPhoneTitle?: string;
  contactPhoneMain?: string;
  contactPhoneSales?: string;
  contactPhoneSupport?: string;
  contactEmailTitle?: string;
  contactEmailGeneral?: string;
  contactEmailSales?: string;
  contactEmailSupport?: string;
  contactHoursTitle?: string;
  contactHoursWeekday?: string;
  contactHoursSaturday?: string;
  contactHoursSunday?: string;
  contactMapTitle?: string;
  contactMapSubtitle?: string;
  
  // Career Page Content
  careerHeroTitle?: string;
  careerHeroDesc?: string;
  careerWhyTitle?: string;
  careerWhySubtitle?: string;
  careerBenefit1Title?: string;
  careerBenefit1Desc?: string;
  careerBenefit2Title?: string;
  careerBenefit2Desc?: string;
  careerBenefit3Title?: string;
  careerBenefit3Desc?: string;
  careerJobsTitle?: string;
  careerJobsSubtitle?: string;
  careerNoJobsTitle?: string;
  careerNoJobsDesc?: string;
  careerCTATitle?: string;
  careerCTADesc?: string;
  careerCTAButton?: string;
  
  // Privacy Policy Content
  privacyTitle?: string;
  privacyDesc?: string;
  privacyContent?: string;
  
  // Terms of Service Content
  termsTitle?: string;
  termsDesc?: string;
  termsContent?: string;
  
  // Learn More Content
  learnMoreTitle?: string;
  learnMoreDesc?: string;
  learnMoreContent?: string;
}

const PageContentManagement = () => {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState<PageContent>({
    id: '',
    name: ''
  });

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = () => {
    const defaultPages: PageContent[] = [
      {
        id: 'home',
        name: 'Home Page',
        heroTitle: 'Transform Your Business with Next-Gen Solutions',
        heroSubtitle: '',
        heroDescription: 'We deliver comprehensive technology solutions that drive innovation, streamline operations, and accelerate growth for businesses of all sizes.',
        heroButton1: 'Discover Solutions',
        heroButton2: 'Get Started',
        statsTitle1: 'Projects Completed',
        statsValue1: '500+',
        statsDesc1: 'Successful digital transformations',
        statsTitle2: 'Happy Clients',
        statsValue2: '250+',
        statsDesc2: 'Satisfied customers worldwide',
        statsTitle3: 'Support Available',
        statsValue3: '24/7',
        statsDesc3: 'Round-the-clock assistance',
        statsTitle4: 'Uptime Guarantee',
        statsValue4: '99.9%',
        statsDesc4: 'Reliable and stable solutions',
        servicesTitle: 'What We Offer',
        servicesSubtitle: 'Comprehensive technology services tailored to your business needs',
        service1Title: 'Web Development',
        service1Desc: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
        service2Title: 'Mobile Solutions',
        service2Desc: 'Native and cross-platform mobile applications for iOS and Android devices.',
        service3Title: 'Cloud Services',
        service3Desc: 'Scalable cloud infrastructure and migration services for enhanced performance.',
        whyChooseTitle: 'Why Choose Free Space Technologies?',
        whyChooseSubtitle: '',
        whyChooseDesc: 'We combine industry expertise with innovative approaches to deliver solutions that drive real business results.',
        whyChoosePoint1: 'Expert team with 10+ years experience',
        whyChoosePoint2: 'Agile development methodology',
        whyChoosePoint3: 'Scalable and secure solutions',
        whyChoosePoint4: 'Ongoing support and maintenance',
        whyChooseButton: 'Learn More About Us',
        ctaTitle: 'Ready to Get Started?',
        ctaDesc: 'Let\'s discuss your project and explore how we can help you achieve your goals.',
        ctaButton1: 'Contact Us Today',
        ctaButton2: 'Join Our Team'
      },
      {
        id: 'about',
        name: 'About Page',
        aboutHeroTitle: 'About Free Space Technologies',
        aboutHeroDesc: 'We are a dynamic technology company committed to helping businesses thrive in the digital age through innovative solutions and expert guidance.',
        aboutJourneyTitle: 'Our Journey',
        aboutJourneySubtitle: 'Building tomorrow\'s solutions today',
        aboutJourneyDesc1: 'Established in 2018, Free Space Technologies emerged from a simple vision: to bridge the gap between complex technology and practical business solutions.',
        aboutJourneyDesc2: 'What started as a small team of passionate developers has grown into a comprehensive technology partner, serving clients from innovative startups to established enterprises.',
        aboutJourneyDesc3: 'Today, we stand at the forefront of digital transformation, helping organizations leverage cutting-edge technologies to streamline operations, enhance customer experiences, and drive sustainable growth.',
        aboutValuesTitle: 'Our Core Values',
        aboutValuesSubtitle: 'The principles that drive our success',
        aboutValue1Title: 'Innovation',
        aboutValue1Desc: 'We embrace new technologies and creative solutions to solve complex challenges.',
        aboutValue2Title: 'Partnership',
        aboutValue2Desc: 'We build lasting relationships with our clients based on trust and mutual success.',
        aboutValue3Title: 'Excellence',
        aboutValue3Desc: 'We maintain the highest standards in everything we do, from code to customer service.',
        aboutValue4Title: 'Collaboration',
        aboutValue4Desc: 'We believe in the power of teamwork and open communication to achieve great results.',
        aboutTeamTitle: 'Meet Our Leadership',
        aboutTeamSubtitle: 'The experienced professionals guiding our vision',
        aboutStat1Value: '6+',
        aboutStat1Title: 'Years of Excellence',
        aboutStat1Desc: 'Delivering quality solutions since 2018',
        aboutStat2Value: '350+',
        aboutStat2Title: 'Projects Delivered',
        aboutStat2Desc: 'Successful implementations across industries',
        aboutStat3Value: '180+',
        aboutStat3Title: 'Satisfied Clients',
        aboutStat3Desc: 'Long-term partnerships worldwide',
        aboutStat4Value: '35+',
        aboutStat4Title: 'Team Members',
        aboutStat4Desc: 'Skilled professionals and growing'
      },
      {
        id: 'services',
        name: 'Services Page',
        servicesHeroTitle: 'Our Services',
        servicesHeroDesc: 'Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.',
        servicesGridTitle: '',
        servicesGridSubtitle: '',
        techStackTitle: 'Technologies We Use',
        techStackSubtitle: 'Modern tools and frameworks that power exceptional solutions',
        servicesCTATitle: 'Ready to Start Your Project?',
        servicesCTADesc: 'Let\'s discuss your requirements and create a solution that drives results.',
        servicesCTAButton1: 'Get Quote',
        servicesCTAButton2: 'View Portfolio'
      },
      {
        id: 'contact',
        name: 'Contact Page',
        contactHeroTitle: 'Contact Us',
        contactHeroDesc: 'Ready to transform your business? Let\'s discuss your project requirements and explore how we can help you achieve your digital transformation goals.',
        contactFormTitle: 'Let\'s Start a Conversation',
        contactSuccessMessage: 'Thank you for reaching out! We\'ll respond to your inquiry within 24 hours.',
        contactOfficeTitle: 'Visit Our Office',
        contactOfficeAddress: '456 Innovation Drive\nTech Hub Plaza, Suite 200\nSan Francisco, CA 94105',
        contactPhoneTitle: 'Call Us',
        contactPhoneMain: '+1 (415) 555-0123',
        contactPhoneSales: '+1 (415) 555-0124',
        contactPhoneSupport: '+1 (415) 555-0125',
        contactEmailTitle: 'Email Us',
        contactEmailGeneral: 'hello@freespacetec.com',
        contactEmailSales: 'sales@freespacetec.com',
        contactEmailSupport: 'support@freespacetec.com',
        contactHoursTitle: 'Business Hours',
        contactHoursWeekday: 'Mon - Fri: 8:00 AM - 7:00 PM',
        contactHoursSaturday: 'Saturday: 9:00 AM - 5:00 PM',
        contactHoursSunday: 'Sunday: Closed',
        contactMapTitle: 'Our Location',
        contactMapSubtitle: 'Located in the heart of San Francisco\'s tech district'
      },
      {
        id: 'career',
        name: 'Career Page',
        careerHeroTitle: 'Join Our Team',
        careerHeroDesc: 'Build the future of technology with us. We\'re looking for passionate individuals who want to make a real impact in the digital world.',
        careerWhyTitle: 'Why Choose Free Space Technologies?',
        careerWhySubtitle: 'Join a company that values growth, innovation, and work-life balance',
        careerBenefit1Title: 'Professional Growth',
        careerBenefit1Desc: 'Continuous learning opportunities, mentorship programs, and skill development initiatives.',
        careerBenefit2Title: 'Work-Life Balance',
        careerBenefit2Desc: 'Flexible working hours, remote work options, and comprehensive health benefits.',
        careerBenefit3Title: 'Innovation Culture',
        careerBenefit3Desc: 'Work on cutting-edge projects with the latest technologies and creative freedom.',
        careerJobsTitle: 'Current Openings',
        careerJobsSubtitle: 'Discover exciting opportunities to grow your career with us',
        careerNoJobsTitle: 'No Current Openings',
        careerNoJobsDesc: 'We don\'t have any open positions right now, but we\'re always interested in meeting talented professionals. Send us your resume!',
        careerCTATitle: 'Don\'t See the Right Fit?',
        careerCTADesc: 'We\'re always looking for talented individuals who share our passion for technology and innovation. Send us your resume and let\'s talk!',
        careerCTAButton: 'Submit Your Resume'
      },
      {
        id: 'privacy',
        name: 'Privacy Policy',
        privacyTitle: 'Privacy Policy',
        privacyDesc: 'Your privacy matters to us. Learn how we collect, use, and protect your personal information when you use our services.',
        privacyContent: 'Full privacy policy content with all sections...'
      },
      {
        id: 'terms',
        name: 'Terms of Service',
        termsTitle: 'Terms of Service',
        termsDesc: 'Please review these terms carefully as they govern your use of our services.',
        termsContent: 'Full terms of service content with all sections...'
      },
      {
        id: 'learn-more',
        name: 'Learn More Page',
        learnMoreTitle: 'Learn More',
        learnMoreDesc: 'Discover how we\'re transforming businesses through innovative technology solutions',
        learnMoreContent: 'Welcome to the future of business technology! At Free Space Technologies, we believe that every business deserves access to cutting-edge technology solutions...'
      }
    ];

    const savedPages = localStorage.getItem('comprehensivePageContents');
    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      setPages(defaultPages);
      localStorage.setItem('comprehensivePageContents', JSON.stringify(defaultPages));
    }
  };

  const handlePageSelect = (page: PageContent) => {
    setSelectedPage(page);
    setFormData(page);
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
      page.id === selectedPage.id ? formData : page
    );

    setPages(updatedPages);
    localStorage.setItem('comprehensivePageContents', JSON.stringify(updatedPages));
    
    setSelectedPage(formData);
    setIsEditing(false);
    setAlertMessage(`${selectedPage.name} content updated successfully!`);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleCancel = () => {
    if (selectedPage) {
      setFormData(selectedPage);
    }
    setIsEditing(false);
  };

  const renderFormFields = () => {
    if (!selectedPage) return null;

    switch (selectedPage.id) {
      case 'home':
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="heroTitle"
                    value={formData.heroTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="heroDescription"
                    value={formData.heroDescription || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 1 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="heroButton1"
                    value={formData.heroButton1 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 2 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="heroButton2"
                    value={formData.heroButton2 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="1">
              <Accordion.Header>Statistics Section</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsTitle1"
                        value={formData.statsTitle1 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsValue1"
                        value={formData.statsValue1 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsDesc1"
                        value={formData.statsDesc1 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsTitle2"
                        value={formData.statsTitle2 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsValue2"
                        value={formData.statsValue2 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsDesc2"
                        value={formData.statsDesc2 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsTitle3"
                        value={formData.statsTitle3 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsValue3"
                        value={formData.statsValue3 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsDesc3"
                        value={formData.statsDesc3 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsTitle4"
                        value={formData.statsTitle4 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsValue4"
                        value={formData.statsValue4 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="statsDesc4"
                        value={formData.statsDesc4 || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Services Preview Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Services Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesTitle"
                    value={formData.servicesTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Services Section Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesSubtitle"
                    value={formData.servicesSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 1 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="service1Title"
                        value={formData.service1Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 1 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="service1Desc"
                        value={formData.service1Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 2 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="service2Title"
                        value={formData.service2Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 2 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="service2Desc"
                        value={formData.service2Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 3 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="service3Title"
                        value={formData.service3Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Service 3 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="service3Desc"
                        value={formData.service3Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Why Choose Us Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChooseTitle"
                    value={formData.whyChooseTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Section Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="whyChooseDesc"
                    value={formData.whyChooseDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Point 1</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChoosePoint1"
                    value={formData.whyChoosePoint1 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Point 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChoosePoint2"
                    value={formData.whyChoosePoint2 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Point 3</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChoosePoint3"
                    value={formData.whyChoosePoint3 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Point 4</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChoosePoint4"
                    value={formData.whyChoosePoint4 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="whyChooseButton"
                    value={formData.whyChooseButton || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Call to Action Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="ctaTitle"
                    value={formData.ctaTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="ctaDesc"
                    value={formData.ctaDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 1 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="ctaButton1"
                    value={formData.ctaButton1 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 2 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="ctaButton2"
                    value={formData.ctaButton2 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

      case 'about':
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutHeroTitle"
                    value={formData.aboutHeroTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="aboutHeroDesc"
                    value={formData.aboutHeroDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Journey Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Journey Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutJourneyTitle"
                    value={formData.aboutJourneyTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Journey Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutJourneySubtitle"
                    value={formData.aboutJourneySubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Journey Description 1</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="aboutJourneyDesc1"
                    value={formData.aboutJourneyDesc1 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Journey Description 2</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="aboutJourneyDesc2"
                    value={formData.aboutJourneyDesc2 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Journey Description 3</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="aboutJourneyDesc3"
                    value={formData.aboutJourneyDesc3 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Core Values Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Values Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutValuesTitle"
                    value={formData.aboutValuesTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Values Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutValuesSubtitle"
                    value={formData.aboutValuesSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 1 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutValue1Title"
                        value={formData.aboutValue1Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 1 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="aboutValue1Desc"
                        value={formData.aboutValue1Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 2 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutValue2Title"
                        value={formData.aboutValue2Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 2 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="aboutValue2Desc"
                        value={formData.aboutValue2Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 3 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutValue3Title"
                        value={formData.aboutValue3Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 3 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="aboutValue3Desc"
                        value={formData.aboutValue3Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 4 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutValue4Title"
                        value={formData.aboutValue4Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Value 4 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="aboutValue4Desc"
                        value={formData.aboutValue4Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Team Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Team Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutTeamTitle"
                    value={formData.aboutTeamTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Team Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="aboutTeamSubtitle"
                    value={formData.aboutTeamSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Statistics Section</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat1Value"
                        value={formData.aboutStat1Value || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat1Title"
                        value={formData.aboutStat1Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 1 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat1Desc"
                        value={formData.aboutStat1Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat2Value"
                        value={formData.aboutStat2Value || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat2Title"
                        value={formData.aboutStat2Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 2 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat2Desc"
                        value={formData.aboutStat2Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat3Value"
                        value={formData.aboutStat3Value || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat3Title"
                        value={formData.aboutStat3Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 3 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat3Desc"
                        value={formData.aboutStat3Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Value</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat4Value"
                        value={formData.aboutStat4Value || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat4Title"
                        value={formData.aboutStat4Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Stat 4 Description</Form.Label>
                      <Form.Control
                        type="text"
                        name="aboutStat4Desc"
                        value={formData.aboutStat4Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

      case 'services':
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesHeroTitle"
                    value={formData.servicesHeroTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="servicesHeroDesc"
                    value={formData.servicesHeroDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Technology Stack Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Tech Stack Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="techStackTitle"
                    value={formData.techStackTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tech Stack Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="techStackSubtitle"
                    value={formData.techStackSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Call to Action Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesCTATitle"
                    value={formData.servicesCTATitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="servicesCTADesc"
                    value={formData.servicesCTADesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 1 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesCTAButton1"
                    value={formData.servicesCTAButton1 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Button 2 Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="servicesCTAButton2"
                    value={formData.servicesCTAButton2 || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

      case 'contact':
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactHeroTitle"
                    value={formData.contactHeroTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="contactHeroDesc"
                    value={formData.contactHeroDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Contact Form Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Form Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactFormTitle"
                    value={formData.contactFormTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Success Message</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactSuccessMessage"
                    value={formData.contactSuccessMessage || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Contact Information</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Office Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactOfficeTitle"
                    value={formData.contactOfficeTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Office Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="contactOfficeAddress"
                    value={formData.contactOfficeAddress || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactPhoneTitle"
                    value={formData.contactPhoneTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Main Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactPhoneMain"
                        value={formData.contactPhoneMain || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Sales Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactPhoneSales"
                        value={formData.contactPhoneSales || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Support Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactPhoneSupport"
                        value={formData.contactPhoneSupport || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactEmailTitle"
                    value={formData.contactEmailTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>General Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactEmailGeneral"
                        value={formData.contactEmailGeneral || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Sales Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactEmailSales"
                        value={formData.contactEmailSales || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Support Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="contactEmailSupport"
                        value={formData.contactEmailSupport || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Business Hours Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactHoursTitle"
                    value={formData.contactHoursTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Weekday Hours</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactHoursWeekday"
                    value={formData.contactHoursWeekday || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Saturday Hours</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactHoursSaturday"
                    value={formData.contactHoursSaturday || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Sunday Hours</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactHoursSunday"
                    value={formData.contactHoursSunday || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Map Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Map Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactMapTitle"
                    value={formData.contactMapTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Map Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactMapSubtitle"
                    value={formData.contactMapSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

      case 'career':
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Hero Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerHeroTitle"
                    value={formData.careerHeroTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Hero Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="careerHeroDesc"
                    value={formData.careerHeroDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Why Work With Us Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerWhyTitle"
                    value={formData.careerWhyTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Section Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerWhySubtitle"
                    value={formData.careerWhySubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 1 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="careerBenefit1Title"
                        value={formData.careerBenefit1Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 1 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="careerBenefit1Desc"
                        value={formData.careerBenefit1Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 2 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="careerBenefit2Title"
                        value={formData.careerBenefit2Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 2 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="careerBenefit2Desc"
                        value={formData.careerBenefit2Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 3 Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="careerBenefit3Title"
                        value={formData.careerBenefit3Title || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Benefit 3 Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="careerBenefit3Desc"
                        value={formData.careerBenefit3Desc || ''}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Job Listings Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Jobs Section Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerJobsTitle"
                    value={formData.careerJobsTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jobs Section Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerJobsSubtitle"
                    value={formData.careerJobsSubtitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No Jobs Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerNoJobsTitle"
                    value={formData.careerNoJobsTitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>No Jobs Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="careerNoJobsDesc"
                    value={formData.careerNoJobsDesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Call to Action Section</Accordion.Header>
              <Accordion.Body>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerCTATitle"
                    value={formData.careerCTATitle || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="careerCTADesc"
                    value={formData.careerCTADesc || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>CTA Button Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="careerCTAButton"
                    value={formData.careerCTAButton || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );

      case 'privacy':
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy Title</Form.Label>
              <Form.Control
                type="text"
                name="privacyTitle"
                value={formData.privacyTitle || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="privacyDesc"
                value={formData.privacyDesc || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Privacy Policy Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                name="privacyContent"
                value={formData.privacyContent || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter the full privacy policy content here..."
              />
            </Form.Group>
          </>
        );

      case 'terms':
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Terms of Service Title</Form.Label>
              <Form.Control
                type="text"
                name="termsTitle"
                value={formData.termsTitle || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Terms of Service Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="termsDesc"
                value={formData.termsDesc || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Terms of Service Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                name="termsContent"
                value={formData.termsContent || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter the full terms of service content here..."
              />
            </Form.Group>
          </>
        );

      case 'learn-more':
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Learn More Title</Form.Label>
              <Form.Control
                type="text"
                name="learnMoreTitle"
                value={formData.learnMoreTitle || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Learn More Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="learnMoreDesc"
                value={formData.learnMoreDesc || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Learn More Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={15}
                name="learnMoreContent"
                value={formData.learnMoreContent || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter the full learn more content here..."
              />
            </Form.Group>
          </>
        );

      default:
        return null;
    }
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
              <Card.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <Form>
                  {renderFormFields()}
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Card className="admin-card">
              <Card.Body className="text-center py-5">
                <i className="fas fa-mouse-pointer fa-3x text-muted mb-3"></i>
                <h4>Select a Page to Edit</h4>
                <p className="text-muted">
                  Choose a page from the list on the left to view and edit all its text content.
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
