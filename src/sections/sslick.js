import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sslick() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section data-scroll-section className="slick-slider">
      <Slider {...settings}>
        <div>
          <img src="/images/03.jpg" alt="one" />
        </div>
        <div>
          <img src="/images/04.jpg" alt="one" />
        </div>
        <div>
          <img src="/images/05.jpg" alt="one" />
        </div>
      </Slider>
    </section>
  );
}
