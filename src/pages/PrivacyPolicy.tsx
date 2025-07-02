
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-primary-gradient text-white py-5" style={{marginTop: '80px'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="animate-fade-up">
                <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
                <p className="lead">
                  Your privacy is important to us. This policy outlines how we collect, 
                  use, and protect your personal information.
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

                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul>
                  <li>Fill out forms on our website</li>
                  <li>Contact us via email or phone</li>
                  <li>Subscribe to our newsletters</li>
                  <li>Apply for job positions</li>
                </ul>

                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Process job applications</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h3>3. Information Sharing</h3>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law.
                </p>

                <h3>4. Data Security</h3>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3>5. Cookies and Tracking</h3>
                <p>
                  Our website uses cookies to enhance your browsing experience. You can control cookie 
                  preferences through your browser settings.
                </p>

                <h3>6. Your Rights</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>

                <h3>7. Children's Privacy</h3>
                <p>
                  Our services are not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13.
                </p>

                <h3>8. Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on our website.
                </p>

                <h3>9. Contact Us</h3>
                <p>
                  If you have questions about this privacy policy, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@techcorp.com<br />
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

export default PrivacyPolicy;
