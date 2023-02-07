import { Link } from "react-router-dom"
import "../../styles/Home.css"


/* Réécris la carte en passant l'id du logement en props à la route /logement/:id */

function Card(props) {
    return (
        <Link to={`/logement/${props.logement.id}`}>
        <div className="Card">
            <img src={props.logement.cover} alt="home"/>
            <h2>{props.logement.title}</h2>
        </div>
        </Link>
    )
}


export default Card
