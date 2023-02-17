import React, { useState } from "react"
import "./Carousel.css"

function Carousel(props) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const pictures = props.picture.map((image, index) => (
    <img src={image} alt="logement" key={index} className={index === currentIndex ? "active" : ""}/>
  ))




  const handlePrev = () => {
    setCurrentIndex( prevCurrentIndex => {
      return (prevCurrentIndex + pictures.length - 1) % pictures.length
    })
  }

  const handleNext = () => {
    setCurrentIndex( prevCurrentIndex => {
      return (prevCurrentIndex + 1) % pictures.length
    })
  }

  

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



