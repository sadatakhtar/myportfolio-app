import React from 'react';
import Icons from './Icons';

function Cv(){
    return (
        <div id="main-div">
        <h1><u>Curriculum Vitae</u></h1>
        <h2><a href="https://docs.google.com/document/d/1G4FfqLL1H-fgd2u5E1euYwbFfDHMviE_bkei4VnWyhE/edit?usp=sharing" 
        target="_blank">View an online copy of my CV</a></h2>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        </div>
    )
}
export default Cv;