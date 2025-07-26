import React from "react";
import "./Section5.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Section5 = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-column">
          <img src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-9020-622f-bce1-c996e56d88b6/raw?se=2025-07-15T14%3A27%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=bd80d3f7-631b-552d-bfe9-34591b15dd05&skoid=789f404f-91a9-4b2f-932c-c44965c11d82&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-15T10%3A14%3A36Z&ske=2025-07-16T10%3A14%3A36Z&sks=b&skv=2024-08-04&sig=eFa2eEDmkiX%2BelpqaD3q%2Bs2g/u1Bi/GKoMDnnSU8rhI%3D" alt="Anjani Events Logo" className="footer-logo" />
          <p>Our team excels in delivering top-notch events with precision and excellence.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3>Useful links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
           
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Wedding</a></li>
            <li><a href="#">Birthday Events</a></li>
            <li><a href="#">Corporate Events</a></li>
            <li><a href="#">Haldi Events</a></li>
            <li><a href="#">Baby shower Events</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> Vamshi Ram Jyothi Square, 2nd floor<br />
             KPHB road no 3, Hyderabad, Telangana 500072</p>
          <p><FaEnvelope /> anjanievents@gmail.com</p>
          <p><FaPhone /> +91-9391147650</p>
        </div>
      </div>
    </footer>
  );
};

export default Section5;
