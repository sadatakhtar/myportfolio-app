import React from 'react';
import Icons from './Icons'
import data from './data.svg';


function Projects(){
    return (
        <div id="main-div">
        
        <h1>Projects</h1>
        <p id="project-img"><img src={data} alt="web logo" height="50px" width="50px" /></p>
        <ol>
            <li><a id="pro-links" href="https://question-mark.netlify.app/">Q&A platform</a></li>
            <li><a id="pro-links" href="https://netflix-clone-16e6a.web.app/" >Netflix Clone</a></li>
            <li><a id="pro-links" href="https://cyf-student-tracker-1.herokuapp.com" >CYF-student tracker</a></li>
            <li><a id="pro-links" href="https://cyf-sadatakhtar-countries.netlify.app/" >Countries App</a></li>
            <li><a id="pro-links" href="https://cyf-sadatakhtar-tv.netlify.app/">Tv shows</a></li>
            <li><a id="pro-links" href="https://random-quotes-appserver.netlify.app/">Random quotes</a></li>
            
        </ol>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        
        </div>
    )
}
export default Projects;
