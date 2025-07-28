import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css"
const eventCategories = [
  {
    title: "Wedding Ceremony",
    description: "Plan your dream wedding with our full-service event planning, decoration, and catering.",
    image: "https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=612x612&w=0&k=20&c=fTlNejRdY7dkvk742auNgI3j6Ve9UqqWSnb3QJ-D2gw=",
  },
  {
    title: "Anniversary Events",
    description: "Make your special day extra special with tailored anniversary celebrations.",
    image: "https://www.truppandfest.com/assets/images/services-page/anniversary-event/trupp-and-fest-events-7.jpg",
  },
  
  {
    title: "Birthday Bash",
    description: "From kids to adults, we organize unforgettable birthday parties.",
    image: "https://thumbs.dreamstime.com/b/cute-little-children-birthday-party-outdoors-151118647.jpg",
  },
  {
    title: "Corporate Events",
    description: "Professional event management for business meets, launches, and more.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  },
  {
    title: "Baby Shower",
    description: "Celebrate the joy of a new arrival with themed décor and joyful arrangements.",
    image: "https://anilevents.in/wp-content/uploads/2020/03/Classy-Baby-Shower-Decoration.jpg",
  },
  {
    title: "Engagement Party",
    description: "Celebrate your engagement with elegance and ease.",
    image: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/01/Wedding-Ink.jpg",
  },
  
];

const Home = () => {
  return (
    <Container className="mt-4">
      <div className="text-center mb-5">
        <h1 className="text-primary">Event Management Hub</h1>
        <p className="text-muted">We make your moments memorable!</p>
      </div>

      <Row>
        {eventCategories.map((event, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={event.image}
                alt={event.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
