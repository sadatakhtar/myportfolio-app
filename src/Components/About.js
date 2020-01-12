import React from 'react';
import Icons from './Icons';

function About(){
    return (
        <div id="main-div">
        <h1><u>About me</u></h1>
        <p id="about-p1">
        My name is Sadat Akhtar, I'm an aspiring junior web developer and 
        a massive star wars fan. I have always loved playing about with computers and have never
        had a chance in pursuing this as a career. Recently I have decided to change career paths 
        from  electrics to web development.
        </p>
        <p id="about-p2">
        I am currently looking for my first role in entry level web development.
        I have since an early age been inclined towards computers, at age 11 I first encountered 
        a Packard Bell(286) PC which my father purchased for his small business. 
        My initial interest with the PC was to explore how it operated and since 
        then I have developed a passion and interest for problem solving which has 
        remained with me ever since. 
        </p>
        <p id="about-p3">
        My thirst has developed further into coding and over the years I have self 
        taught basic knowledge of HTML, CSS, Bootstrap, Javascript, React and have recently started Python.
        I also have flirted with Android studio(Mobile-apps). I have attained a Cisco Certified Network
        Associate(CCNA) qualification and am comfortable in general network administrator tasks 
        in both windows and linux platforms.
        </p>
        <p id="about-p4">
        I am currently undertaking modules as part of the freecodecamp course which has provided 
        me with a great structure of learning web development together with building a portfolio 
        of simple projects. 
        </p>
        <h2 id="hobby-h2"><u>Hobbies</u></h2>
        <ul id="hobby">
            <li id="hobby">Badminton</li>
            <li id="hobby">Snooker</li>
            <li id="hobby">Gym</li>
            <li id="hobby">Learning to code</li>
            <li id="hobby">Reading</li>
            <li id="hobby">Watching movies</li>

        </ul>
       
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        </div>
    )
}
export default About;