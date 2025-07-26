import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Event team"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h2 className="text-primary fw-bold">About Us</h2>
          <p>
            <strong>Welcome to Celebrato Events!</strong> We are a full-service event
            management company specializing in <strong>weddings</strong>,
            <strong> engagements</strong>, <strong>birthday parties</strong>,
            <strong> baby showers</strong>, and <strong>corporate events</strong>.
          </p>
          <p>
            Our mission is to turn your dreams into reality with creativity,
            professionalism, and flawless execution. Whether it's an intimate
            gathering or a grand celebration, our expert planners handle every
            detail so you can enjoy the moment.
          </p>
        </Col>
      </Row>

      <h3 className="text-center text-success mb-4">Why Choose Us?</h3>
      <Row className="g-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🎯 Personalized Planning</Card.Title>
              <Card.Text>
                We craft each event uniquely to reflect your style, preferences,
                and budget.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🌟 Professional Team</Card.Title>
              <Card.Text>
                Our experienced team of designers, coordinators, and caterers work
                with passion and precision.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🏆 Memorable Moments</Card.Title>
              <Card.Text>
                From decorations to music, we ensure every detail creates a lasting
                impression on your guests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
