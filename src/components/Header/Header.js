import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    const location = useLocation();

    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/images/logo_header.svg`} alt="logo" className="header--logo" />
            <nav>
                <ul className="header--text">
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : "notactive"}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about" className={location.pathname === "/about" ? "active" : "notactive"}>A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }

export default Header;
