import "./About.css"
import "../DropDown/Dropdown.css"
import { useState } from "react"

import DropDown from "../DropDown/Dropdown"

function About() {

  const [isFiabiliteOpen, setIsFiabiliteOpen] = useState(false)
  const [isRespectOpen, setIsRespectOpen] = useState(false)
  const [isServiceOpen, setIsServiceOpen] = useState(false)
  const [isSecuriteOpen, setIsSecuriteOpen] = useState(false)

  const handleClick = (e) => {
      if (e.target.id === "fiabilite") {
          setIsFiabiliteOpen(!isFiabiliteOpen)
      } else if (e.target.id === "respect") {
          setIsRespectOpen(!isRespectOpen)
      } else if (e.target.id === "service") {
          setIsServiceOpen(!isServiceOpen)
      } else if (e.target.id === "Securite") {
          setIsSecuriteOpen(!isSecuriteOpen)
      }
  }




  return (
    <div className="About">
      <div className="About__banner">
            </div>
      <DropDown>
        <div className="Dropdown__about">  
          <div className="Dropdown__container">
            <div className="Dropdown__container__title about__title__container">
            <h1 className="about__title">Fiabilité</h1>
            <img src={isFiabiliteOpen? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="fiabilite"  className="about__arrow"/>
            </div>
            {isFiabiliteOpen &&
            <div className="Dropdown__container__content about__content__container">
              <p className="about__content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
            }
          </div>
          <div className="Dropdown__container">

                  <div className="Dropdown__container__title about__title__container" >
                      <h1 className="about__title">Respect</h1>
                      <img src={isRespectOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="respect" className="about__arrow"/>
                  </div>

                  { isRespectOpen &&
                      <div className="Dropdown__container__content about__content__container">
                      <p className="about__content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                      </div>
                  }
              </div>
              <div className="Dropdown__container">

                  <div className="Dropdown__container__title about__title__container">
                      <h1 className="about__title">Service</h1>
                      <img src={isServiceOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="service" className="about__arrow"/>
                  </div>

                  { isServiceOpen &&
                      <div className="Dropdown__container__content about__content__container">
                      <p className="about__content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                      </div>
                  }
              </div>
              <div className="Dropdown__container">

                  <div className="Dropdown__container__title about__title__container">
                      <h1 className="about__title">Sécurité</h1>
                      <img src={isSecuriteOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="Securite" className="about__arrow"/>
                  </div>

                  { isSecuriteOpen &&
                      <div className="Dropdown__container__content about__content__container">
                      <p className="about__content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                      </div>
                  }
              </div>
        </div>
       </DropDown> 
    </div>
  );
}

export default About;