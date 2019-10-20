import React from "react";
import Project from "./proj-prev";

const images = [
    {
        path: "csicop",
        newTabUrl: "https://skepticalinquirer.org/"
    }, 
    {
        path: "csicon-2019",
        newTabUrl: "https://csiconference.org/"
    }, 
    {
        path: "point-of-inquiry",
        newTabUrl: "https://pointofinquiry.org/"
    }, 
    {
        path: "center-for-inquiry",
        newTabUrl: "https://centerforinquiry.org/"
    }
]

const ProjectContainer = props => (
    <div className="row work-row">

        <div className="p-container">
        <p>I picked the following projects, because they were some of my favorites to work on. In each one, I have been tasked to be the front-end developer &amp; designer; writing HTML, CSS, and JavaScript. Unfortunately, access to the source code is&nbsp;private.</p>
        </div>
        
        {
            images.map(function(image, index){
                return (
                    <Project key={index} url={require(`../img/projects/${image.path}.png`)} tabUrl={image.newTabUrl} />
                )
            })
        }
    </div>
)

export default ProjectContainer;