import React from "react";
import Project from "./proj-prev";

const images = [
    {
        path: "point-of-inquiry",
        newTabUrl: "https://pointofinquiry.org/"
    }, 
    {
        path: "ties-education",
        newTabUrl: "https://tieseducation.org/"
    },
    {
        path: "csicon-2019",
        newTabUrl: "https://csiconference.org/"
    },
    {
        path: "csicop",
        newTabUrl: "https://skepticalinquirer.org/"
    } 
]

const ProjectContainer = props => (
    <div className="row work-row">

        <div className="p-container">
        <p>I have picked the following projects, because they were some of my favorites to work on. In each one, I was tasked to be the front-end designer &amp; developer; writing HTML, CSS, and JavaScript. Unfortunately, access to the source code is&nbsp;private.</p>
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