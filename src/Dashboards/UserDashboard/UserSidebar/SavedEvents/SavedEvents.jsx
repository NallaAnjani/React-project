import React from 'react'
// import { useState } from 'react'

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState,useEffect } from 'react';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../../../../config_details/Config_details';


const SavedEvents = () => {
  const user = JSON.parse(localStorage.getItem("loggedinUser"))
const[savedEvents,setSavedEvents] = useState([])
const [loading, setLoading] = useState(true);
useEffect(()=>{
  const fetchSavedEvents=async()=>{
try{
  const userRef = doc(db,"users",user.user.displayName)
  console.log(userRef)
        const userDoc = await getDoc(userRef);
        console.log(userDoc)
        if (userDoc.exists()) {
        const userData = userDoc.data();
        setSavedEvents(userData.savedEvents || []);
        setLoading(false);
      }

  }
  catch(err){
   console.log(err)
  }
  }
  fetchSavedEvents();
  
},[])
if (loading) {
 return(
 <div style={{ padding: "0.5rem" }}>
      <Skeleton height={100} count={3} style={{ marginBottom: "1rem" }} />
    </div>
 )
   
 
}

  return (
    <div>
   
  <div className="saved-events-container">
    <h2>Saved Events</h2>
    { savedEvents.length === 0 ? (
      <p>No saved events found.</p>
    ) : (
      <div className="events-grid">
        {savedEvents.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Price:</strong> ₹{event.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>

    </div>
  )
}

export default SavedEvents
