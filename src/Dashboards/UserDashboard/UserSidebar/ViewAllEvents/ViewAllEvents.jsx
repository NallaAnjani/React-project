

import React, { useEffect, useState } from 'react';
import { collection, getDocs ,addDoc} from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details';
import "./ViewAllEvents.css"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const ViewAllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
const [selectedEvent, setSelectedEvent] = useState(null);
const [bookingDetails, setBookingDetails] = useState({
  date: '',
  guests: '',
  message: ''
});


  useEffect(() => {
    const fetchEventsFromAllAdmins = async () => {
      try {
        const adminCollectionRef = collection(db, 'admins');
        const snapshot = await getDocs(adminCollectionRef);

        let combinedEvents = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          if (data.events && Array.isArray(data.events)) {
            combinedEvents = [...combinedEvents, ...data.events];
          }
        });

        setAllEvents(combinedEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEventsFromAllAdmins();
  }, []);

  if (loading) return <p>Loading events...</p>;
  const handleBookNow = (event) => {
  setSelectedEvent(event);
  setShowBookingForm(true);
};

const handleBookingSubmit = async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("loggedinUser"));

  try {
    await addDoc(collection(db, "bookings"), {
      userName: user.user.displayName,
      userEmail: user.user.email,
      eventTitle: selectedEvent.title,
      eventCategory: selectedEvent.category,
      date: bookingDetails.date,
      guests: bookingDetails.guests,
      message: bookingDetails.message,
      status: "pending", // default status
      createdAt: new Date()
    });

    alert("Booking submitted successfully!");
    setShowBookingForm(false);
    setBookingDetails({ date: "", guests: "", message: "" });
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Failed to book. Try again later.");
  }
};


  return (
    <div className="view-events-container">
      <h2>All Events</h2>
      <div className="events-grid">
        {allEvents.length > 0 ? (
          allEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Price:</strong> ₹{event.price}</p>
              <button onClick={() => handleBookNow(event)}>Book Now</button>

            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}

      </div>
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

      <Button variant="primary" type="submit">
        Confirm Booking
      </Button>
    </Form>
  </Modal.Body>
</Modal>

    </div>
  );
};

export default ViewAllEvents;
