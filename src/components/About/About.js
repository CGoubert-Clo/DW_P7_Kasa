import "./About.css"
import "../DropDown/Dropdown.css"

import DropDown from "../DropDown/Dropdown"

function About() {


  return (
    <div className="About">
            <div className="About__banner">
            </div>

        <div className="Dropdown">
            <div className="Dropdown__about">

                <DropDown title="Fiabilité" page="about"  >
                    <p className="about__content">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                </DropDown> 
                    
                <DropDown title="Respect" page="about"  >   
                    <p className="about__content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </DropDown>
                    
                <DropDown title="Service" page="about"  >
                    <p className="about__content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </DropDown>
                    
                <DropDown title="Sécurité" page="about"  >
                    <p className="about__content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </DropDown>
                
            </div>
        </div>
    </div>
  );
}

export default About;