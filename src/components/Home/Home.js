import Card from "./Card"
import "../../styles/Home.css"
import Logements from "../../data/logements.json"

function Home() {

    const cards = Logements.map((logement) => {
        return <Card key={logement.id} logement={logement} />
    })


    return (
        <div className="Home">
            <div className="Home__banner">
            <img src={process.env.PUBLIC_URL + "/images/home/banner.png"} alt="home"/>
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="Home__cards">
                {cards}
            </div>
        </div>
    )
}

export default Home