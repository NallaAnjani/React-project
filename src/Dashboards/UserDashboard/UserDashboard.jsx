import React from "react";

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./UserDashboard.css";
import Contact from "../../Components/Contact/Contact";

const UserDashboard = () => {
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinUser"));
  console.log(loggedinuser.user.displayName);
  const categories = [
    {
      name: "Marriage",
      image:
        "https://www.indiafilings.com/learn/wp-content/uploads/2018/04/Marriage-Certificate.jpg",
    },
    {
      name: "Birthday",
      image:
        "https://www.parents.com/thmb/--pZafKsgGSb8NrJVrV7lqJId9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BirthdayParty-GettyImages-1600792233-c2a961509556414f9f41b92b8471a551.jpg",
    },
    {
      name: "Haldi",
      image:
        "https://t3.ftcdn.net/jpg/06/59/79/90/360_F_659799068_iEcxLb1F1XoNeOb4kF8Ty07uWFHPGy6F.jpg",
    },
    {
      name: "Baby Shower",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0Rtm51y7TDnxa90A3J_1O91KkCZ8-d2VSA&s",
    },
    {
      name: "Corporate",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/VJ/BT/JX/70176435/corporate-events.jpg",
    },
  ];

  return (
    <div>
      <div className="welcome-heading">
        Welcome {loggedinuser.user.displayName}...!
      </div>
      <div className="search-image-container">
        <div className="search-content">
          <h2 className="search-heading">Find Your Perfect Event</h2>
          <input
            type="text"
            placeholder="Search for Marriage Events"
            className="search-bar"
          />
        </div>
        <div className="image-content">
          <img
            src="https://www.whiteevents.ie/wp-content/uploads/2018/02/White-events-party-planner-designs.jpg"
            alt="Event"
            className="event-image"
          />
        </div>
      </div>
      <div className="default-section">
        <h2 className="section-title">Explore Our Categories</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div className="category-card animate-on-scroll" key={index}>
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* LEFT SIDE - Image */}
          <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
            <Image
              src="https://www.wedica.in/wp-content/uploads/2024/12/wedding-banner.jpg"
              alt="Marriage Decoration"
              fluid
              rounded
            />
          </Col>

          {/* RIGHT SIDE - Content */}
          <Col xs={12} md={6}>
            <h2 style={{ color: "#003366", fontWeight: "bold" }}>
              Grand Wedding Decor
            </h2>
            <p style={{ color: "#003366" }}>
              We bring your dream wedding to life with elegant and customized
              decoration themes. Our expert team handles floral arrangements,
              lighting, stage design, and more!
            </p>
            <ul style={{ color: "#003366" }}>
              <li>Stage & Mandap Setup</li>
              <li>Floral Arrangements</li>
              <li>Lighting & Ambience</li>
              <li>Entrance Arches & Seating</li>
            </ul>
            <Button
              style={{
                backgroundColor: "#003366",
                borderColor: "#003366",
              }}
            >
              Explore More
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h2 style={{ color: "#003366", fontWeight: "bold" }}>
              Elegant Engagement Decor
            </h2>
            <p style={{ color: "#003366" }}>
              Make your engagement unforgettable with our stunning decor themes.
              From romantic floral arrangements to beautiful lighting setups, we
              ensure a graceful and charming ambiance.
            </p>
            <ul style={{ color: "#003366" }}>
              <li>Floral Stage Design</li>
              <li>Lighting & Photo Booths</li>
              <li>Welcome Board & Entry Setup</li>
              <li>Guest Seating Decorations</li>
            </ul>
            <Button
              style={{
                backgroundColor: "#003366",
                borderColor: "#003366",
              }}
            >
              View Gallery
            </Button>
          </Col>
          <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
            <Image
              src="https://5.imimg.com/data5/ANDROID/Default/2024/4/407454198/NP/EP/WX/66930704/product-jpeg-500x500.jpg"
              alt="Engagement Decoration"
              fluid
              rounded
              style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} // Optional for better size
            />
          </Col>
        </Row>
      </Container>
    <Contact/>
    </div>
  );
};

export default UserDashboard;
