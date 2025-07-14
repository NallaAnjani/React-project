import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Section5.css';

const Section5 = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="mb-4 text-center">
          <Col>
            <h2 className="contact-heading">Get in Touch</h2>
            <p className="contact-subheading">
              We'd love to hear from you. Whether you have a question or just want to say hi,
              our team is ready to help you make your event magical.
            </p>
          </Col>
        </Row>

        <Row className="align-items-stretch">
          {/* Contact Info */}
          <Col md={5} className="mb-4 mb-md-0 contact-info d-flex flex-column justify-content-center px-4">
            <h4>Contact Details</h4>
            <p><strong>Email:</strong> info@eventgenius.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> 123 Event Street, Jubilee Hills, Hyderabad</p>
            <p><strong>Follow us:</strong> Instagram | Facebook | Twitter</p>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <Form className="contact-form p-4 rounded">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
              </Form.Group>

              <Button variant="primary" className="contact-btn" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section5;
