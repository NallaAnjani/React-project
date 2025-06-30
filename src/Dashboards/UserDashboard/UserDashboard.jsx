import React from "react";
import { Outlet } from "react-router-dom";

import "./UserDashboard.css";

const UserDashboard = () => {
  const loggedinuser = JSON.parse(localStorage.getItem("loggedinUser"));
  console.log(loggedinuser.user.displayName);
const categories = [
  { name: "Marriage", image: "https://www.indiafilings.com/learn/wp-content/uploads/2018/04/Marriage-Certificate.jpg"},
  { name: "Birthday", image: "https://www.parents.com/thmb/--pZafKsgGSb8NrJVrV7lqJId9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BirthdayParty-GettyImages-1600792233-c2a961509556414f9f41b92b8471a551.jpg" },
  { name: "Haldi", image: "https://t3.ftcdn.net/jpg/06/59/79/90/360_F_659799068_iEcxLb1F1XoNeOb4kF8Ty07uWFHPGy6F.jpg" },
  { name: "Baby Shower", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0Rtm51y7TDnxa90A3J_1O91KkCZ8-d2VSA&s" },
  { name: "Corporate", image: "https://5.imimg.com/data5/SELLER/Default/2022/12/VJ/BT/JX/70176435/corporate-events.jpg" }
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

    </div>
  );
};

export default UserDashboard;
