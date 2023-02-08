import "../../styles/Carousel.css"
import { useParams } from "react-router-dom"
import Carousel from "./Carousel"
import Dropdownlog from "./Dropdownlog"

function Logements(props) {
    const { id } = useParams()
    const logement = props.logements.find((logement) => logement.id === id)
    
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
            <Carousel logement={logement} />
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
              <Dropdownlog logement={logement} />
            </div>
              
        </div>
    )
}

export default Logements