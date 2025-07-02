
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

interface JobPost {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string;
  createdAt: string;
}

const Career = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);

  useEffect(() => {
    // Load jobs from localStorage
    const savedJobs = localStorage.getItem('careerPosts');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      // Default jobs if none exist
      const defaultJobs: JobPost[] = [
        {
          id: '1',
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          location: 'Remote',
          type: 'Full-time',
          description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
          requirements: 'Bachelor\'s degree in Computer Science or related field. 5+ years of experience with React, Node.js, and database technologies. Strong problem-solving skills and ability to work in a fast-paced environment.',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          title: 'UX/UI Designer',
          department: 'Design',
          location: 'New York, NY',
          type: 'Full-time',
          description: 'Join our design team to create beautiful and intuitive user experiences. You will work closely with developers and product managers to bring designs to life.',
          requirements: 'Bachelor\'s degree in Design or related field. 3+ years of experience in UX/UI design. Proficiency in Figma, Adobe Creative Suite. Strong portfolio demonstrating design thinking and user-centered design principles.',
          createdAt: new Date().toISOString()
        },
        {
          id: '3',
          title: 'DevOps Engineer',
          department: 'Infrastructure',
          location: 'San Francisco, CA',
          type: 'Full-time',
          description: 'We need a DevOps Engineer to help us scale our infrastructure and improve our deployment processes. You will work with cloud technologies and automation tools.',
          requirements: 'Bachelor\'s degree in Computer Science or related field. 4+ years of experience with AWS/Azure, Docker, Kubernetes. Experience with CI/CD pipelines and infrastructure as code.',
          createdAt: new Date().toISOString()
        }
      ];
      setJobs(defaultJobs);
      localStorage.setItem('careerPosts', JSON.stringify(defaultJobs));
    }
  }, []);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time': return 'primary';
      case 'part-time': return 'secondary';
      case 'contract': return 'warning';
      case 'internship': return 'info';
      default: return 'primary';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Join Our Team</h1>
                <p className="lead">
                  Build your career with us and be part of a team that's shaping the future of technology.
                  We offer competitive benefits, growth opportunities, and a collaborative work environment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Why Work With Us?</h2>
              <p className="section-subtitle animate-fade-up">
                Discover the benefits of joining our team
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up">
                <div className="card-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <Card.Body>
                  <h5>Growth Opportunities</h5>
                  <p>Continuous learning and career advancement opportunities with mentorship programs.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <Card.Body>
                  <h5>Work-Life Balance</h5>
                  <p>Flexible working hours, remote work options, and comprehensive health benefits.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">
                  <i className="fas fa-users"></i>
                </div>
                <Card.Body>
                  <h5>Amazing Team</h5>
                  <p>Work with talented professionals in a collaborative and supportive environment.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title animate-fade-up">Open Positions</h2>
              <p className="section-subtitle animate-fade-up">
                Find your next career opportunity
              </p>
            </Col>
          </Row>
          <Row>
            {jobs.length > 0 ? (
              jobs.map((job, index) => (
                <Col lg={12} key={job.id} className="mb-4">
                  <div className="career-post animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                    <Row className="align-items-center">
                      <Col lg={8}>
                        <h4 className="mb-2">{job.title}</h4>
                        <div className="mb-3">
                          <Badge bg="primary" className="me-2">{job.department}</Badge>
                          <Badge bg={getTypeColor(job.type)} className="me-2">{job.type}</Badge>
                          <Badge bg="secondary">
                            <i className="fas fa-map-marker-alt me-1"></i>
                            {job.location}
                          </Badge>
                        </div>
                        <p className="mb-3">{job.description}</p>
                        <div className="mb-3">
                          <h6>Requirements:</h6>
                          <p className="text-muted small">{job.requirements}</p>
                        </div>
                      </Col>
                      <Col lg={4} className="text-end">
                        <div className="mb-3">
                          <small className="text-muted">
                            Posted: {new Date(job.createdAt).toLocaleDateString()}
                          </small>
                        </div>
                        <Button className="btn-gradient-primary">
                          Apply Now
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))
            ) : (
              <Col lg={12} className="text-center">
                <div className="animate-fade-up">
                  <h4>No Open Positions</h4>
                  <p>We don't have any open positions at the moment, but we're always looking for talented individuals. Feel free to send us your resume!</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-gradient text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h2 className="display-5 fw-bold mb-4">Don't See a Perfect Match?</h2>
                <p className="lead mb-4">
                  We're always interested in hearing from talented individuals. 
                  Send us your resume and let us know how you can contribute to our team.
                </p>
                <Button className="btn-gradient-secondary" size="lg">
                  Send Your Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Career;
