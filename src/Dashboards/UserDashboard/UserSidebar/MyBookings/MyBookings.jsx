// import React, { useEffect, useState } from 'react'
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../../../../config_details/Config_details'; 
// const MyBookings = () => {
//     const[bookingData,setbookingData] = useState([])
//     const[loading,setLoading] = useState(true)
    
//    useEffect(()=>{
//     const fetchUserBooking =async()=>{
//         const user = JSON.parse(localStorage.getItem("loggedinUser"))
//         const userRef =doc(db,"users",user.user.displayName)
//        try {
//         const userDoc = await getDoc(userRef);
//         console.log(userDoc)
//         if (userDoc.exists()) {
//           const userData = userDoc.data();
//           setbookingData(userData.bookings || []);
//         } else {
//           console.log("No such user document found.");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       } finally {
//         setLoading(false);
//       }

//     }
//     fetchUserBooking()
    
//    },[])
//     if (loading){
//         return <p>loading....</p>
//     }
//   return (
    
//     <div>
//       <h2>My Bookings</h2>
//       {bookingData.length === 0?(<p>No Bookings Found</p>):(
//         <ul>
//           {bookingData.map((booking, index) => (
//             <li key={index}>
//               <strong>{booking.eventTitle}</strong> - {booking.date} - {booking.status}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default MyBookings


import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';

const MyBookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserBooking = async () => {
      const user = JSON.parse(localStorage.getItem("loggedinUser"));
      const userRef = doc(db, "users", user.user.displayName);

      try {
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setBookingData(userData.bookings || []);
        } else {
          console.log("No such user document found.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBooking();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading your bookings...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Bookings</h2>

      {bookingData.length === 0 ? (
        <p className="text-center text-muted">No Bookings Found</p>
      ) : (
        <Row>
          {bookingData.map((booking, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>{booking.eventTitle}</Card.Title>
                  <Card.Text><strong>Date:</strong> {booking.date}</Card.Text>
                  <Card.Text><strong>Status:</strong> {booking.status}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyBookings;
