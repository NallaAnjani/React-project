import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Carousels.css"

const Carousels = () => {
  return (
    <div>
       <Carousel  interval={3000} slide={false}>
      <Carousel.Item>
        <img src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-2.webp"></img>
      </Carousel.Item>
       <Carousel.Item>
        <img src="https://cdn.shopify.com/s/files/1/0558/6413/1764/files/BlogThumbnail_7fa803eb-1ad0-4380-a12c-a3bd1f13ceac.jpg?v=1636654428"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-3.webp"></img>
    </Carousel.Item>
      <Carousel.Item>
        <img src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-5.webp"></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://events.alankaran.com/wp-content/uploads/2024/10/wedding-slider-img-6.webp"></img>
      </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default Carousels

