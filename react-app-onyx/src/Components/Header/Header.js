import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import "../Header/Header.css"

export const Header = () => {
    return (
        <div className="headerContainer">
            <nav className="navigation">
                <div className="logoContainer">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="navLinks">
                    <ul>
                        <li><Link className='links' to="/">За нас</Link></li>
                        <li><Link className='links' to="/galery">Галерия</Link></li>
                        <li><Link className='links' to="/contacts">Контакти</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;