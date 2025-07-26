import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const services = [
  {
    title: "💍 Wedding Planning",
    description:
      "From traditional ceremonies to destination weddings, we provide complete planning, decoration, catering, and guest management services.",
  },
  {
    title: "💑 Engagement Events",
    description:
      "Celebrate your special day with style. We offer beautiful engagement setups, personalized themes, and entertainment options.",
  },
  {
    title: "🎂 Birthday Parties",
    description:
      "Whether it’s a kid’s party or a surprise birthday bash, we organize themed decor, fun games, cakes, and full coordination.",
  },
  {
    title: "👶 Baby Showers",
    description:
      "Make your baby shower memorable with cute themes, games, gifts, and photo booths tailored for joyful celebrations.",
  },
  {
    title: "🏢 Corporate Events",
    description:
      "From product launches to annual meetups, we handle all corporate event needs with precision and professionalism.",
  },
  {
    title: "📸 Photography & Videography",
    description:
      "Capture every special moment with our professional photography and videography services.",
  },
];

const Services = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h2 className="text-primary fw-bold">Our Services</h2>
        <p className="text-muted">We bring your vision to life with creativity and perfection.</p>
      </div>

      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
