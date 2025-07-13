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
import React, { useState,useEffect, useRef } from 'react'
import { db } from '../../../../config_details/Config_details';

const ViewAllBookings = () => {
  const [approvedBookings,setApprovedBookings] = useState([]);
  const [loading,setLoading] = useState(true)
 
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

  if(loading){

    return <p>loading...</p>
    
  }
  return (
    
   <div className="approved-bookings-container">
      <h2>Approved Bookings</h2>
      {approvedBookings.length === 0 ? (
        <p>No approved bookings found.</p>
      ) : (
        <div className="booking-cards">
          {approvedBookings.map((b, i) => (
            <div key={i} className="booking-card">
              <img
        src={b.image}
        alt={b.eventTitle}
        className="booking-image"
      />
              <h3>{b.eventTitle}</h3>
              <p><strong>User:</strong> {b.userName}</p>
              <p><strong>Date:</strong> {b.date}</p>
              <p><strong>Guests:</strong> {b.guests}</p>
              <p><strong>Phone:</strong> {b.phone}</p>
              <p><strong>Status:</strong> ✅ Approved</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ViewAllBookings
