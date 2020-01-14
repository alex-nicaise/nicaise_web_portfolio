import React from "react";
import webIcons from "../img/nicaise-web-icons.png";
import Resume from "../docs/Nicaise_Resume_2020.pdf";

const Intro = props => (
    <div id="intro-p">
        <img src={webIcons} id="web-icons" alt="Computer, Tablet, and Cactus on a desk." />
        <h2>Welcome.</h2>
        <div className="p-container">
            <p>My name is Alex. I am a graphic and web designer with a passion for coding, currently residing in New&nbsp;York&nbsp;City.</p>
        </div>
        <a href={Resume} download id="intro-grey-button">Download My Resume</a>
        <hr />
    </div>
);

export default Intro;