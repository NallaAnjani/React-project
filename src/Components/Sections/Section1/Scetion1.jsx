import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Section1.css';

const services = [
  {
    title: 'Marriage',
    image: 'https://www.thetamarindtree.in/wp-content/uploads/2024/09/SAL04106-1500x1000.jpg',
    description: 'Creating unforgettable wedding experiences with elegance and style.',
  },
  {
    title: 'Birthday',
    image: 'https://www.surpriseville.com/image/cache/catalog/Kids-birthday/themedecoration/1st%20Birthday%20Minni%20Mouse%20Theme%20Decoration-1260x1260.jpg',
    description: 'Surprise themes and joyful celebrations for all age groups.',
  },
  {
    title: 'Mehandi',
    image: 'https://cheetah.cherishx.com/uploads/1680173111_large.jpg',
    description: 'Traditional and modern henna designs for every bride-to-be.',
  },
  {
    title: 'Haldi',
    image: 'https://i.cdn.newsbytesapp.com/images/l88620231121163754.jpeg',
    description: 'Yellow vibes, floral themes, and joyful pre-wedding traditions.',
  },
  {
    title: 'Corporate Function',
    image: "https://www.shutterstock.com/image-photo/decorations-events-style-design-texture-600nw-2482066889.jpg",
    description: 'Professional event management for corporate launches and meetings.',
  },
   {
    title: 'Baby shower',
    image: 'https://haplun.in/uploads/2024/04/simple-baby-shower-decoration-483439165_large.webp',
    description: 'Adorable themes and joyful moments to celebrate motherhood.',
  },
];

const Section1 = () => {
  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title">Thoughtful Services, Priceless Moments</h2>
        <p className="section-subtitle">Lovingly crafted just for you</p>

        <Row className="g-4">
          {services.map((service, idx) => (
            <Col key={idx} lg={4} md={6} sm={12}>
              <Card className="service-card h-100">
                <Card.Img variant="top" src={service.image} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
