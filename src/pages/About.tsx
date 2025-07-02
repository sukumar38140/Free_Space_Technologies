
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: '15+ years of experience in technology leadership and business strategy.'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in software architecture and emerging technologies.'
    },
    {
      name: 'Mike Davis',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    },
    {
      name: 'Emily Chen',
      position: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative designer focused on user-centered design principles.'
    }
  ];

  const values = [
    {
      icon: 'fas fa-rocket',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches to solve complex problems.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'We are passionate about technology and committed to delivering exceptional results.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: 'fas fa-users',
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve mutual success.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="animate-fade-left">
                <h1 className="display-4 fw-bold mb-4">About TechCorp Solutions</h1>
                <p className="lead">
                  We are a forward-thinking technology company dedicated to transforming 
                  businesses through innovative digital solutions and exceptional service.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="animate-fade-right">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
                  alt="Our Team"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="animate-fade-up text-center mb-5">
                <h2 className="section-title">Our Story</h2>
                <p className="section-subtitle">
                  From humble beginnings to industry leadership
                </p>
              </div>
              <div className="animate-fade-up">
                <p className="lead text-center mb-4">
                  Founded in 2015, TechCorp Solutions began as a small team of passionate 
                  developers with a vision to help businesses leverage technology for growth.
                </p>
                <p className="mb-4">
                  Over the years, we've evolved into a comprehensive technology partner, 
                  serving clients across various industries from startups to Fortune 500 companies. 
                  Our commitment to excellence and innovation has been the driving force behind 
                  our success and the success of our clients.
                </p>
                <p className="mb-4">
                  Today, we continue to push the boundaries of what's possible, embracing 
                  emerging technologies like AI, machine learning, and cloud computing to 
                  deliver solutions that not only meet current needs but also prepare 
                  businesses for the future.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Our Values</h2>
              <p className="section-subtitle animate-fade-up">
                The principles that guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="custom-card text-center animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card-icon">
                    <i className={value.icon}></i>
                  </div>
                  <Card.Body>
                    <h5>{value.title}</h5>
                    <p>{value.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Our Team */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Meet Our Team</h2>
              <p className="section-subtitle animate-fade-up">
                The talented professionals behind our success
              </p>
            </Col>
          </Row>
          <Row>
            {team.map((member, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="team-card animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="team-avatar"
                  />
                  <h5>{member.name}</h5>
                  <h6 className="text-primary mb-3">{member.position}</h6>
                  <p className="text-muted">{member.bio}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="section-padding bg-dark-gradient text-white">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up">
                <div className="stats-counter text-white">8+</div>
                <h5>Years of Experience</h5>
                <p>Delivering excellence since 2015</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="stats-counter text-white">500+</div>
                <h5>Projects Completed</h5>
                <p>Successful deliveries worldwide</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="stats-counter text-white">200+</div>
                <h5>Happy Clients</h5>
                <p>Satisfied customers globally</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="stats-counter text-white">50+</div>
                <h5>Team Members</h5>
                <p>Expert professionals</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
