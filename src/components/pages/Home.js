
import Carousel from 'react-bootstrap/Carousel';
import profile from './images/profile.jpg';
import React, { useEffect, useState } from "react";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id='homepage'>

    <Carousel 
    activeIndex={index}
     onSelect={handleSelect}
       interval={1000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={profile}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hello </h3>
          <p>My Name Is Mujinga Williams</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={profile}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>To My Portfolio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={profile}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Thank You</h3>
          <p>
            For Visiting My Site
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ControlledCarousel;


