import React from 'react'
// import { useState } from 'react'

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SavedEvents = () => {
  const user = JSON.parse(localStorage.getItem("loggedinUser"));
  const [savedEvents, setSavedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        const userRef = doc(db, "users", user.user.displayName);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setSavedEvents(userData.savedEvents || []);
        }
      } catch (err) {
        console.log("Error fetching saved events:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedEvents();
  }, []);

  if (loading) {
    return (
      <Container className="py-4">
        <Skeleton height={150} count={3} style={{ marginBottom: "1rem" }} />
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Saved Events</h2>
      {savedEvents.length === 0 ? (
        <p className="text-center">No saved events found.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {savedEvents.map((event, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={event.image} alt={event.title} style={{ height: "200px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Text><strong>Category:</strong> {event.category}</Card.Text>
                  <Card.Text><strong>Price:</strong> ₹{event.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default SavedEvents;
