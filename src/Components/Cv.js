import React from 'react';
import Icons from './Icons';
import curriculam from './curriculum.svg';

function Cv(){
    return (
        <div id="main-div">

        <h1>Curriculum Vitae</h1>
        <p><img src={curriculam} alt="cv-logo" width="60px" height="70px" /></p>
        <h2 id="cv-h2"><a id="cv-link" href="https://docs.google.com/document/d/1p9-4aXI951dotOAKszdt2rsy6_8OU8vAVxph7cTyLuQ/edit" 
        >Click here to view CV</a></h2>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | Python</p>
        <Icons />
        </div>
    )
}
export default Cv;