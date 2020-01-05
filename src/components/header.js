import React from "react";
import Logo from "../img/nicaise-logo.png";
import Resume from "../docs/Nicaise_Resume_2020.pdf";

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

        if (this.state.open === false){
            document.getElementById("main-menu").classList.add("active");
            document.getElementById("mm-open").classList.add("active");
            this.setState({ open: true });
        } else {
            document.getElementById("main-menu").classList.remove("active");
            document.getElementById("mm-open").classList.remove("active");
            this.setState({ open: false });
        }
    }

    render() {
        return (
            <div id="header">
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="/">
                    <img src={Logo} id="my-logo" alt="Alex Nicaise Logo" />
                </a>
                <button id="mm-open" className="d-block d-sm-none" onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul id="main-menu">
                    <a href={Resume} download><li>Resume</li></a>
                    <a href="https://github.com/alex-nicaise/nicaise_web_portfolio" target="_blank" rel="noreferrer noopener"><li>Source Code</li></a>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Header;