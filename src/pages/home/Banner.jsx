import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <h3>Slide 1</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 2</h3>
        </div>
        <div className="carousel-slide">
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
