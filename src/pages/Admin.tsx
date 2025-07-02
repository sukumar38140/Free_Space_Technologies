
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Modal, Alert } from 'react-bootstrap';

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

const Admin = () => {
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPost | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  });

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    const savedJobs = localStorage.getItem('careerPosts');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  };

  const saveJobs = (updatedJobs: JobPost[]) => {
    localStorage.setItem('careerPosts', JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingJob) {
      // Update existing job
      const updatedJobs = jobs.map(job => 
        job.id === editingJob.id 
          ? { ...editingJob, ...formData }
          : job
      );
      saveJobs(updatedJobs);
      setAlertMessage('Job post updated successfully!');
    } else {
      // Create new job
      const newJob: JobPost = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      const updatedJobs = [...jobs, newJob];
      saveJobs(updatedJobs);
      setAlertMessage('Job post created successfully!');
    }
    
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    handleCloseModal();
  };

  const handleEdit = (job: JobPost) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements
    });
    setShowModal(true);
  };

  const handleDelete = (jobId: string) => {
    if (window.confirm('Are you sure you want to delete this job post?')) {
      const updatedJobs = jobs.filter(job => job.id !== jobId);
      saveJobs(updatedJobs);
      setAlertMessage('Job post deleted successfully!');
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingJob(null);
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    });
  };

  const handleNewJob = () => {
    setEditingJob(null);
    setFormData({
      title: '',
      department: '',
      location: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    });
    setShowModal(true);
  };

  return (
    <>
      {/* Admin Header */}
      <section className="admin-header" style={{marginTop: '80px'}}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-3">Admin Dashboard</h1>
              <p className="lead">Manage career posts and job listings</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Admin Content */}
      <section className="py-5">
        <Container>
          {showAlert && (
            <Alert variant="success" className="mb-4">
              <i className="fas fa-check-circle me-2"></i>
              {alertMessage}
            </Alert>
          )}

          <Row className="mb-4">
            <Col lg={12} className="d-flex justify-content-between align-items-center">
              <h3>Job Posts Management</h3>
              <Button className="btn-gradient-primary" onClick={handleNewJob}>
                <i className="fas fa-plus me-2"></i>
                Add New Job
              </Button>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <Card className="admin-card">
                <Card.Body>
                  {jobs.length > 0 ? (
                    <Table responsive hover>
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Department</th>
                          <th>Location</th>
                          <th>Type</th>
                          <th>Created</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.map((job) => (
                          <tr key={job.id}>
                            <td><strong>{job.title}</strong></td>
                            <td>{job.department}</td>
                            <td>{job.location}</td>
                            <td>
                              <span className={`badge bg-${job.type === 'Full-time' ? 'primary' : 'secondary'}`}>
                                {job.type}
                              </span>
                            </td>
                            <td>{new Date(job.createdAt).toLocaleDateString()}</td>
                            <td>
                              <Button
                                variant="outline-primary"
                                size="sm"
                                className="me-2"
                                onClick={() => handleEdit(job)}
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDelete(job.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <div className="text-center py-5">
                      <i className="fas fa-briefcase fa-3x text-muted mb-3"></i>
                      <h4>No Job Posts</h4>
                      <p className="text-muted">Create your first job post to get started.</p>
                      <Button className="btn-gradient-primary" onClick={handleNewJob}>
                        Add New Job
                      </Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Add/Edit Job Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingJob ? 'Edit Job Post' : 'Add New Job Post'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title *</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Senior Developer"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department *</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Engineering"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Location *</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Remote, New York, NY"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Type *</Form.Label>
                  <Form.Select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Job Description *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                placeholder="Describe the role and responsibilities..."
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Requirements *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                required
                placeholder="List the required qualifications and skills..."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" className="btn-gradient-primary">
              {editingJob ? 'Update Job' : 'Create Job'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Admin;
