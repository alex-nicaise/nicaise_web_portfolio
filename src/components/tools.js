import React from "react";

const Tool = props => (
    <div className="col-12 col-md-6 tool-cols">
        <img src={props.toolSrc} className="tool-img"></img>
        <a className="gray-btn" rel="noopener noreferrer" target="_blank">{props.btnName}</a>
    </div>
)

export default Tool;