
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import JobApplicationForm from '../components/JobApplicationForm';

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
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);

  useEffect(() => {
    // Load jobs from localStorage
    const savedJobs = localStorage.getItem('careerPosts');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    } else {
      // Default AI/Tech focused jobs
      const defaultJobs: JobPost[] = [
        {
          id: '1',
          title: 'AI/ML Engineer',
          department: 'Artificial Intelligence',
          location: 'Remote',
          type: 'Full-time',
          description: 'Join our AI team to develop cutting-edge machine learning models and intelligent systems. You will work on projects involving computer vision, NLP, and predictive analytics.',
          requirements: 'Master\'s degree in Computer Science, AI, or related field. 3+ years of experience with Python, TensorFlow/PyTorch, and ML algorithms. Experience with cloud platforms (AWS/Azure/GCP) preferred.',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          title: 'IoT Systems Developer',
          department: 'Internet of Things',
          location: 'Hybrid',
          type: 'Full-time',
          description: 'Design and develop IoT solutions that connect physical devices to intelligent systems. Work with sensors, edge computing, and real-time data processing.',
          requirements: 'Bachelor\'s degree in Engineering or Computer Science. 4+ years of experience with IoT platforms, embedded systems, and wireless protocols. Knowledge of Arduino, Raspberry Pi, and cloud IoT services.',
          createdAt: new Date().toISOString()
        },
        {
          id: '3',
          title: 'Robotics Engineer',
          department: 'Robotics',
          location: 'On-site',
          type: 'Full-time',
          description: 'Develop autonomous robotics systems for industrial and commercial applications. Work with computer vision, motion planning, and control systems.',
          requirements: 'Master\'s degree in Robotics, Mechanical Engineering, or related field. 5+ years of experience with ROS, computer vision, and robotics hardware. Strong background in control theory and kinematics.',
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

  const handleApplyClick = (job: JobPost) => {
    setSelectedJob(job);
    setShowApplicationForm(true);
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Join Our Innovation Team</h1>
                <p className="lead">
                  Shape the future of AI, IoT, and robotics with us. Build intelligent systems 
                  that transform industries and push the boundaries of technology.
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
              <h2 className="section-title animate-fade-up">Why Work With Free Space Technologies?</h2>
              <p className="section-subtitle animate-fade-up">
                Be part of a team that's pioneering the future
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up">
                <div className="card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <Card.Body>
                  <h5>Cutting-Edge Projects</h5>
                  <p>Work on revolutionary AI, IoT, and robotics projects that shape tomorrow's world.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="card-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <Card.Body>
                  <h5>Continuous Learning</h5>
                  <p>Access to latest technologies, research, and professional development opportunities.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="custom-card text-center animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="card-icon">
                  <i className="fas fa-users"></i>
                </div>
                <Card.Body>
                  <h5>Expert Team</h5>
                  <p>Collaborate with leading experts in AI, machine learning, and advanced robotics.</p>
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
                Join us in building the future of intelligent technology
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
                        <Button 
                          className="btn-gradient-primary"
                          onClick={() => handleApplyClick(job)}
                        >
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
                  We're always interested in hearing from talented individuals passionate about 
                  AI, IoT, robotics, and emerging technologies.
                </p>
                <Button className="btn-gradient-secondary" size="lg">
                  Send Your Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm
          show={showApplicationForm}
          onHide={handleCloseApplicationForm}
          jobTitle={selectedJob.title}
          jobId={selectedJob.id}
        />
      )}
    </>
  );
};

export default Career;
