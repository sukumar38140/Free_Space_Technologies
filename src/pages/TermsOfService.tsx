
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TermsOfService = () => {
  return (
    <>
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Terms of Service</h1>
                <p className="lead">
                  Please read these terms carefully before using our services.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="animate-fade-up">
                <p className="text-muted mb-4">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>

                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing and using our website and services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>

                <h3>2. Services Description</h3>
                <p>
                  TechCorp Solutions provides technology consulting, web development, mobile app development, 
                  and related services as described on our website.
                </p>

                <h3>3. User Responsibilities</h3>
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate and complete information</li>
                  <li>Use our services lawfully and ethically</li>
                  <li>Not interfere with the proper working of our services</li>
                  <li>Respect intellectual property rights</li>
                </ul>

                <h3>4. Intellectual Property</h3>
                <p>
                  All content on this website, including text, graphics, logos, and software, is the 
                  property of TechCorp Solutions and is protected by copyright and other intellectual 
                  property laws.
                </p>

                <h3>5. Limitation of Liability</h3>
                <p>
                  TechCorp Solutions shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>

                <h3>6. Service Availability</h3>
                <p>
                  We strive to maintain service availability but do not guarantee uninterrupted access. 
                  We reserve the right to modify or discontinue services with reasonable notice.
                </p>

                <h3>7. Privacy</h3>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect and use your information.
                </p>

                <h3>8. Termination</h3>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior 
                  notice, for any breach of these terms.
                </p>

                <h3>9. Governing Law</h3>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the 
                  jurisdiction in which TechCorp Solutions operates.
                </p>

                <h3>10. Changes to Terms</h3>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website.
                </p>

                <h3>11. Contact Information</h3>
                <p>
                  For questions about these terms, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> legal@techcorp.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Tech Street, Digital City, DC 12345
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TermsOfService;
