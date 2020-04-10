import React from 'react';
import Icons from './Icons'
import data from './data.svg';


function Projects(){
    return (
        <div id="main-div">
        
        <h1>Projects</h1>
        <p id="project-img"><img src={data} alt="web logo" height="50px" width="50px" /></p>
        <ol>
            <li><a id="pro-links" href="https://codepen.io/shadowak47/pen/QxpgXL" target="_blank">Tribute Page</a></li>
            <li><a id="pro-links" href="https://www.khanacademy.org/computing/computer-programming/programming/animation-basics/pp/project-shooting-star" target="_blank">Shooting star</a></li>
            <li><a id="pro-links" href="https://codepen.io/shadowak47/pen/vYEeYgK" target="_blank">Landing Page</a></li>
            <li><a id="pro-links" href="https://codepen.io/shadowak47/pen/zYxZzZo" target="_blank">Survey Form</a></li>
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