import React from "react";
import Tool from "./tools";

const icons = [
    {
        path: "resume-icon",
        name: "Download Resume"
    }, 
    {
        path: "source-code-icon",
        name: "Source Code"
    }
]

const ToolContainer = props => (
    <div className="row work-row">
        {
            icons.map(function(icon, index){
                return (
                    <Tool key={index} toolSrc={require(`../img/icons/${icon.path}.png`)} btnName={icon.name} />
                )
            })
        }
    </div>
)

export default ToolContainer;