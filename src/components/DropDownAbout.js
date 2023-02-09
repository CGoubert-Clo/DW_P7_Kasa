import "../styles/DropDownAbout.css"
import { useState } from "react"

function DropDownAbout() {

    
    const [isFiabiliteOpen, setIsFiabiliteOpen] = useState(false)
    const [isRespectOpen, setIsRespectOpen] = useState(false)
    const [isServiceOpen, setIsServiceOpen] = useState(false)
    const [isReponsabiliteOpen, setIsReponsabiliteOpen] = useState(false)

    const handleClick = (e) => {
        if (e.target.id === "fiabilite") {
            setIsFiabiliteOpen(!isFiabiliteOpen)
        } else if (e.target.id === "respect") {
            setIsRespectOpen(!isRespectOpen)
        } else if (e.target.id === "service") {
            setIsServiceOpen(!isServiceOpen)
        } else if (e.target.id === "reponsabilite") {
            setIsReponsabiliteOpen(!isReponsabiliteOpen)
        }
    }




    return (
        <div className="DropDownAbout">
            <div className="Dropdown__container">

                <div className="Dropdown__container__title">
                    <h1>Fiabilité</h1>
                    <img src={isFiabiliteOpen? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="fiabilite"/>
                </div>

                { isFiabiliteOpen &&
                    <div className="Dropdown__container__content">
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </div>}
            </div>

            <div className="Dropdown__container">

                <div className="Dropdown__container__title" >
                    <h1>Respect</h1>
                    <img src={isRespectOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="respect"/>
                </div>

                { isRespectOpen &&
                    <div className="Dropdown__container__content">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                }
            </div>
            <div className="Dropdown__container">

                <div className="Dropdown__container__title">
                    <h1>Service</h1>
                    <img src={isServiceOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="service"/>
                </div>

                { isServiceOpen &&
                    <div className="Dropdown__container__content">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </div>
                }
            </div>
            <div className="Dropdown__container">

                <div className="Dropdown__container__title">
                    <h1>Responsabilité</h1>
                    <img src={isReponsabiliteOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleClick} id="reponsabilite"/>
                </div>

                { isReponsabiliteOpen &&
                    <div className="Dropdown__container__content">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default DropDownAbout;