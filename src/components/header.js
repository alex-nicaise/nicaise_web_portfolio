import React from "react";
import Logo from "../img/nicaise-logo.png";

const Header = props => (
    <div id="header">
        <nav className="navbar navbar-light">
            <a className="navbar-brand" href="/">
                <img src={Logo} id="my-logo" alt="Alex Nicaise Logo" />
            </a>
        <ul id="main-menu">
            <li>Projects</li>
            <li>Design</li>
            <li>Resume</li>
        </ul>
        </nav>
    </div>
);

export default Header;