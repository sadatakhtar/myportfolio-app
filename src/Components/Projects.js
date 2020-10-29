import React from 'react';
import Icons from './Icons'
import data from './data.svg';


function Projects(){
    return (
        <div id="main-div">
        
        <h1>Projects</h1>
        <p id="project-img"><img src={data} alt="web logo" height="50px" width="50px" /></p>
        <ol>
           
            <li><a id="pro-links" href="https://netflix-clone-16e6a.web.app/" target="_blank">Netflix Clone</a></li>
            <li><a id="pro-links" href="https://github.com/sadatakhtar/py-newsFeeder/blob/master/newsFeeder.py"
             target="_blank">Python NewsFeeder</a></li>
            <li><a id="pro-links" href="https://github.com/sadatakhtar/net-H-toolz/blob/master/netH.py" 
            target="_blank">Network Pen-tester(Python)</a></li>
            
        </ol>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        
        </div>
    )
}
export default Projects;
