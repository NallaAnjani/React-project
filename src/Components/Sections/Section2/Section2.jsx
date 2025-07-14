import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2">
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          {/* Left Side Text */}
          <Col md={6} className="text-content" data-aos="fade-up">
            <h2>Custom packages, fully editable by you</h2>
            <p>
              Tailor every element of your event with full control — from decor to venue. Perfect for weddings, birthdays, and more!
            </p>
            <Button className="custom-btn">Get a Free Design Consultation</Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="image-content" data-aos="fade-left">
            <img
              src="https://m.media-amazon.com/images/I/91Gz-l9nmAL._UF894,1000_QL80_.jpg"
              alt="Event management example"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
