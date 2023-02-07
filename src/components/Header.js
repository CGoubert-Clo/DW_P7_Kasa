import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return (
        <header>
            <img src={`${process.env.PUBLIC_URL}/images/logo_header.svg`} alt="logo" className="header--logo" />
            <nav>
                <ul className="header--text">
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    }

export default Header;