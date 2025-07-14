import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css';

const Carousels = () => {
  return (
    <div className="custom-carousel">
      <Carousel fade interval={3000} controls={true} indicators={true}>
        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-2.webp"
              alt="First Slide"
            />
            <div className="overlay-content">
              <h1>Plan the Perfect Event</h1>
              <p>Weddings, parties, and corporate events — all in one place</p>
              <button>Explore Now</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/BlogThumbnail_7fa803eb-1ad0-4380-a12c-a3bd1f13ceac.jpg?v=1636654428"
              alt="Second Slide"
            />
            <div className="overlay-content">
              <h1>Celebrate in Style</h1>
              <p>Unique themes, stunning décor, and unforgettable memories</p>
              <button>Get Started</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-img-wrapper">
            <img
              src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-3.webp"
              alt="Third Slide"
            />
            <div className="overlay-content">
              <h1>Make It Memorable</h1>
              <p>From concept to celebration — we handle everything</p>
              <button>Book Now</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
