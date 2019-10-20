import React from "react";
import tabIcon from "../img/new-tab-icon.png";

const Project = props => (
    <div className="col-12 col-md-6 col-xl-3 project-cols" 
    style={{ backgroundImage: "url(" + props.url + ")"}}>
        <a href={props.tabUrl} className="new-tab-button" rel="noopener noreferrer" target="_blank">
            <img className="new-tab" src={tabIcon}></img>
        </a>
    </div>
)

export default Project;