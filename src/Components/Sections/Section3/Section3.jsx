import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Section3.css';

const Section3 = () => {
  return (
    <div className="consult-wrapper">
      <Container>
        <Row className="align-items-center">
          {/* Left Heading */}
          <Col md={6} className="consult-text">
            <h2>Got a wedding in the works?<br />Let’s make some magic happen!</h2>
          </Col>

          {/* Right Form */}
          <Col md={6} className="consult-form">
            <h5 className="form-heading">Consult an Expert</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter your Full Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="+91 Enter Phone Number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Select a Month</option>
                  <option>August</option>
                  <option>September</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Select a Location</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Select a Relation</option>
                  <option>Bride</option>
                  <option>Groom</option>
                  <option>Parent</option>
                </Form.Select>
              </Form.Group>
              <Form.Check className="mb-3" label="Send me updates on WhatsApp" />
              <Button className="custom-button w-100" type="submit">
                Generate Free Proposal
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
