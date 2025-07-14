
import React, { useState } from 'react';
import { Modal, Form, Button, Nav, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  show: boolean;
  onHide: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'admin'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    username: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const { login: adminLogin } = useAdminAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (activeTab === 'login') {
        const success = await login(formData.email, formData.password);
        if (success) {
          onHide();
          setFormData({ email: '', password: '', name: '', confirmPassword: '', username: '' });
        } else {
          setError('Invalid email or password');
        }
      } else if (activeTab === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        
        const success = await signup(formData.email, formData.password, formData.name);
        if (success) {
          onHide();
          setFormData({ email: '', password: '', name: '', confirmPassword: '', username: '' });
        } else {
          setError('User with this email already exists');
        }
      } else if (activeTab === 'admin') {
        const success = await adminLogin(formData.username, formData.password);
        if (success) {
          onHide();
          setFormData({ email: '', password: '', name: '', confirmPassword: '', username: '' });
          navigate('/admin');
        } else {
          setError('Invalid username or password');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
    
    setLoading(false);
  };

  const switchTab = (tab: 'login' | 'signup' | 'admin') => {
    setActiveTab(tab);
    setError('');
    setFormData({ email: '', password: '', name: '', confirmPassword: '', username: '' });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {activeTab === 'login' && 'Sign In'}
          {activeTab === 'signup' && 'Sign Up'}
          {activeTab === 'admin' && 'Admin Sign In'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Nav variant="pills" className="justify-content-center mb-4">
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'login'} 
              onClick={() => switchTab('login')}
              style={{ cursor: 'pointer' }}
            >
              Sign In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'signup'} 
              onClick={() => switchTab('signup')}
              style={{ cursor: 'pointer' }}
            >
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'admin'} 
              onClick={() => switchTab('admin')}
              style={{ cursor: 'pointer' }}
            >
              Admin
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {error && (
          <Alert variant="danger" className="mb-3">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </Form.Group>
          )}

          {activeTab !== 'admin' && (
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />
            </Form.Group>
          )}

          {activeTab === 'admin' && (
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                placeholder="Enter your username"
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
            />
          </Form.Group>

          {activeTab === 'signup' && (
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                placeholder="Confirm your password"
              />
            </Form.Group>
          )}

          <Button 
            type="submit" 
            className="btn-gradient-primary w-100"
            disabled={loading}
          >
            {loading ? 'Please wait...' : 
              (activeTab === 'login' ? 'Sign In' :
              (activeTab === 'signup' ? 'Sign Up' : 'Admin Sign In'))}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
