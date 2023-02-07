import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer">
            <img src={`${process.env.PUBLIC_URL}/images/logo_footer.svg`} alt="logo" className="footer--logo" />
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;