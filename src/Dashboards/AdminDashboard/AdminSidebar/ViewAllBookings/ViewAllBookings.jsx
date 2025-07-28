// import React from 'react'
// import { useEffect,useState } from 'react'
// import { collection, getDoc,doc,getDocs,updateDoc } from 'firebase/firestore';
// import { db } from '../../../../config_details/Config_details'

// const ViewAllBookings = () => {
//  const [bookings, setBookings] = useState([]);
// const [loading, setLoading] = useState(true);
// useEffect(()=>{

//   const fetchAllBookings = async () => {
//   const userRef = collection(db, 'users');
//   const snapshot = await getDocs(userRef);

//   let allBookings = [];

//   snapshot.forEach((doc) => {
//     const data = doc.data();
//     const userBookings = data.bookings || [];

//     userBookings.forEach((booking) => {
//       allBookings.push({
//         ...booking,
//         userEmail: data.email || doc.id,
//         userName: data.displayName || doc.id,
//       });
//     });
//   });

//   setBookings(allBookings);
//   setLoading(false);
// };

// fetchAllBookings()
// },[])
// if (loading) return <p>Loading bookings...</p>;
// const handleBookingStatus = async (booking, newStatus) => {
//   try {
//     const userRef = doc(db, "users", booking.userName); // use UID if stored by UID
//     const userSnap = await getDoc(userRef);

//     if (userSnap.exists()) {
//       const userData = userSnap.data();
//       const updatedBookings = userData.bookings.map((b) => {
//         if (
//           b.eventTitle === booking.eventTitle &&
//           b.date === booking.date
//         ) {
//           return { ...b, status: newStatus };
//         }
//         return b;
//       });

//       await updateDoc(userRef, {
//         bookings: updatedBookings,
//       });

//       // Update the local state (optional for instant UI update)
//       setBookings((prev) =>
//         prev.map((b) =>
//           b.userName === booking.userName &&
//           b.eventTitle === booking.eventTitle &&
//           b.date === booking.date
//             ? { ...b, status: newStatus }
//             : b
//         )
//       );

//       alert(`Booking ${newStatus}`);
//     }
//   } catch (err) {
//     console.error("Error updating status:", err);
//     alert("Failed to update booking status");
//   }
// };

//   return (
//     <div>
//      {!bookings || bookings.length === 0 ? (
//   <p>No bookings found</p>
// ) : (
//   <table>
//     <thead>
//       <tr>
//         <th>User</th>
//         <th>Event</th>
//         <th>Date</th>
//         <th>Guests</th>
//         <th>Phone</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {bookings.map((b, i) => (
//         <tr key={i}>
//           <td>{b.userName}</td>
//           <td>{b.eventTitle}</td>
//           <td>{b.date}</td>
//           <td>{b.guests}</td>
//           <td>{b.phone}</td>
//           {/* <td>{b.status}</td> */}
//           <td>{b.status === "pending" ? (
//   <>
//     <button onClick={() => handleBookingStatus(b, "approved")}>Approve</button>
//     <button onClick={() => handleBookingStatus(b, "rejected")}>Reject</button>
//   </>
// ) : (
//   <span>{b.status}</span>
// )}
// </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// )}

//     </div>
//   )
// }

// export default ViewAllBookings








import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../../../config_details/Config_details';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

const ViewAllBookings = () => {
  const [approvedBookings, setApprovedBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApprovedBookings = async () => {
      const userRef = collection(db, 'users');
      const snapshot = await getDocs(userRef);

      let approved = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        const userBookings = data.bookings || [];

        userBookings.forEach((booking) => {
          if (booking.status === 'approved') {
            approved.push({
              ...booking,
              userName: data.displayName || doc.id,
              userEmail: data.email || '',
            });
          }
        });
      });

      setApprovedBookings(approved);
      setLoading(false);
    };

    fetchApprovedBookings();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" variant="primary" />
        <p>Loading approved bookings...</p>
      </div>
    );
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Approved Bookings</h2>
      {approvedBookings.length === 0 ? (
        <p className="text-center">No approved bookings found.</p>
      ) : (
        <Row>
          {approvedBookings.map((b, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={b.image} alt={b.eventTitle} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{b.eventTitle}</Card.Title>
                  <Card.Text><strong>User:</strong> {b.userName}</Card.Text>
                  <Card.Text><strong>Date:</strong> {b.date}</Card.Text>
                  <Card.Text><strong>Guests:</strong> {b.guests}</Card.Text>
                  <Card.Text><strong>Phone:</strong> {b.phone}</Card.Text>
                  <Card.Text className="text-success"><strong>Status:</strong> ✅ Approved</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ViewAllBookings;
