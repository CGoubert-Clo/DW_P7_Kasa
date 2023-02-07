import "../../styles/Logements.css"
import { useParams } from "react-router-dom"
import Carousel from "./Carousel"

function Logements(props) {
    const { id } = useParams()
    const logement = props.logements.find((logement) => logement.id === id)
    console.log(logement)
    return (
        <div className="Logement">
            <Carousel logement={logement} />
        </div>
    )
}

export default Logements