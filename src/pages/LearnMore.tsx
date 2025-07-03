
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LearnMore = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Load learn more content from localStorage
    const savedContent = localStorage.getItem('learnMoreContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ marginTop: '80px', paddingTop: '60px', paddingBottom: '60px' }}>
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="display-4 fw-bold mb-3">Learn More</h1>
              <p className="lead">Discover more about our innovative solutions and technologies</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              {content ? (
                <Card className="shadow-sm">
                  <Card.Body className="p-5">
                    <div 
                      className="content-display"
                      dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }}
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333'
                      }}
                    />
                  </Card.Body>
                </Card>
              ) : (
                <Card className="shadow-sm">
                  <Card.Body className="p-5 text-center">
                    <div className="py-5">
                      <i className="fas fa-info-circle fa-4x text-muted mb-4"></i>
                      <h3 className="mb-3">No Content Available</h3>
                      <p className="text-muted">
                        Content for this section hasn't been added yet. Please check back later or contact us for more information.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LearnMore;
