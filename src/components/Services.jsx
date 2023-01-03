import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assets/pickupbiz.jpg";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/sweb3img.png";

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        // showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={img3} alt="item" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img1} alt="item" />
          <p className="legend">Peer-to-Peer Support</p>
        </div>
        <div>
          <img src={img2} alt="item" />
          <p className="legend">Any Graduate</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
