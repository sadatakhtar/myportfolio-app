import React from 'react';

import About from './About'
import Contact from './Contact';
import App from '../App';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';



function Header (){
    return (
       
            
            
        
            <ul id="ul"> 

            
                <Link to="/Components/Main">
                <li id="li">Home</li>
                </Link>

                <Link to="/Components/Projects">
                <li id="li">Projects</li>
                </Link>

                <Link to="/Components/Cv">
                <li id="li">CV</li>
                </Link>

                <Link to="/Components/About">
                <li id="li">About</li>
                </Link>
               
               <Link to="/Components/Contact">
                <li id="li">Contact</li>
                </Link>
               
               
            </ul>
         
          
          
           
    )
}
export default Header;