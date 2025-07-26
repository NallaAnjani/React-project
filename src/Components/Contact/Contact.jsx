import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center text-primary fw-bold mb-4">Contact Us</h2>

      <Row className="mb-5">
        <Col md={6}>
          <h4 className="text-success mb-3">Get in Touch</h4>
          <p><FaMapMarkerAlt className="text-danger" /> Vamshi Ram Jyothi Square, 2nd floor,<br />KPHB Road No 3, Hyderabad, Telangana 500072</p>
          <p><FaEnvelope className="text-warning" /> anjanievents@gmail.com</p>
          <p><FaPhone className="text-primary" /> +91-9391147650</p>

          <div className="mt-3">
            <h5 className="text-muted">Follow us</h5>
            <a href="#" className="me-3 text-decoration-none text-dark"><FaFacebookF /></a>
            <a href="#" className="me-3 text-decoration-none text-dark"><FaInstagram /></a>
            <a href="#" className="text-decoration-none text-dark"><FaYoutube /></a>
          </div>
        </Col>

        <Col md={6}>
          <h4 className="mb-3">Send Us a Message</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here..." required />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5 className="mb-3">Find Us on Google Maps</h5>
          <iframe
            title="Anjani Events Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.346728779829!2d78.3939244!3d17.4422918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc9e6f8fd9%3A0x5e2c8f43d3ff8a71!2sKPHB%20Colony%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1629198544345!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
