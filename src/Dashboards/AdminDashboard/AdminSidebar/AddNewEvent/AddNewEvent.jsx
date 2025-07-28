// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { doc,updateDoc,arrayUnion } from "firebase/firestore";
// import { db } from "../../../../config_details/Config_details";
// const AddNewEvent = () => {
//   const loggedinuser = JSON.parse(localStorage.getItem("loggedinAdmin"))
//   const [openmodel, setOpenModel] = useState(false);
//   const [eventDetails,setEventDetails] =useState({
//     title: '',
//     description: '',
//     category: '',
//     price: '',
//     image: '',
//   })
//   const handleAddEvent = () => {
//     setOpenModel(true);
//   };
//   const handleClose = () => {
//     setOpenModel(false);
//   };
//   const handleevent=async()=>{
//     alert("event added")
//           const AdminDocRef = await doc(db,"admins",loggedinuser.user.displayName)
//           await updateDoc(AdminDocRef,{
//             events:arrayUnion(eventDetails)
//           })
//     handleClose()
//   }
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Button variant="outline-primary" onClick={handleAddEvent}>
//         AddEvent
//       </Button>
//       <Modal show={openmodel} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Event</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form >
//             <Form.Group className="mb-3">
//               <Form.Label>Event Title</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="title"
//                 placeholder="Enter event title" 
//                 onChange={(e)=>setEventDetails({...eventDetails,title:e.target.value})}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="description"
//                 placeholder="Enter event description"
//                 onChange={(e)=>setEventDetails({...eventDetails, description:e.target.value})}
//                 required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Category</Form.Label>
//               <Form.Select
//                 name="category"
//                  onChange={(e)=>setEventDetails({...eventDetails,category:e.target.value})}
//                  required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Marriage">Marriage</option>
//                 <option value="Birthday">Birthday</option>
//                 <option value="Corporate">Corporate</option>
//                 <option value="Baby Shower">Baby Shower</option>
//                 <option value="Haldi">Haldi</option>
//                 <option value="Mehandi">Mehandi</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Price</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="price"
//                 placeholder="Enter event price"
//                  onChange={(e)=>setEventDetails({...eventDetails,price:e.target.value})}
//                  required
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Image URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="image"
//                 placeholder="Enter image URL"
//                  onChange={(e)=>setEventDetails({...eventDetails,image:e.target.value})}
//                  required
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleevent}>Add</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default AddNewEvent;


import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col
} from "react-bootstrap";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../../../config_details/Config_details";

const AddNewEvent = () => {
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinAdmin"));
  const [openmodel, setOpenModel] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
  });

  const handleAddEvent = () => setOpenModel(true);
  const handleClose = () => setOpenModel(false);

  const handleevent = async () => {
    alert("Event added");
    const AdminDocRef = doc(db, "admins", loggedinuser.user.displayName);
    await updateDoc(AdminDocRef, {
      events: arrayUnion(eventDetails),
    });
    handleClose();
  };

  return (
    <div className="text-center">
      <Button variant="outline-primary" onClick={handleAddEvent}>
        Add Event
      </Button>

      <Modal show={openmodel} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Event Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter event title"
                    onChange={(e) =>
                      setEventDetails({ ...eventDetails, title: e.target.value })
                    }
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    onChange={(e) =>
                      setEventDetails({ ...eventDetails, category: e.target.value })
                    }
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
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="Enter event price"
                    onChange={(e) =>
                      setEventDetails({ ...eventDetails, price: e.target.value })
                    }
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="Enter image URL"
                    onChange={(e) =>
                      setEventDetails({ ...eventDetails, image: e.target.value })
                    }
                    required
                  />
                </Col>
              </Row>

              <Row>
                <Col className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    placeholder="Enter event description"
                    onChange={(e) =>
                      setEventDetails({
                        ...eventDetails,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleevent}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNewEvent;
