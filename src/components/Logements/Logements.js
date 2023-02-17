import "./Logements.css"
import { useParams, useNavigate, Navigate } from "react-router-dom"
import Carousel from "./Carousel/Carousel"
import Dropdown from "../DropDown/Dropdown"
import NotFound from "../NotFound/NotFound"
import { useState } from "react"

function Logements(props) {


    const { id } = useParams()
    const logement = props.logements.find((logement) => logement.id === id)



    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false)

    const handleDescriptionClick = () => {
        setIsDescriptionOpen(!isDescriptionOpen)
    }

    const handleEquipmentsClick = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen)
    }

    


    if (!logement && props.logements.length > 0) {
        return  <Navigate to="/44" />
    }


    
    const tags = logement.tags.map((tag) => (
        <div className="Logement__tag" key={tag + logement.tags.length + 1} >
            {tag}
        </div>
    ))


    
    const stars = []
    for (let i = 0; i < 5; i++) {
        if (i < logement.rating) {
            stars.push(<img src={`${process.env.PUBLIC_URL}/images/logements/rating-full.svg`} alt="star full" key={i} />)
        } else {
            stars.push(<img src={`${process.env.PUBLIC_URL}/images/logements/rating-empty.svg`} alt="star empty" key={i} />)
        }
    }



    return (
        <div className="Logement">
                <Carousel picture={logement.pictures} />
                <div className="Logement__container">

                    <div className="Logement__container__titlestags">
                        <div className="Logement__container__title">
                            <h1>{logement.title}</h1>
                            <h2>{logement.location}</h2>
                        </div>

                        <div className="Logement__container__tags">
                        {tags}
                        </div>

                    </div>


                    <div className="Logement__container__hostratings">
                        <div className="Logement__container__host">
                                <h3>{logement.host.name}</h3>
                                <img src={logement.host.picture} alt="host" />
                        </div>

                        <div className="Logement__container__ratings">
                                {stars}
                        </div>
                    </div>
                </div>
            <div className="Logement__container__description">



                <Dropdown>
                    <div className="Dropdown__log">
                        <div className="Dropdown__container">
                            <div className="Dropdown__container__title log__title__container">
                                <h1 className="log__title">Description</h1>
                                <img src={isDescriptionOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleDescriptionClick} className="arrow__log"/>
                            </div>

                            {isDescriptionOpen && 
                            <div className="Dropdown__container__content log__content__container">
                                <p className="log__content">{logement.description}</p>
                            </div>
                            }
                        </div>
                        <div className="Dropdown__container">
                            <div className="Dropdown__container__title log__title__container">
                                <h1 className="log__title">Equipements</h1>
                                <img src={isEquipmentsOpen ? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" onClick={handleEquipmentsClick} className="arrow__log"/>
                            </div>

                            {isEquipmentsOpen &&
                            <div className="Dropdown__container__content log__content__container">
                                {logement.equipments.map((equipment) => (
                                    <div className="Dropdown__container__content__equipment" key={equipment + logement.equipments.length + 1}>
                                        <p className="log__content">{equipment}</p>
                                    </div>
                                ))}
                            </div>
                            }
                        </div>
                    </div>
                </Dropdown>



            </div>
              
        </div>
    )
}

export default Logements