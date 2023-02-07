import "../../styles/Logements.css"


/* Création d'un carousel prenant en compte les données récupérées dans les props, le carousel doit contenir toutes les images récupérées, même si leur nombre peut varier. Il contient également des flèches pour gérer l'affichage*/

function Carousel(props) {
    return (
        <div className="Carousel">
            <div className="Carousel__container">
                <div className="Carousel__container__arrow Carousel__container__arrow--left">
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="Carousel__container__arrow Carousel__container__arrow--right">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="Carousel__container__image">
                    {props.logement.pictures.map((image, index) => (
                        <img src={image} alt="logement" key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Carousel