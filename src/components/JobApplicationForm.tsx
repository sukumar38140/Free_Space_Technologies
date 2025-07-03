
import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

interface JobApplicationFormProps {
  show: boolean;
  onHide: () => void;
  jobTitle: string;
  jobId: string;
}

interface ApplicationData {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  email: string;
  phone: string;
  resume: string;
  coverLetter: string;
  experience: string;
  appliedAt: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected';
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ show, onHide, jobTitle, jobId }) => {
  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
    experience: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create application object
    const application: ApplicationData = {
      id: Date.now().toString(),
      jobId,
      jobTitle,
      ...formData,
      appliedAt: new Date().toISOString(),
      status: 'pending'
    };

    // Save to localStorage
    const existingApplications = localStorage.getItem('jobApplications');
    const applications = existingApplications ? JSON.parse(existingApplications) : [];
    applications.push(application);
    localStorage.setItem('jobApplications', JSON.stringify(applications));

    setAlertMessage('Application submitted successfully! We will review your application and get back to you soon.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      applicantName: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: '',
      experience: ''
    });

    setTimeout(() => {
      setShowAlert(false);
      onHide();
    }, 3000);
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Apply for {jobTitle}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {showAlert && (
            <Alert variant="success" className="mb-4">
              <i className="fas fa-check-circle me-2"></i>
              {alertMessage}
            </Alert>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Full Name *</Form.Label>
            <Form.Control
              type="text"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Resume/CV (URL or brief description) *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="resume"
              value={formData.resume}
              onChange={handleInputChange}
              required
              placeholder="Paste your resume URL or provide a brief overview of your background"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cover Letter *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
              placeholder="Tell us why you're interested in this position and what makes you a great fit"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Years of Experience *</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              placeholder="e.g., 3 years in AI/ML, 5 years in software development"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button type="submit" className="btn-gradient-primary">
            Submit Application
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default JobApplicationForm;
