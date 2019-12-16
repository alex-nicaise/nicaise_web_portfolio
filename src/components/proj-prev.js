import React from "react";
import tabIcon from "../img/new-tab-icon.png";

const Project = props => (
    <a className="col-12 col-md-6" href={props.tabUrl} rel="noopener noreferrer" target="_blank">
        <div className="col-12 project-cols" 
        style={{ backgroundImage: "url(" + props.url + ")"}}>
            <div className="new-tab-button">
                <img className="new-tab" src={tabIcon}></img>
            </div>
        </div>
    </a>
)

export default Project;