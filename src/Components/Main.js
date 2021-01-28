import React from 'react';
import Icon from './Icons'
import programmer from './programmer.svg';


function Main(){
    return(
        <div id="main-div">
        <h1>Sadat Akhtar</h1>
        <p><img src={programmer} alt="coding" height="50px" width="50px" /></p>
        <p id="main-p">Web Developer at CodeYourFuture<br />
         </p>
        <p id="skills">HTML | CSS | JavaScript | React | NodeJS | PostgreSQL</p>
        <Icon />
        


        </div>
    )

}
export default Main;