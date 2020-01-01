import React from 'react';
import Icons from './Icons'
import data from './data.svg';


function Projects(){
    return (
        <div id="main-div">
        
        <h1>Projects</h1>
        <p><img src={data} alt="web logo" height="50px" width="50px" /></p>
        <ol>
            <li><a href="https://codepen.io/shadowak47/pen/QxpgXL" target="_blank">Tribute Page</a></li>
            <li><a href="https://codepen.io/shadowak47/pen/vYEeYgK" target="_blank">Landing Page</a></li>
            <li><a href="https://codepen.io/shadowak47/pen/zYxZzZo" target="_blank">Survey Form</a></li>
            <li>Python NewsFeeder</li>
            <li>Network Pen-tester(Python)</li>
        </ol>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        
        </div>
    )
}
export default Projects;