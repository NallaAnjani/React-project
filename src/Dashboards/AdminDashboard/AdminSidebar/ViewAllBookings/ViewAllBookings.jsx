import React from 'react'
import { useEffect,useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details'

const ViewAllBookings = () => {
 const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(()=>{

  const fetchAllBookings = async () => {
  const userRef = collection(db, 'users');
  const snapshot = await getDocs(userRef);

  let allBookings = [];

  snapshot.forEach((doc) => {
    const data = doc.data();
    const userBookings = data.bookings || [];

    userBookings.forEach((booking) => {
      allBookings.push({
        ...booking,
        userEmail: data.email || doc.id,
        userName: data.displayName || doc.id,
      });
    });
  });

  setBookings(allBookings);
  setLoading(false);
};

fetchAllBookings()
},[])
if (loading) return <p>Loading bookings...</p>;
  return (
    <div>
     {!bookings || bookings.length === 0 ? (
  <p>No bookings found</p>
) : (
  <table>
    <thead>
      <tr>
        <th>User</th>
        <th>Event</th>
        <th>Date</th>
        <th>Guests</th>
        <th>Phone</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bookings.map((b, i) => (
        <tr key={i}>
          <td>{b.userName}</td>
          <td>{b.eventTitle}</td>
          <td>{b.date}</td>
          <td>{b.guests}</td>
          <td>{b.phone}</td>
          <td>{b.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

    </div>
  )
}

export default ViewAllBookings
