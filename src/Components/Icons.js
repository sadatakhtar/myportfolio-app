import React from 'react';
import Linkedin from './linkedincolored.svg';
import Twitter from './twittercolored.svg';
import Logo2 from './gmailcolored.svg';
import Github from './githubcolored.svg';
import Contact from './Contact';

function Icons (){
    return (
       <p className="icons">
           <a href="https://www.linkedin.com/in/sadat-akhtar-396189a7/"><img src={Linkedin}
        alt=" Linkedin logo" height="50px" width="50px" target="_blank" /></a> 

       <a href="https://twitter.com/SadatAkhtar"><img src={Twitter}
        alt="twitter logo" height="50px" width="50px" target="_blank"/></a>

        <a href="#"><img src={Logo2}
        alt="logo2" height="50px" width="50px"/></a>

        <a href="https://github.com/sadatakhtar"><img src={Github}
        alt="logo3" height="50px" width="50px" target="_blank"/></a>
        </p>
    )
}
export default Icons;