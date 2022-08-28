import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import "../Header/Header.scss"

export const Header = () => {
    return (
        <section class="top-nav">
    <div>
      <img src={logo}></img>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </section>
    )
}

export default Header;