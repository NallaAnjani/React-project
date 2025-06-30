import { useState,useEffect } from "react";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../../../../config_details/Config_details";
const MyBookings=()=>{
    const[events,setEvents] = useState([])
    const[loading,setLoading] = useState(true)
    useEffect=async()=>{
           const data=await collection(db,"admins")
           console.log(data)
    }
    return(
        <div>My Bookings</div>
    );
}
export default MyBookings;