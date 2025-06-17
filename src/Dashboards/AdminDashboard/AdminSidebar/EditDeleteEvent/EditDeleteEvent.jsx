import React, { useEffect, useState } from 'react'
import { doc,getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../config_details/Config_details'
import { FaRupeeSign } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./EditDeleteEvent.css"
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";




export const EditDeleteEvent = () => {
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinAdmin"))
  const loggedinuserName = loggedinuser.user.displayName
  const [events,setEvents]=useState([])
  const [loading,setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const[editEventIndex,setEditEventIndex] = useState(null)
  const[formData,setFormData] = useState({
    title: '',
  description: '',
  category: '',
  price: '',
  image: ''
  });


 useEffect(()=>{
    const fetchingdata=async()=>{
       const docRef =  doc(db,"admins",loggedinuserName)
       const getdocRef =await getDoc(docRef)
       console.log(getdocRef)
       if (getdocRef.exists()){
      const data = getdocRef.data()
      console.log(data)
      setEvents(data.events||[])
      setLoading(false)
    }
    }
    
      fetchingdata()
 },[])
  if(loading){
    return <p>loading.......</p>
  }

const handleDeleteevent = async (eventindex) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this event?");
  if (!confirmDelete) return;

  const eventsAfterDeleteFilteration = events.filter((event, index) => index !== eventindex);
  setEvents(eventsAfterDeleteFilteration);

  const docRef = doc(db, "admins", loggedinuserName);
  await updateDoc(docRef, {
    events: eventsAfterDeleteFilteration
  });

  alert("Deleted successfully");
};
// edit


const handleEditEvent = (index) => {
  setFormData(events[index]);
  setEditEventIndex(index);
  setIsEditing(true);
  setShowModal(true);
};
const handleSubmit = async () => {
  if (isEditing) {
    // Edit existing event
    const updatedEvents = [...events];
    updatedEvents[editEventIndex] = formData;
    setEvents(updatedEvents);

    const docRef = doc(db, "admins", loggedinuserName);
    await updateDoc(docRef, { events: updatedEvents });

    alert("Event updated successfully!");
  } else {
    // Add new event
    const newEvents = [...events, formData];
    setEvents(newEvents);

    const docRef = doc(db, "admins", loggedinuserName);
    await updateDoc(docRef, { events: newEvents });

    alert("Event added successfully!");
  }

  setShowModal(false);
  setEditEventIndex(null);
};


  return (
    <div className="edit-delete-container">
  {events.length > 0 ? (
    events.map((event, index) => (
      <div className="event-card" key={index}>
        <img src={event.image} alt={event.title} />
        <div className="event-card-content">
          <h3>{event.title}</h3>
          <p className="price"><FaRupeeSign /> {event.price}</p>
          <p>{event.description}</p>
        </div>
        <div className="event-card-buttons">
          <button className="edit" onClick={()=>handleEditEvent(index)}>Edit</button>
          <button className="delete" onClick={()=>handleDeleteevent(index)}>Delete</button>
        </div>
      </div>
    ))
  ) : (
    <p>No events found.</p>
  )}
  <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>{isEditing ? "Edit Event" : "Add Event"}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="Marriage">Marriage</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate">Corporate</option>
          <option value="Baby Shower">Baby Shower</option>
          <option value="Haldi">Haldi</option>
          <option value="Mehandi">Mehandi</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setShowModal(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleSubmit}>
      update
    </Button>
  </Modal.Footer>
</Modal>


</div>

  )
}


