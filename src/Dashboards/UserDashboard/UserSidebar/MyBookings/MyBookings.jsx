import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details'; 
const MyBookings = () => {
    const[bookingData,setbookingData] = useState([])
    const[loading,setLoading] = useState(true)
    
   useEffect(()=>{
    const fetchUserBooking =async()=>{
        const user = JSON.parse(localStorage.getItem("loggedinUser"))
        const userRef =doc(db,"users",user.user.displayName)
       try {
        const userDoc = await getDoc(userRef);
        console.log(userDoc)
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setbookingData(userData.bookings || []);
        } else {
          console.log("No such user document found.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }

    }
    fetchUserBooking()
    
   },[])
    if (loading){
        return <p>loading....</p>
    }
  return (
    
    <div>
      <h2>My Bookings</h2>
      {bookingData.length === 0?(<p>No Bookings Found</p>):(
        <ul>
          {bookingData.map((booking, index) => (
            <li key={index}>
              <strong>{booking.eventTitle}</strong> - {booking.date} - {booking.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyBookings
