import "../../styles/Dropdownlog.css"
import { useState } from "react"

function Dropdownlog(props) {
    const description = props.logement.description

    const equipments = props.logement.equipments.map((equipment) => (
        <div className="Dropdown__container__content__equipment" key={equipment + props.logement.equipments.length + 1}>
            <p>{equipment}</p>
        </div>
    ))

    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false)

    const handleDescriptionClick = () => {
        setIsDescriptionOpen(!isDescriptionOpen)
    }

    const handleEquipmentsClick = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen)
    }

    return (
        <div className="Dropdown Dropdown__logement">

            <div className="Dropdown__container">

                <div className="Dropdown__container__title">
                    <h1>Description</h1>
                    <img src={isDescriptionOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleDescriptionClick}/>
                </div>

                { isDescriptionOpen &&
                    <div className="Dropdown__container__content">
                        {description}
                    </div>}
            </div>

            <div className="Dropdown__container">

                <div className="Dropdown__container__title">
                    <h1>Equipements</h1>
                    <img src={isEquipmentsOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleEquipmentsClick}/>
                </div>

                { isEquipmentsOpen &&
                    <div className="Dropdown__container__content">
                        {equipments}
                    </div>
                }
            </div>
        </div>
    )
}

export default Dropdownlog