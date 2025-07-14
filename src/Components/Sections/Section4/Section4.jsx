import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Section4.css';

const Section4 = () => {
  return (
    <section className="expert-section py-5">
      <Container>
        {/* Headings */}
        <Row className="text-center mb-4">
          <Col>
            <h2 className="main-heading">Expert guidance for stress-free decisions</h2>
            <p className="sub-heading">BACKED BY EXPERIENCE FROM 2,500+ WEDDINGS</p>
          </Col>
        </Row>

        {/* Image */}
        <Row className="justify-content-center">
          <Col md={10}>
            <img
              src="https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan.jpg" // replace with your own hosted image if needed
              alt="Expert Consultation"
              className="img-fluid rounded expert-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default  Section4;
