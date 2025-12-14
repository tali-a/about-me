import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {images.map((imgSrc, index) => (
        <div key={index}>
          <img src={imgSrc} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
        </div>
      ))}
    </Slider>
  );
}
