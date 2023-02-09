import { Link } from "react-router-dom"
import "./Home.css"




function Card(props) {  

    return (
        <Link to={`/logement/${props.logement.id}`}>
        <div className="Card">
            <img src={props.logement.cover} alt="home"/>
            <div className="Card__infos">
                <h2>{props.logement.title}</h2>
            </div>
        </div>
        </Link>
    )
}


export default Card

