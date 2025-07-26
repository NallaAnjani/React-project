import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../../config_details/Config_details";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ViewAllEvents = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    date: "",
    guests: "",
    message: "",
    phone: "",
  });

  useEffect(() => {
    const fetchEventsFromAllAdmins = async () => {
      try {
        const adminCollectionRef = collection(db, "admins");
        const snapshot = await getDocs(adminCollectionRef);
        let combinedEvents = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          if (Array.isArray(data.events)) {
            combinedEvents = [...combinedEvents, ...data.events];
          }
        });

        setAllEvents(combinedEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEventsFromAllAdmins();
  }, []);

  const handleBookNow = (event) => {
    setSelectedEvent(event);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", loggedinUser.user.displayName);
      const userDocSnap = await getDoc(userRef);

      let existingBookings = [];
      if (userDocSnap.exists()) {
        existingBookings = userDocSnap.data().bookings || [];
      }

      const newBooking = {
        eventTitle: selectedEvent.title,
        eventCategory: selectedEvent.category,
        date: bookingDetails.date,
        guests: bookingDetails.guests,
        message: bookingDetails.message,
        phone: bookingDetails.phone,
        status: "pending",
        image: selectedEvent.image,
        createdAt: new Date(),
      };

      await updateDoc(userRef, {
        bookings: [...existingBookings, newBooking],
      });

      alert("Booking submitted successfully!");
      setShowBookingForm(false);
      setBookingDetails({ date: "", guests: "", message: "", phone: "" });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to book. Try again later.");
    }
  };

  const handleSavedEvent = async (savedEvent) => {
    try {
      const userRef = doc(db, "users", loggedinUser.user.displayName);
      await updateDoc(userRef, {
        savedEvents: arrayUnion(savedEvent),
      });
      alert("Successfully saved event!");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-4">Loading events...</p>;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">All Events</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {allEvents.length > 0 ? (
          allEvents.map((event, index) => (
            <Col key={index}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={event.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {event.category}<br />
                    <strong>Price:</strong> ₹{event.price}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => handleBookNow(event)}>Book Now</Button>
                    <Button variant="outline-secondary" onClick={() => handleSavedEvent(event)}>Save</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </Row>

      {/* Booking Modal */}
      <Modal show={showBookingForm} onHide={() => setShowBookingForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Book Event: {selectedEvent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBookingSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={bookingDetails.date}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, date: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                type="number"
                value={bookingDetails.guests}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, guests: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Special Requests</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bookingDetails.message}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, message: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                value={bookingDetails.phone}
                onChange={(e) =>
                  setBookingDetails({ ...bookingDetails, phone: e.target.value })
                }
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Confirm Booking
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ViewAllEvents;
