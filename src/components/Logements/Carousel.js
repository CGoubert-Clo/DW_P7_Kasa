import React, { useState } from "react";
import "../../styles/Logements.css";

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pictures = props.logement.pictures.map((image, index) => (
    <img src={image} alt="logement" key={index} className={index === currentIndex ? "active" : ""}/>
  ));

  const handlePrev = () => {
    setCurrentIndex((currentIndex + pictures.length - 1) % pictures.length); 
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  return (
    <div className="Carousel">
      <div className="Carousel__container">
        { pictures.length > 1 &&
        <div className="Carousel__container__arrow Carousel__container__arrow--left" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </div>}
        {pictures.length > 1 &&
        <div className="Carousel__container__arrow Carousel__container__arrow--right" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </div> }
        <div className="Carousel__container__image">
          {pictures[currentIndex]}
        </div>
      </div>
    </div>
  );
}

export default Carousel;



