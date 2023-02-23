import "./Dropdown.css"
import { useState } from "react"

function Dropdownlog({children, ...props}) {

    const title= props.title

    
    const page = props.page
    

    const [isOpen, setIsOpen] = useState(false)
 

    const handleClick = (e) => { 
            setIsOpen((prevState) => !prevState)
    }



    return (
        
            

            <div className="Dropdown__container">

                <button className={page === "about" ? "Dropdown__container__title about__title__container" : "Dropdown__container__title log__title__container"} onClick={handleClick}>
                    <h1 className={page === "about" ? "about__title" : "log__title"}>{title}</h1>
                    <img src={isOpen? `${process.env.PUBLIC_URL}/images/logements/arrow-top.svg` : `${process.env.PUBLIC_URL}/images/logements/arrow-bottom.svg`} alt="arrow" className="about__arrow"/>
                </button>

                {isOpen &&
                    <div className={page === "about" ? "Dropdown__container__content about__content__container" : "Dropdown__container__content log__content__container"}>
                        {children}
                    </div>
                }

            </div>

    )
}

export default Dropdownlog