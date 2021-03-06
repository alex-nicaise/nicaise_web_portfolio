import React from "react";
import Logo from "../img/nicaise-logo.png";
import Resume from "../docs/Nicaise_Resume_2020c.pdf";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();

        this.state.open === false ? this.setState({ open: true }) : this.setState({ open: false })
    }

    render() {
        return (
            <div id="header">
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="/">
                    <img src={Logo} id="my-logo" alt="Alex Nicaise Logo" />
                </a>
                <button id="mm-open" className={this.state.open ? "d-block d-sm-none active" : "d-block d-sm-none"} onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul id="main-menu" className={this.state.open ? "active" : ""}>
                    <a href={Resume} download><li>Resume</li></a>
                    <a href="https://github.com/alex-nicaise/nicaise_web_portfolio" target="_blank" rel="noreferrer noopener"><li>Source Code</li></a>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Header;